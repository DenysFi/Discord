"use client"

import { cn } from "cn"
import Link from "next/link"
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type AnimationEvent,
	type ComponentProps,
	type ReactNode,
} from "react"

type AuthForm = "sign-in" | "sign-up"

type AuthTransitionContextValue = {
	entering: AuthForm | null
	requestSwitch: (form: AuthForm) => void
	finishSwitch: () => void
}

const AuthTransitionContext = createContext<AuthTransitionContextValue | null>(
	null,
)

/**
 * Lives in the (auth) layout, so the requested switch survives the navigation
 * between /sign-in and /sign-up and can be replayed by the incoming form.
 */
function AuthTransitionProvider({ children }: { children: ReactNode }) {
	const [entering, setEntering] = useState<AuthForm | null>(null)

	const requestSwitch = useCallback((form: AuthForm) => setEntering(form), [])
	const finishSwitch = useCallback(() => setEntering(null), [])

	const value = useMemo(
		() => ({ entering, requestSwitch, finishSwitch }),
		[entering, requestSwitch, finishSwitch],
	)

	return (
		<AuthTransitionContext.Provider value={value}>
			{children}
		</AuthTransitionContext.Provider>
	)
}

function useAuthTransition() {
	const context = useContext(AuthTransitionContext)

	if (!context) {
		throw new Error(
			"useAuthTransition must be used inside an AuthTransitionProvider",
		)
	}

	return context
}

type AuthSwitchLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
	to: AuthForm
}

function AuthSwitchLink({ to, onClick, ...props }: AuthSwitchLinkProps) {
	const { requestSwitch } = useAuthTransition()

	return (
		<Link
			{...props}
			href={`/${to}`}
			onClick={event => {
				requestSwitch(to)
				onClick?.(event)
			}}
		/>
	)
}

type AuthFormTransitionProps = {
	form: AuthForm
	children: ReactNode
	className?: string
}

function AuthFormTransition({
	form,
	children,
	className,
}: AuthFormTransitionProps) {
	const { entering, finishSwitch } = useAuthTransition()
	const isEntering = entering === form

	function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>) {
		if (event.target === event.currentTarget) {
			finishSwitch()
		}
	}

	return (
		<div className="flex w-full justify-center perspective-[1400px]">
			<div
				data-slot="auth-form-transition"
				data-entering={isEntering || undefined}
				className={cn(
					"flex w-full justify-center motion-reduce:animate-none",
					isEntering &&
						(form === "sign-up"
							? "animate-auth-form-slide"
							: "animate-auth-form-fade"),
					className,
				)}
				onAnimationEnd={handleAnimationEnd}
			>
				{children}
			</div>
		</div>
	)
}

export {
	AuthFormTransition,
	AuthSwitchLink,
	AuthTransitionProvider,
	useAuthTransition,
	type AuthForm,
}
