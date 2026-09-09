import { z } from "zod"

const PHONE_PATTERN = /^\+?[0-9\s()-]{7,20}$/

const loginIdentifierSchema = z
	.string()
	.trim()
	.min(1, "Enter an email address or phone number.")
	.refine(
		value => z.email().safeParse(value).success || PHONE_PATTERN.test(value),
		"Enter a valid email address or phone number.",
	)

const loginSchema = z.object({
	identifier: loginIdentifierSchema,
	password: z.string().min(1, "Enter your password."),
})

/** Email-only check for passwordless / magic-link entry. */
const loginEmailSchema = z
	.string()
	.trim()
	.min(1, "Enter an email address.")
	.refine(
		value => z.email().safeParse(value).success,
		"Enter a valid email address.",
	)

const registerSchema = z
	.object({
		email: z.email("Enter a valid email address."),
		displayName: z
			.string()
			.trim()
			.max(32, "Display name must be 32 characters or fewer."),
		username: z
			.string()
			.trim()
			.min(2, "Username must be at least 2 characters.")
			.max(32, "Username must be 32 characters or fewer."),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters.")
			.max(72, "Password must be 72 characters or fewer."),
		birthDay: z.string().min(1, "Select a day of birth."),
		birthMonth: z.string().min(1, "Select a month of birth."),
		birthYear: z.string().min(1, "Select a year of birth."),
		marketing: z.boolean(),
		terms: z.boolean().refine(value => value, {
			message: "You must agree to the Terms of Service.",
		}),
	})
	.superRefine((values, context) => {
		if (!values.birthDay || !values.birthMonth || !values.birthYear) return

		const day = Number(values.birthDay)
		const month = Number(values.birthMonth)
		const year = Number(values.birthYear)
		const birthDate = new Date(Date.UTC(year, month - 1, day))

		if (
			birthDate.getUTCFullYear() !== year ||
			birthDate.getUTCMonth() !== month - 1 ||
			birthDate.getUTCDate() !== day
		) {
			context.addIssue({
				code: "custom",
				message: "Enter a valid date of birth.",
				path: ["birthDay"],
			})
			return
		}

		const today = new Date()
		const minimumBirthDate = new Date(
			Date.UTC(
				today.getUTCFullYear() - 13,
				today.getUTCMonth(),
				today.getUTCDate(),
			),
		)

		if (birthDate > minimumBirthDate) {
			context.addIssue({
				code: "custom",
				message: "You must be at least 13 years old to register.",
				path: ["birthDay"],
			})
		}
	})

type LoginFormValues = z.infer<typeof loginSchema>
type LoginEmail = z.infer<typeof loginEmailSchema>
type RegisterFormValues = z.infer<typeof registerSchema>

export {
	loginEmailSchema,
	loginSchema,
	registerSchema,
	type LoginEmail,
	type LoginFormValues,
	type RegisterFormValues,
}
