import { cn } from "cn"
import type { ComponentProps } from "react"

function TypographyH1({ className, ...props }: ComponentProps<"h1">) {
	return (
		<h1
			data-slot="typography-h1"
			className={cn(
				"text-[30px] font-semibold leading-tight tracking-tight text-foreground",
				className,
			)}
			{...props}
		/>
	)
}

function TypographyH2({ className, ...props }: ComponentProps<"h2">) {
	return (
		<h2
			data-slot="typography-h2"
			className={cn(
				"text-xl font-semibold leading-tight text-foreground",
				className,
			)}
			{...props}
		/>
	)
}

function TypographyP({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			data-slot="typography-p"
			className={cn("text-base leading-normal ", className)}
			{...props}
		/>
	)
}

function TypographyMuted({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			data-slot="typography-muted"
			className={cn("text-sm leading-snug text-muted-foreground", className)}
			{...props}
		/>
	)
}

export { TypographyH1, TypographyH2, TypographyMuted, TypographyP }
