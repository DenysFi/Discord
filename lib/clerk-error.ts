import { isClerkAPIResponseError } from "@clerk/nextjs/errors"

type ClerkErrorLike = Error & {
	cause?: unknown
	longMessage?: string
}

function getApiErrorMessage(error: unknown) {
	if (!isClerkAPIResponseError(error)) {
		return undefined
	}

	const apiError = error.errors[0]
	return apiError?.longMessage ?? apiError?.message
}

export function getClerkErrorMessage(error: unknown, fallback: string) {
	const directApiMessage = getApiErrorMessage(error)

	if (directApiMessage) {
		return directApiMessage
	}

	if (error instanceof Error) {
		const clerkError = error as ClerkErrorLike
		const causeMessage = getApiErrorMessage(clerkError.cause)

		return clerkError.longMessage ?? causeMessage ?? fallback
	}

	return fallback
}
