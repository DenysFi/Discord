"use client"

import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"
import { Controller, type Control, useForm } from "react-hook-form"

import { AuthPanel } from "@/components/auth/auth-panel"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
	Field,
	FieldContent,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { TypographyH1, TypographyMuted } from "@/components/ui/typography"
import {
	registerSchema,
	type RegisterFormValues,
} from "@/lib/validation/auth"
import { getClerkErrorMessage } from "@/lib/clerk-error"

const MONTHS = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
]

const DAYS = Array.from({ length: 31 }, (_, index) => index + 1)
const YEARS = Array.from(
	{ length: 100 },
	(_, index) => new Date().getFullYear() - index,
)

type BirthDateFieldName = "birthDay" | "birthMonth" | "birthYear"

type BirthDateSelectProps = {
	control: Control<RegisterFormValues>
	label: string
	name: BirthDateFieldName
	options: Array<number | string>
}

function RequiredMark() {
	return <span className="text-destructive">*</span>
}

function BirthDateSelect({
	control,
	label,
	name,
	options,
}: BirthDateSelectProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Select
					name={field.name}
					value={field.value}
					onValueChange={field.onChange}
				>
					<SelectTrigger
						ref={field.ref}
						onBlur={field.onBlur}
						className="w-full"
						size="sm"
						aria-label={label}
						aria-invalid={fieldState.invalid}
						aria-required="true"
					>
						<SelectValue placeholder={label} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{options.map((option, index) => (
								<SelectItem
									key={option}
									value={String(
										typeof option === "number" ? option : index + 1,
									)}
								>
									{option}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}
		/>
	)
}

export function RegisterForm() {
	const { signUp, fetchStatus, errors: clerkErrors } = useSignUp()
	const router = useRouter()
	const [isVerifying, setIsVerifying] = useState(false)
	const [verificationCode, setVerificationCode] = useState("")
	const [verificationError, setVerificationError] = useState<string>()
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			displayName: "",
			username: "",
			password: "",
			birthDay: "",
			birthMonth: "",
			birthYear: "",
			marketing: false,
			terms: false,
		},
		mode: "onTouched",
	})
	const { errors } = form.formState
	const emailError = errors.email ?? clerkErrors.fields.emailAddress ?? undefined
	const passwordError = errors.password ?? clerkErrors.fields.password ?? undefined
	const usernameError = errors.username ?? clerkErrors.fields.username ?? undefined
	const hasClerkErrors =
		Object.values(clerkErrors.fields).some(Boolean) ||
		Boolean(clerkErrors.global?.length)
	const hasErrors = Object.keys(errors).length > 0 || hasClerkErrors
	const birthDateError =
		errors.birthDay ?? errors.birthMonth ?? errors.birthYear
	const isSubmitting =
		form.formState.isSubmitting || fetchStatus === "fetching"

	async function finalizeSignUp() {
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
			setVerificationError(
				getClerkErrorMessage(error, "Не удалось завершить регистрацию."),
			)
		}
	}

	async function onSubmit(values: RegisterFormValues) {
		form.clearErrors("root")

		try {
			const birthDate = `${values.birthYear}-${values.birthMonth.padStart(2, "0")}-${values.birthDay.padStart(2, "0")}`
			const { error } = await signUp.password({
				emailAddress: values.email,
				password: values.password,
				unsafeMetadata: {
					birthDate,
					displayName: values.displayName,
					marketing: values.marketing,
					username: values.username,
				},
			})

			if (error) {
				form.setError("root", {
					message: getClerkErrorMessage(
						error,
						"Не удалось создать учётную запись.",
					),
				})
				return
			}

			if (signUp.status === "complete") {
				await finalizeSignUp()
				return
			}

			const { error: sendCodeError } =
				await signUp.verifications.sendEmailCode()

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
		} catch {
			form.setError("root", {
				message: "Не удалось связаться с сервисом авторизации.",
			})
		}
	}

	async function verifyEmail(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setVerificationError(undefined)

		if (!verificationCode.trim()) {
			setVerificationError("Введите код из письма.")
			return
		}

		try {
			const { error } = await signUp.verifications.verifyEmailCode({
				code: verificationCode.trim(),
			})

			if (error) {
				setVerificationError(
					getClerkErrorMessage(error, "Код подтверждения недействителен."),
				)
				return
			}

			if (signUp.status === "complete") {
				await finalizeSignUp()
				return
			}

			setVerificationError(
				"Для завершения регистрации требуются дополнительные данные.",
			)
		} catch {
			setVerificationError("Не удалось проверить код. Попробуйте ещё раз.")
		}
	}

	if (isVerifying) {
		return (
			<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
				<form className="flex w-full flex-col gap-5" onSubmit={verifyEmail}>
					<header className="flex flex-col gap-2 text-center">
						<TypographyH1>Подтвердите e-mail</TypographyH1>
						<TypographyMuted>
							Мы отправили код подтверждения на {form.getValues("email")}.
						</TypographyMuted>
					</header>
					<Field data-invalid={!!verificationError}>
						<FieldLabel htmlFor="register-code">
							Код подтверждения <RequiredMark />
						</FieldLabel>
						<Input
							id="register-code"
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
						{fetchStatus === "fetching" ? "Проверяем…" : "Подтвердить e-mail"}
					</Button>
				</form>
			</AuthPanel>
		)
	}

	return (
		<AuthPanel
			orientation="vertical"
			className="min-h-svh w-full max-w-[560px] rounded-none p-4 shadow-none has-[form[data-invalid=true]]:py-2 sm:min-h-0 sm:rounded-md sm:p-5 sm:shadow-xl sm:has-[form[data-invalid=true]]:py-3"
		>
			<form
				data-slot="register-form"
				data-invalid={hasErrors}
				className="group/register-form flex w-full flex-col gap-3 data-[invalid=true]:gap-2"
				onSubmit={form.handleSubmit(onSubmit)}
				noValidate
			>
				<header className="text-center">
					<TypographyH1>Создать учётную запись</TypographyH1>
				</header>

				<FieldGroup className="gap-2 group-data-[invalid=true]/register-form:gap-1">
					<Field
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!emailError}
					>
						<FieldLabel htmlFor="register-email">
							E-mail <RequiredMark />
						</FieldLabel>
						<Input
							id="register-email"
							type="email"
							size="sm"
							autoComplete="email"
							aria-required="true"
							aria-invalid={!!emailError}
							{...form.register("email")}
						/>
						<FieldError
							className="text-xs leading-tight"
							errors={[emailError]}
						/>
					</Field>

					<Field
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!errors.displayName}
					>
						<FieldLabel htmlFor="register-display-name">
							Отображаемое имя
						</FieldLabel>
						<Input
							id="register-display-name"
							type="text"
							size="sm"
							autoComplete="nickname"
							aria-invalid={!!errors.displayName}
							{...form.register("displayName")}
						/>
						<FieldError
							className="text-xs leading-tight"
							errors={[errors.displayName]}
						/>
					</Field>

					<Field
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!usernameError}
					>
						<FieldLabel htmlFor="register-username">
							Имя пользователя <RequiredMark />
						</FieldLabel>
						<Input
							id="register-username"
							type="text"
							size="sm"
							autoComplete="username"
							aria-required="true"
							aria-invalid={!!usernameError}
							{...form.register("username")}
						/>
						<FieldError
							className="text-xs leading-tight"
							errors={[usernameError]}
						/>
					</Field>

					<Field
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!passwordError}
					>
						<FieldLabel htmlFor="register-password">
							Пароль <RequiredMark />
						</FieldLabel>
						<Input
							id="register-password"
							type="password"
							size="sm"
							autoComplete="new-password"
							aria-required="true"
							aria-invalid={!!passwordError}
							{...form.register("password")}
						/>
						<FieldError
							className="text-xs leading-tight"
							errors={[passwordError]}
						/>
					</Field>

					<FieldSet
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!birthDateError}
					>
						<FieldLegend variant="label">
							Дата рождения <RequiredMark />
						</FieldLegend>
						<div className="grid grid-cols-3 gap-3">
							<BirthDateSelect
								control={form.control}
								label="День"
								name="birthDay"
								options={DAYS}
							/>
							<BirthDateSelect
								control={form.control}
								label="Месяц"
								name="birthMonth"
								options={MONTHS}
							/>
							<BirthDateSelect
								control={form.control}
								label="Год"
								name="birthYear"
								options={YEARS}
							/>
						</div>
						<FieldError
							className="text-xs leading-tight"
							errors={[birthDateError]}
						/>
					</FieldSet>

					<FieldGroup className="gap-2 group-data-[invalid=true]/register-form:gap-1">
						<Controller
							control={form.control}
							name="marketing"
							render={({ field }) => (
								<Field orientation="horizontal" className="items-start">
									<Checkbox
										id="register-marketing"
										name={field.name}
										ref={field.ref}
										checked={field.value}
										onBlur={field.onBlur}
										onCheckedChange={checked =>
											field.onChange(checked === true)
										}
									/>
									<FieldContent>
										<FieldLabel
											htmlFor="register-marketing"
											className="text-sm leading-snug font-normal tracking-normal text-muted-foreground normal-case group-data-[invalid=true]/register-form:text-xs group-data-[invalid=true]/register-form:leading-tight"
										>
											(Необязательно) Я не против получать электронные письма с
											новостями Discord, советами и специальными предложениями.
										</FieldLabel>
									</FieldContent>
								</Field>
							)}
						/>

						<Controller
							control={form.control}
							name="terms"
							render={({ field, fieldState }) => (
								<Field
									orientation="horizontal"
									className="items-start"
									data-invalid={fieldState.invalid}
								>
									<Checkbox
										id="register-terms"
										name={field.name}
										ref={field.ref}
										checked={field.value}
										onBlur={field.onBlur}
										onCheckedChange={checked =>
											field.onChange(checked === true)
										}
										aria-required="true"
										aria-invalid={fieldState.invalid}
									/>
									<FieldContent>
										<FieldLabel
											htmlFor="register-terms"
											className="text-sm leading-snug font-normal tracking-normal text-muted-foreground normal-case group-data-[invalid=true]/register-form:text-xs group-data-[invalid=true]/register-form:leading-tight"
										>
											<span>
												Подтверждаю ознакомление и согласие с{" "}
												<Link
													href="https://discord.com/terms"
													className="text-primary hover:underline"
												>
													Условиями использования
												</Link>{" "}
												и{" "}
												<Link
													href="https://discord.com/privacy"
													className="text-primary hover:underline"
												>
													Политикой конфиденциальности
												</Link>{" "}
												Discord.
											</span>
										</FieldLabel>
										<FieldError
											className="text-xs leading-tight"
											errors={[fieldState.error]}
										/>
									</FieldContent>
								</Field>
							)}
						/>
					</FieldGroup>

					<Field className="gap-2">
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={isSubmitting}
						>
							{isSubmitting
								? "Создаём учётную запись…"
								: "Создать учётную запись"}
						</Button>
						<TypographyMuted>
							Уже зарегистрированы?{" "}
							<Link
								href="/login"
								className="font-medium text-primary hover:underline"
							>
								Войти
							</Link>
						</TypographyMuted>
					</Field>
				</FieldGroup>
			</form>
		</AuthPanel>
	)
}
