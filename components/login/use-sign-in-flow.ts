"use client"

import { useSignIn } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { AuthFlowError, toAuthFlowError } from "@/lib/auth/flow-error"
import { getClerkErrorMessage } from "@/lib/clerk-error"
import type { LoginFormValues } from "@/lib/validation/auth"

type SignInStep = "credentials" | "verification"

function useSignInFlow() {
	const { signIn, errors: clerkErrors } = useSignIn()
	const router = useRouter()
	const [step, setStep] = useState<SignInStep>("credentials")

	async function finalize() {
		const { error } = await signIn.finalize({
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
				getClerkErrorMessage(error, "Не удалось завершить вход."),
			)
		}
	}

	const signInMutation = useMutation({
		mutationKey: ["sign-in", "password"],
		mutationFn: async (values: LoginFormValues) => {
			try {
				const { error } = await signIn.password({
					identifier: values.identifier,
					password: values.password,
				})

				if (error) {
					throw new AuthFlowError(
						getClerkErrorMessage(error, "Проверьте данные для входа."),
					)
				}

				if (signIn.status === "complete") {
					await finalize()
					return "complete" as const
				}

				const needsEmailCode =
					(signIn.status === "needs_second_factor" ||
						signIn.status === "needs_client_trust") &&
					signIn.supportedSecondFactors.some(
						factor => factor.strategy === "email_code",
					)

				if (!needsEmailCode) {
					throw new AuthFlowError(
						"Не удалось завершить вход. Попробуйте ещё раз.",
					)
				}

				const { error: sendCodeError } = await signIn.mfa.sendEmailCode()

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
		mutationKey: ["sign-in", "email-code"],
		mutationFn: async (code: string) => {
			const trimmedCode = code.trim()

			if (!trimmedCode) {
				throw new AuthFlowError("Введите код из письма.")
			}

			try {
				const { error } = await signIn.mfa.verifyEmailCode({
					code: trimmedCode,
				})

				if (error) {
					throw new AuthFlowError(
						getClerkErrorMessage(error, "Код подтверждения недействителен."),
					)
				}

				if (signIn.status !== "complete") {
					throw new AuthFlowError(
						"Не удалось завершить дополнительную проверку.",
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
		signInMutation,
		verificationMutation,
		fieldErrors: clerkErrors.fields,
		globalErrors: clerkErrors.global?.map(error => ({
			message: error.longMessage ?? error.message,
		})),
	}
}

export { useSignInFlow, type SignInStep }
