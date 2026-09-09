"use client"

import Link from "next/link"
import type { ReactNode } from "react"

import { AuthPanel } from "@/components/auth/auth-panel"
import { useEmailLinkVerify } from "@/components/login/use-email-link-verify"
import { Button } from "@/components/ui/button"
import {
	TypographyH1,
	TypographyMuted,
	TypographyP,
} from "@/components/ui/typography"

function VerifyState({
	title,
	description,
	footer,
}: {
	title: string
	description: string
	footer?: ReactNode
}) {
	return (
		<AuthPanel orientation="vertical" className="w-full max-w-[440px]">
			<header className="flex flex-col gap-2 text-center">
				<TypographyH1>{title}</TypographyH1>
				<TypographyP>{description}</TypographyP>
			</header>
			{footer}
		</AuthPanel>
	)
}

function BackToSignIn() {
	return (
		<Button asChild size="lg" className="w-full">
			<Link href="/sign-in">Back to Login</Link>
		</Button>
	)
}

export default function SignInVerifyPage() {
	const { isLoaded, verification, completeQuery } = useEmailLinkVerify()

	if (!isLoaded || !verification) {
		return (
			<VerifyState
				title="Verifying link…"
				description="Please wait while we confirm your sign-in."
			/>
		)
	}

	if (verification.status === "failed") {
		return (
			<VerifyState
				title="Link didn't work"
				description="We couldn't verify your sign-in link. Request a new one on the login page."
				footer={<BackToSignIn />}
			/>
		)
	}

	if (verification.status === "expired") {
		return (
			<VerifyState
				title="Link expired"
				description="This link has expired. Request a new one on the login page."
				footer={<BackToSignIn />}
			/>
		)
	}

	if (verification.status === "client_mismatch") {
		return (
			<VerifyState
				title="Return to the login tab"
				description="The link was confirmed. Sign-in will finish in the browser where you clicked “Forgot your password?”. You can close this tab."
				footer={
					<TypographyMuted className="text-center">
						If you weren&apos;t signed in, open the link in the same browser.
					</TypographyMuted>
				}
			/>
		)
	}

	if (completeQuery.isError) {
		return (
			<VerifyState
				title="Couldn't sign in"
				description={
					completeQuery.error instanceof Error
						? completeQuery.error.message
						: "Couldn't complete sign-in."
				}
				footer={<BackToSignIn />}
			/>
		)
	}

	return (
		<VerifyState
			title="Signing you in…"
			description="Please wait while we open the app."
		/>
	)
}
