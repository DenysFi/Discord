import { AuthFormTransition } from "@/components/auth/auth-transition"
import { LoginForm } from "@/components/login/login-form"

export default function SignInPage() {
	return (
		<AuthFormTransition form="sign-in">
			<LoginForm />
		</AuthFormTransition>
	)
}
