import { AuthFormTransition } from "@/components/auth/auth-transition"
import { RegisterForm } from "@/components/register/register-form"

export default function SignUpPage() {
	return (
		<AuthFormTransition form="sign-up">
			<RegisterForm />
		</AuthFormTransition>
	)
}
