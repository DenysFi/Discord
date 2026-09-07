import { useId, type ComponentPropsWithRef } from "react"

const ICON_VIEWBOX_SIZE = 100

export type IconColorMode = "currentColor" | "original"

export type IconAssetProps = Omit<ComponentPropsWithRef<"svg">, "children"> & {
	asset: string
	colorMode?: IconColorMode
	label: string
	size?: number | string
}

export function IconAsset({
	asset,
	colorMode = "currentColor",
	label,
	size = 20,
	role,
	ref,
	...props
}: IconAssetProps) {
	const maskId = `discord-icon-${useId().replaceAll(":", "")}`
	const image = <image height={ICON_VIEWBOX_SIZE} href={asset} width={ICON_VIEWBOX_SIZE} />

	return (
		<svg
			{...props}
			ref={ref}
			aria-label={label}
			role={role ?? "img"}
			viewBox={`0 0 ${ICON_VIEWBOX_SIZE} ${ICON_VIEWBOX_SIZE}`}
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			{colorMode === "original" ? (
				image
			) : (
				<>
					<mask id={maskId} maskUnits="userSpaceOnUse">
						{image}
					</mask>
					<rect
						width={ICON_VIEWBOX_SIZE}
						height={ICON_VIEWBOX_SIZE}
						fill="currentColor"
						mask={`url(#${maskId})`}
					/>
				</>
			)}
		</svg>
	)
}
