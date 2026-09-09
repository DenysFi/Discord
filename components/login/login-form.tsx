"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { AuthPanel } from "@/components/auth/auth-panel"
import { AuthSwitchLink } from "@/components/auth/auth-transition"
import { AuthVerificationForm } from "@/components/auth/auth-verification-form"
import { useSignInFlow } from "@/components/login/use-sign-in-flow"
import { Button } from "@/components/ui/button"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	Modal,
	ModalClose,
	ModalDescription,
} from "@/components/ui/modal"
import {
	TypographyH1,
	TypographyMuted,
	TypographyP,
} from "@/components/ui/typography"
import {
	loginEmailSchema,
	loginSchema,
	type LoginFormValues,
} from "@/lib/validation/auth"

export function LoginForm() {
	const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
	const {
		step,
		signInMutation,
		verificationMutation,
		emailLinkMutation,
		fieldErrors,
		globalErrors,
	} = useSignInFlow()
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			identifier: "",
			password: "",
		},
		mode: "onTouched",
	})

	if (step === "verification") {
		return (
			<AuthVerificationForm
				inputId="login-code"
				title="Confirm your identity"
				description="We sent a verification code to your account email."
				label="Verification code"
				submitLabel="Confirm"
				pendingLabel="Verifying…"
				isPending={verificationMutation.isPending}
				error={verificationMutation.error}
				onSubmit={code => verificationMutation.mutate(code)}
			/>
		)
	}

	const identifierError =
		form.formState.errors.identifier ?? fieldErrors.identifier ?? undefined
	const passwordError =
		form.formState.errors.password ?? fieldErrors.password ?? undefined
	// Clerk reports the same problem both per field and per request; show it once.
	const shownFieldMessages = new Set(
		[identifierError, passwordError].map(error => error?.message),
	)
	const submitErrors = [
		signInMutation.error ?? undefined,
		emailLinkMutation.error ?? undefined,
		...(globalErrors ?? []),
	].filter(error => error && !shownFieldMessages.has(error.message))

	function handleForgotPassword() {
		const emailResult = loginEmailSchema.safeParse(form.getValues("identifier"))

		if (!emailResult.success) {
			form.setError("identifier", {
				type: "manual",
				message:
					emailResult.error.issues[0]?.message ??
					"Enter a valid email address.",
			})
			return
		}

		form.clearErrors("identifier")
		setForgotPasswordOpen(true)
		emailLinkMutation.mutate(emailResult.data)
	}

	return (
		<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
			<form
				className="flex w-full flex-col gap-5"
				onSubmit={form.handleSubmit(values => signInMutation.mutate(values))}
				noValidate
			>
				<header className="flex flex-col gap-2 text-center">
					<TypographyH1>Welcome back!</TypographyH1>
					<TypographyP>We&apos;re so excited to see you again!</TypographyP>
				</header>

				<FieldGroup className="gap-5">
					<Field data-invalid={!!identifierError}>
						<FieldLabel htmlFor="login-email">
							Email or Phone Number{" "}
							<span className="text-destructive">*</span>
						</FieldLabel>
						<Input
							id="login-email"
							type="text"
							autoComplete="username"
							aria-required="true"
							aria-invalid={!!identifierError}
							{...form.register("identifier")}
						/>
						<FieldError errors={[identifierError]} />
					</Field>

					<Field data-invalid={!!passwordError}>
						<FieldLabel htmlFor="login-password">
							Password <span className="text-destructive">*</span>
						</FieldLabel>
						<Input
							id="login-password"
							type="password"
							autoComplete="current-password"
							aria-required="true"
							aria-invalid={!!passwordError}
							{...form.register("password")}
						/>
						<FieldError errors={[passwordError]} />
						<Button
							type="button"
							variant="link"
							className="w-fit justify-start"
							disabled={emailLinkMutation.isPending}
							onClick={handleForgotPassword}
						>
							Forgot your password?
						</Button>
					</Field>

					<Field className="gap-2">
						<FieldError errors={submitErrors} />
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={signInMutation.isPending}
						>
							{signInMutation.isPending ? "Logging in…" : "Log In"}
						</Button>
						<TypographyMuted>
							Need an account?{" "}
							<AuthSwitchLink
								to="sign-up"
								className="font-medium text-primary hover:underline"
							>
								Register
							</AuthSwitchLink>
						</TypographyMuted>
					</Field>
				</FieldGroup>
			</form>

			<Modal
				open={forgotPasswordOpen}
				onOpenChange={setForgotPasswordOpen}
				title="Check your email for a login link"
			>
				<ModalDescription>
					Click the link in your email to sign in without a password.
				</ModalDescription>
				<ModalClose asChild>
					<Button size="lg" className="w-full">
						OK
					</Button>
				</ModalClose>
			</Modal>
		</AuthPanel>
	)
}
