"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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
	TypographyH1,
	TypographyMuted,
	TypographyP,
} from "@/components/ui/typography"
import { loginSchema, type LoginFormValues } from "@/lib/validation/auth"

export function LoginForm() {
	const {
		step,
		signInMutation,
		verificationMutation,
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
				title="Подтвердите вход"
				description="Мы отправили код подтверждения на адрес вашей учётной записи."
				label="Код подтверждения"
				submitLabel="Подтвердить вход"
				pendingLabel="Проверяем…"
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
		...(globalErrors ?? []),
	].filter(error => error && !shownFieldMessages.has(error.message))

	return (
		<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
			<form
				className="flex w-full flex-col gap-5"
				onSubmit={form.handleSubmit(values => signInMutation.mutate(values))}
				noValidate
			>
				<header className="flex flex-col gap-2 text-center">
					<TypographyH1>С возвращением!</TypographyH1>
					<TypographyP>Мы так рады видеть вас снова!</TypographyP>
				</header>

				<FieldGroup className="gap-5">
					<Field data-invalid={!!identifierError}>
						<FieldLabel htmlFor="login-email">
							Адрес электронной почты или номер телефона{" "}
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
							Пароль <span className="text-destructive">*</span>
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
						<Button variant="link" className="w-fit justify-start">
							Забыли пароль?
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
							{signInMutation.isPending ? "Входим…" : "Вход"}
						</Button>
						<TypographyMuted>
							Нужна учётная запись?{" "}
							<AuthSwitchLink
								to="sign-up"
								className="font-medium text-primary hover:underline"
							>
								Зарегистрироваться
							</AuthSwitchLink>
						</TypographyMuted>
					</Field>
				</FieldGroup>
			</form>
		</AuthPanel>
	)
}
