import { cn } from "cn"
import type { ReactNode } from "react"

type AuthPanelOrientation = "horizontal" | "vertical"

type AuthPanelProps = {
	children: ReactNode
	aside?: ReactNode
	orientation?: AuthPanelOrientation
	className?: string
}

function AuthPanel({
	children,
	aside,
	orientation = "horizontal",
	className,
}: AuthPanelProps) {
	const isHorizontal = orientation === "horizontal"

	return (
		<div
			data-slot="auth-panel"
			data-orientation={orientation}
			className={cn(
				"rounded-md bg-panel text-card-foreground shadow-xl",
				"flex  p-8",
				isHorizontal
					? "  flex-row items-stretch justify-between gap-16"
					: " flex-col justify-between gap-8",
				className,
			)}
		>
			<div data-slot="auth-panel-content">{children}</div>

			{aside ? (
				<aside
					data-slot="auth-panel-aside"
					className={cn(
						"flex shrink-0 flex-col items-center justify-center",
						isHorizontal ? "hidden w-[240px] md:flex" : "w-full",
					)}
				>
					{aside}
				</aside>
			) : null}
		</div>
	)
}

export { AuthPanel, type AuthPanelOrientation, type AuthPanelProps }
