"use client"

import { useAuth, useClerk, useSignIn } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

import { AuthFlowError, toAuthFlowError } from "@/lib/auth/flow-error"
import { redirectHome } from "@/lib/auth/redirect-home"
import { getClerkErrorMessage } from "@/lib/clerk-error"

function useEmailLinkVerify() {
	const { isLoaded } = useAuth()
	const { setActive } = useClerk()
	const { signIn } = useSignIn()
	const verification = signIn.emailLink.verification

	const completeQuery = useQuery({
		queryKey: ["sign-in", "email-link", "complete"],
		enabled: Boolean(isLoaded && verification?.status === "verified"),
		retry: false,
		staleTime: Infinity,
		queryFn: async () => {
			const sessionId =
				verification?.createdSessionId ||
				new URLSearchParams(window.location.search).get(
					"__clerk_created_session",
				)

			try {
				if (sessionId) {
					await setActive({
						session: sessionId,
						navigate: async ({ decorateUrl }) => {
							redirectHome(decorateUrl)
						},
					})
					return "active" as const
				}

				if (signIn.status === "complete") {
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

					return "finalized" as const
				}

				throw new AuthFlowError(
					"Сессия не создана. Вернитесь на страницу входа и запросите новую ссылку.",
				)
			} catch (error) {
				throw toAuthFlowError(error, "Не удалось завершить вход.")
			}
		},
	})

	return {
		isLoaded,
		verification,
		completeQuery,
	}
}

export { useEmailLinkVerify }
