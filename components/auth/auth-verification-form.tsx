"use client"

import { type FormEvent, type ReactNode, useState } from "react"

import { AuthPanel } from "@/components/auth/auth-panel"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TypographyH1, TypographyMuted } from "@/components/ui/typography"

type AuthVerificationFormProps = {
	inputId: string
	title: string
	description: ReactNode
	label: ReactNode
	submitLabel: string
	pendingLabel: string
	isPending: boolean
	error?: Error | null
	onSubmit: (code: string) => void
}

function AuthVerificationForm({
	inputId,
	title,
	description,
	label,
	submitLabel,
	pendingLabel,
	isPending,
	error,
	onSubmit,
}: AuthVerificationFormProps) {
	const [code, setCode] = useState("")

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		onSubmit(code)
	}

	return (
		<AuthPanel orientation="vertical" className="w-full max-w-[480px]">
			<form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
				<header className="flex flex-col gap-2 text-center">
					<TypographyH1>{title}</TypographyH1>
					<TypographyMuted>{description}</TypographyMuted>
				</header>
				<Field data-invalid={!!error}>
					<FieldLabel htmlFor={inputId}>{label}</FieldLabel>
					<Input
						id={inputId}
						type="text"
						inputMode="numeric"
						autoComplete="one-time-code"
						value={code}
						onChange={event => setCode(event.target.value)}
						aria-invalid={!!error}
						aria-required="true"
						autoFocus
					/>
					<FieldError>{error?.message}</FieldError>
				</Field>
				<Button type="submit" size="lg" disabled={isPending}>
					{isPending ? pendingLabel : submitLabel}
				</Button>
			</form>
		</AuthPanel>
	)
}

export { AuthVerificationForm, type AuthVerificationFormProps }
