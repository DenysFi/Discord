"use client"

import Link from "next/link"
import QRCode from "qrcode"
import { useEffect, useRef } from "react"

import { AuthPanel } from "@/components/auth/auth-panel"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	TypographyH1,
	TypographyH2,
	TypographyMuted,
	TypographyP,
} from "@/components/ui/typography"

const LOGIN_QR_URL = "https://discord.com/login"

function LoginQrAside() {
	const qrCanvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = qrCanvasRef.current

		if (!canvas) return

		void QRCode.toCanvas(canvas, LOGIN_QR_URL, {
			errorCorrectionLevel: "H",
			margin: 0,
			width: 160,
			color: {
				dark: "#1a1a1e",
				light: "#ffffff",
			},
		})
	}, [])

	return (
		<div className="flex w-full flex-col items-center justify-center gap-6">
			<div className="relative size-44 rounded-md bg-white p-2">
				<canvas
					ref={qrCanvasRef}
					aria-label="QR-код для входа в Discord"
					className="size-full rounded-sm"
					height={160}
					role="img"
					width={160}
				/>
			</div>
			<div className="flex flex-col gap-2 text-center">
				<TypographyH2>Войти с помощью QR-кода</TypographyH2>
				<TypographyMuted>
					Отсканируйте код в приложении Discord с мобильного устройства, чтобы
					сразу войти в систему.
				</TypographyMuted>
			</div>
			<Button type="button" variant="link" className="h-auto p-0 text-sm">
				Или войти с помощью ключа доступа
			</Button>
		</div>
	)
}

export function LoginForm() {
	return (
		<AuthPanel orientation="horizontal" aside={<LoginQrAside />}>
			<form
				className="flex flex-col gap-5  w-[420px]"
				onSubmit={event => {
					event.preventDefault()
				}}
			>
				<header className="flex flex-col gap-2 text-center">
					<TypographyH1>С возвращением!</TypographyH1>
					<TypographyP>Мы так рады видеть вас снова!</TypographyP>
				</header>

				<FieldGroup className="gap-5">
					<Field>
						<FieldLabel htmlFor="login-email">
							Адрес электронной почты или номер телефона{" "}
							<span className="text-destructive">*</span>
						</FieldLabel>
						<Input
							id="login-email"
							name="email"
							type="text"
							autoComplete="username"
							required
							aria-required="true"
						/>
					</Field>

					<Field>
						<FieldLabel htmlFor="login-password">
							Пароль <span className="text-destructive">*</span>
						</FieldLabel>
						<Input
							id="login-password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							aria-required="true"
						/>
						<Button
							type="button"
							variant="link"
							className="h-auto justify-start p-0 text-sm font-medium"
						>
							Забыли пароль?
						</Button>
					</Field>

					<Field className="gap-2">
						<Button type="submit" size="lg" className="w-full">
							Вход
						</Button>
						<TypographyMuted>
							Нужна учётная запись?{" "}
							<Link
								href="/login"
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
