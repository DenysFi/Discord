/** Message already translated for the user, safe to render as-is. */
class AuthFlowError extends Error {}

function toAuthFlowError(error: unknown, fallback: string) {
	if (error instanceof AuthFlowError) {
		return error
	}

	return new AuthFlowError(fallback)
}

export { AuthFlowError, toAuthFlowError }
