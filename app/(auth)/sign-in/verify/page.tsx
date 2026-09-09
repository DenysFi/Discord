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
			<Link href="/sign-in">Вернуться ко входу</Link>
		</Button>
	)
}

export default function SignInVerifyPage() {
	const { isLoaded, verification, completeQuery } = useEmailLinkVerify()

	if (!isLoaded || !verification) {
		return (
			<VerifyState
				title="Проверяем ссылку…"
				description="Подождите, идёт подтверждение входа."
			/>
		)
	}

	if (verification.status === "failed") {
		return (
			<VerifyState
				title="Ссылка не сработала"
				description="Не удалось подтвердить вход по ссылке. Запросите новую на странице входа."
				footer={<BackToSignIn />}
			/>
		)
	}

	if (verification.status === "expired") {
		return (
			<VerifyState
				title="Ссылка устарела"
				description="Срок действия ссылки истёк. Запросите новую на странице входа."
				footer={<BackToSignIn />}
			/>
		)
	}

	if (verification.status === "client_mismatch") {
		return (
			<VerifyState
				title="Вернитесь во вкладку со входом"
				description="Ссылка подтверждена. Вход завершится в том браузере, где вы нажали «Забыли пароль?». Эту вкладку можно закрыть."
				footer={
					<TypographyMuted className="text-center">
						Если вход не произошёл — откройте ссылку в том же браузере.
					</TypographyMuted>
				}
			/>
		)
	}

	if (completeQuery.isError) {
		return (
			<VerifyState
				title="Не удалось войти"
				description={
					completeQuery.error instanceof Error
						? completeQuery.error.message
						: "Не удалось завершить вход."
				}
				footer={<BackToSignIn />}
			/>
		)
	}

	return (
		<VerifyState
			title="Входим в аккаунт…"
			description="Подождите, сейчас откроется приложение."
		/>
	)
}
