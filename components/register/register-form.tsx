"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Controller, type Control, useForm } from "react-hook-form"

import { AuthPanel } from "@/components/auth/auth-panel"
import { AuthSwitchLink } from "@/components/auth/auth-transition"
import { AuthVerificationForm } from "@/components/auth/auth-verification-form"
import { useSignUpFlow } from "@/components/register/use-sign-up-flow"
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

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
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
	const {
		step,
		signUpMutation,
		verificationMutation,
		fieldErrors,
		globalErrors,
	} = useSignUpFlow()
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
	const emailError = errors.email ?? fieldErrors.emailAddress ?? undefined
	const passwordError = errors.password ?? fieldErrors.password ?? undefined
	const usernameError = errors.username ?? fieldErrors.username ?? undefined
	const hasClerkErrors =
		Object.values(fieldErrors).some(Boolean) || Boolean(globalErrors?.length)
	const hasErrors =
		Object.keys(errors).length > 0 ||
		hasClerkErrors ||
		Boolean(signUpMutation.error)
	const birthDateError =
		errors.birthDay ?? errors.birthMonth ?? errors.birthYear
	const isSubmitting = signUpMutation.isPending
	// Clerk reports the same problem both per field and per request; show it once.
	const shownFieldMessages = new Set(
		[emailError, passwordError, usernameError, birthDateError].map(
			error => error?.message,
		),
	)
	const submitErrors = [
		signUpMutation.error ?? undefined,
		...(globalErrors ?? []),
	].filter(error => error && !shownFieldMessages.has(error.message))

	if (step === "verification") {
		return (
			<AuthVerificationForm
				inputId="register-code"
				title="Verify your email"
				description={`We sent a verification code to ${form.getValues("email")}.`}
				label={
					<>
						Verification code <RequiredMark />
					</>
				}
				submitLabel="Verify email"
				pendingLabel="Verifying…"
				isPending={verificationMutation.isPending}
				error={verificationMutation.error}
				onSubmit={code => verificationMutation.mutate(code)}
			/>
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
				onSubmit={form.handleSubmit(values => signUpMutation.mutate(values))}
				noValidate
			>
				<header className="text-center">
					<TypographyH1>Create an account</TypographyH1>
				</header>

				<FieldGroup className="gap-2 group-data-[invalid=true]/register-form:gap-1">
					<Field
						className="gap-1.5 group-data-[invalid=true]/register-form:gap-1"
						data-invalid={!!emailError}
					>
						<FieldLabel htmlFor="register-email">
							Email <RequiredMark />
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
							Display Name
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
							Username <RequiredMark />
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
							Password <RequiredMark />
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
							Date of Birth <RequiredMark />
						</FieldLegend>
						<div className="grid grid-cols-3 gap-3">
							<BirthDateSelect
								control={form.control}
								label="Day"
								name="birthDay"
								options={DAYS}
							/>
							<BirthDateSelect
								control={form.control}
								label="Month"
								name="birthMonth"
								options={MONTHS}
							/>
							<BirthDateSelect
								control={form.control}
								label="Year"
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
											(Optional) It&apos;s okay to send me emails with Discord
											updates, tips, and special offers.
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
												I have read and agree to Discord&apos;s{" "}
												<Link
													href="https://discord.com/terms"
													className="text-primary hover:underline"
												>
													Terms of Service
												</Link>{" "}
												and{" "}
												<Link
													href="https://discord.com/privacy"
													className="text-primary hover:underline"
												>
													Privacy Policy
												</Link>
												.
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
						<FieldError
							className="text-xs leading-tight"
							errors={submitErrors}
						/>
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Creating account…" : "Continue"}
						</Button>
						<TypographyMuted>
							Already have an account?{" "}
							<AuthSwitchLink
								to="sign-in"
								className="font-medium text-primary hover:underline"
							>
								Log In
							</AuthSwitchLink>
						</TypographyMuted>
					</Field>
				</FieldGroup>
			</form>
		</AuthPanel>
	)
}
