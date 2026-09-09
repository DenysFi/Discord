import { z } from "zod"

const PHONE_PATTERN = /^\+?[0-9\s()-]{7,20}$/

const loginIdentifierSchema = z
	.string()
	.trim()
	.min(1, "Введите адрес электронной почты или номер телефона.")
	.refine(
		value => z.email().safeParse(value).success || PHONE_PATTERN.test(value),
		"Введите корректный адрес электронной почты или номер телефона.",
	)

const loginSchema = z.object({
	identifier: loginIdentifierSchema,
	password: z.string().min(1, "Введите пароль."),
})

/** Email-only check for passwordless / magic-link entry. */
const loginEmailSchema = z
	.string()
	.trim()
	.min(1, "Введите адрес электронной почты.")
	.refine(
		value => z.email().safeParse(value).success,
		"Введите корректный адрес электронной почты.",
	)

const registerSchema = z
	.object({
		email: z.email("Введите корректный адрес электронной почты."),
		displayName: z
			.string()
			.trim()
			.max(32, "Отображаемое имя не должно превышать 32 символа."),
		username: z
			.string()
			.trim()
			.min(2, "Имя пользователя должно содержать минимум 2 символа.")
			.max(32, "Имя пользователя не должно превышать 32 символа."),
		password: z
			.string()
			.min(8, "Пароль должен содержать минимум 8 символов.")
			.max(72, "Пароль не должен превышать 72 символа."),
		birthDay: z.string().min(1, "Выберите день рождения."),
		birthMonth: z.string().min(1, "Выберите месяц рождения."),
		birthYear: z.string().min(1, "Выберите год рождения."),
		marketing: z.boolean(),
		terms: z.boolean().refine(value => value, {
			message: "Необходимо принять условия использования.",
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
				message: "Укажите корректную дату рождения.",
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
				message: "Для регистрации вам должно быть не менее 13 лет.",
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
