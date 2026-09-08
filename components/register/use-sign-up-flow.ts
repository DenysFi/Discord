"use client"

import { useSignUp } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { AuthFlowError, toAuthFlowError } from "@/lib/auth/flow-error"
import { getClerkErrorMessage } from "@/lib/clerk-error"
import type { RegisterFormValues } from "@/lib/validation/auth"

type SignUpStep = "details" | "verification"

function toBirthDate(values: RegisterFormValues) {
	const month = values.birthMonth.padStart(2, "0")
	const day = values.birthDay.padStart(2, "0")

	return `${values.birthYear}-${month}-${day}`
}

function useSignUpFlow() {
	const { signUp, errors: clerkErrors } = useSignUp()
	const router = useRouter()
	const [step, setStep] = useState<SignUpStep>("details")

	async function finalize() {
		const { error } = await signUp.finalize({
			navigate: ({ decorateUrl }) => {
				const url = decorateUrl("/")

				if (url.startsWith("http")) {
					window.location.assign(url)
					return
				}

				router.replace(url)
			},
		})

		if (error) {
			throw new AuthFlowError(
				getClerkErrorMessage(error, "Не удалось завершить регистрацию."),
			)
		}
	}

	const signUpMutation = useMutation({
		mutationKey: ["sign-up", "password"],
		mutationFn: async (values: RegisterFormValues) => {
			try {
				const { error } = await signUp.password({
					emailAddress: values.email,
					password: values.password,
					unsafeMetadata: {
						birthDate: toBirthDate(values),
						displayName: values.displayName,
						marketing: values.marketing,
						username: values.username,
					},
				})

				if (error) {
					throw new AuthFlowError(
						getClerkErrorMessage(error, "Не удалось создать учётную запись."),
					)
				}

				if (signUp.status === "complete") {
					await finalize()
					return "complete" as const
				}

				const { error: sendCodeError } =
					await signUp.verifications.sendEmailCode()

				if (sendCodeError) {
					throw new AuthFlowError(
						getClerkErrorMessage(
							sendCodeError,
							"Не удалось отправить код подтверждения.",
						),
					)
				}

				return "needs_email_code" as const
			} catch (error) {
				throw toAuthFlowError(
					error,
					"Не удалось связаться с сервисом авторизации.",
				)
			}
		},
		onSuccess: result => {
			if (result === "needs_email_code") {
				setStep("verification")
			}
		},
	})

	const verificationMutation = useMutation({
		mutationKey: ["sign-up", "email-code"],
		mutationFn: async (code: string) => {
			const trimmedCode = code.trim()

			if (!trimmedCode) {
				throw new AuthFlowError("Введите код из письма.")
			}

			try {
				const { error } = await signUp.verifications.verifyEmailCode({
					code: trimmedCode,
				})

				if (error) {
					throw new AuthFlowError(
						getClerkErrorMessage(error, "Код подтверждения недействителен."),
					)
				}

				if (signUp.status !== "complete") {
					throw new AuthFlowError(
						"Для завершения регистрации требуются дополнительные данные.",
					)
				}

				await finalize()
			} catch (error) {
				throw toAuthFlowError(
					error,
					"Не удалось проверить код. Попробуйте ещё раз.",
				)
			}
		},
	})

	return {
		step,
		signUpMutation,
		verificationMutation,
		fieldErrors: clerkErrors.fields,
		globalErrors: clerkErrors.global?.map(error => ({
			message: error.longMessage ?? error.message,
		})),
	}
}

export { useSignUpFlow, type SignUpStep }
