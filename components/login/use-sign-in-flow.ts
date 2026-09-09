"use client"

import { useClerk, useSignIn } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { AuthFlowError, toAuthFlowError } from "@/lib/auth/flow-error"
import { redirectHome } from "@/lib/auth/redirect-home"
import { getClerkErrorMessage } from "@/lib/clerk-error"
import type { LoginEmail, LoginFormValues } from "@/lib/validation/auth"

type SignInStep = "credentials" | "verification"

function isIdentifierNotFound(error: unknown) {
	if (!error || typeof error !== "object") return false

	const code =
		"code" in error && typeof error.code === "string" ? error.code : undefined
	const errors =
		"errors" in error && Array.isArray(error.errors) ? error.errors : undefined
	const nestedCode =
		errors &&
		typeof errors[0] === "object" &&
		errors[0] &&
		"code" in errors[0] &&
		typeof errors[0].code === "string"
			? errors[0].code
			: undefined

	return (
		code === "form_identifier_not_found" ||
		nestedCode === "form_identifier_not_found"
	)
}

function useSignInFlow() {
	const { setActive } = useClerk()
	const { signIn, errors: clerkErrors } = useSignIn()
	const [step, setStep] = useState<SignInStep>("credentials")

	async function finalize() {
		const { error } = await signIn.finalize({
			navigate: ({ decorateUrl }) => {
				redirectHome(decorateUrl)
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

	const waitEmailLinkMutation = useMutation({
		mutationKey: ["sign-in", "email-link", "wait"],
		mutationFn: async () => {
			const { error } = await signIn.emailLink.waitForVerification()

			if (error) {
				throw toAuthFlowError(error, "Не удалось подтвердить ссылку.")
			}

			const sessionId = signIn.emailLink.verification?.createdSessionId

			if (sessionId) {
				await setActive({
					session: sessionId,
					navigate: async ({ decorateUrl }) => {
						redirectHome(decorateUrl)
					},
				})
				return
			}

			if (signIn.status === "complete") {
				await finalize()
			}
		},
	})

	const emailLinkMutation = useMutation({
		mutationKey: ["sign-in", "email-link", "send"],
		mutationFn: async (emailAddress: LoginEmail) => {
			try {
				const verificationUrl = new URL(
					"/sign-in/verify",
					window.location.origin,
				).toString()

				const { error } = await signIn.emailLink.sendLink({
					emailAddress,
					verificationUrl,
				})

				if (error) {
					// Don't reveal whether the account exists; UI still shows the modal.
					if (isIdentifierNotFound(error)) {
						return "not_found" as const
					}

					throw new AuthFlowError(
						getClerkErrorMessage(
							error,
							"Не удалось отправить ссылку для входа.",
						),
					)
				}

				return "sent" as const
			} catch (error) {
				throw toAuthFlowError(
					error,
					"Не удалось отправить ссылку для входа.",
				)
			}
		},
		onSuccess: result => {
			if (result === "sent") {
				waitEmailLinkMutation.mutate()
			}
		},
	})

	return {
		step,
		signInMutation,
		verificationMutation,
		emailLinkMutation,
		fieldErrors: clerkErrors.fields,
		globalErrors: clerkErrors.global?.map(error => ({
			message: error.longMessage ?? error.message,
		})),
	}
}

export { useSignInFlow, type SignInStep }
