"use client"

import { useSignIn } from "@clerk/nextjs"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"
import { useForm } from "react-hook-form"

import { AuthPanel } from "@/components/auth/auth-panel"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	TypographyH1,
	TypographyMuted,
	TypographyP,
} from "@/components/ui/typography"
import {
	loginSchema,
	type LoginFormValues,
} from "@/lib/validation/auth"
import { getClerkErrorMessage } from "@/lib/clerk-error"
export function LoginForm() {
	const { signIn, fetchStatus, errors: clerkErrors } = useSignIn()
	const router = useRouter()
	const [isVerifying, setIsVerifying] = useState(false)
	const [verificationCode, setVerificationCode] = useState("")
	const [verificationError, setVerificationError] = useState<string>()
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			identifier: "",
			password: "",
		},
		mode: "onTouched",
	})

	async function finalizeSignIn() {
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
			form.setError("root", {
				message: getClerkErrorMessage(error, "Не удалось завершить вход."),
			})
		}
	}

	async function verifySecondFactor(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setVerificationError(undefined)

		if (!verificationCode.trim()) {
			setVerificationError("Введите код из письма.")
			return
		}

		try {
			const { error } = await signIn.mfa.verifyEmailCode({
				code: verificationCode.trim(),
			})

			if (error) {
				setVerificationError(
					getClerkErrorMessage(error, "Код подтверждения недействителен."),
				)
				return
			}

			if (signIn.status === "complete") {
				await finalizeSignIn()
				return
			}

			setVerificationError("Не удалось завершить дополнительную проверку.")
		} catch {
			setVerificationError("Не удалось проверить код. Попробуйте ещё раз.")
		}
	}

	async function onSubmit(values: LoginFormValues) {
		form.clearErrors("root")

		try {
			const { error } = await signIn.password({
				identifier: values.identifier,
				password: values.password,
			})

			if (error) {
				form.setError("root", {
					message: getClerkErrorMessage(error, "Проверьте данные для входа."),
				})
				return
			}

			if (signIn.status === "complete") {
				await finalizeSignIn()
				return
			}

			if (
				(signIn.status === "needs_second_factor" ||
					signIn.status === "needs_client_trust") &&
				signIn.supportedSecondFactors.some(
					factor => factor.strategy === "email_code",
				)
			) {
				const { error: sendCodeError } = await signIn.mfa.sendEmailCode()

				if (sendCodeError) {
					form.setError("root", {
						message: getClerkErrorMessage(
							sendCodeError,
							"Не удалось отправить код подтверждения.",
						),
					})
					return
				}

				setIsVerifying(true)
				return
			}

			form.setError("root", {
				message: "Не удалось завершить вход. Попробуйте ещё раз.",
			})
		} catch {
			form.setError("root", {
				message: "Не удалось связаться с сервисом авторизации.",
			})
		}
	}

	if (isVerifying) {
		return (
			<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
				<form
					className="flex w-full flex-col gap-5"
					onSubmit={verifySecondFactor}
				>
					<header className="flex flex-col gap-2 text-center">
						<TypographyH1>Подтвердите вход</TypographyH1>
						<TypographyMuted>
							Мы отправили код подтверждения на адрес вашей учётной записи.
						</TypographyMuted>
					</header>
					<Field data-invalid={!!verificationError}>
						<FieldLabel htmlFor="login-code">Код подтверждения</FieldLabel>
						<Input
							id="login-code"
							type="text"
							inputMode="numeric"
							autoComplete="one-time-code"
							value={verificationCode}
							onChange={event => setVerificationCode(event.target.value)}
							aria-invalid={!!verificationError}
							aria-required="true"
							autoFocus
						/>
						<FieldError>{verificationError}</FieldError>
					</Field>
					<Button type="submit" size="lg" disabled={fetchStatus === "fetching"}>
						{fetchStatus === "fetching" ? "Проверяем…" : "Подтвердить вход"}
					</Button>
				</form>
			</AuthPanel>
		)
	}

	const identifierError =
		form.formState.errors.identifier ?? clerkErrors.fields.identifier ?? undefined
	const passwordError =
		form.formState.errors.password ?? clerkErrors.fields.password ?? undefined
	const clerkGlobalErrors = clerkErrors.global?.map(error => ({
		message: error.longMessage ?? error.message,
	}))

	return (
		<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
			<form
				className="flex w-full flex-col gap-5"
				onSubmit={form.handleSubmit(onSubmit)}
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
					</Field>

					<Field className="gap-2">
						<FieldError
							errors={[
								form.formState.errors.root,
								...(clerkGlobalErrors ?? []),
							]}
						/>
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={
								form.formState.isSubmitting || fetchStatus === "fetching"
							}
						>
							{form.formState.isSubmitting || fetchStatus === "fetching"
								? "Входим…"
								: "Вход"}
						</Button>
						<TypographyMuted>
							Нужна учётная запись?{" "}
							<Link
								href="/sign-up"
								className="font-medium text-primary hover:underline"
							>
								Зарегистрироваться
							</Link>
						</TypographyMuted>
					</Field>
				</FieldGroup>
			</form>
		</AuthPanel>
	)
}
