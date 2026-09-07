import type { ComponentPropsWithRef, ReactElement } from "react"

const SHEET_WIDTH = 1603
const SHEET_HEIGHT = 2303
const TILE_SIZE = 100
const SHEET_URL = "/discord-icons/user-settings.svg"

const icon = (
	name: string,
	label: string,
	group: string,
	x: number,
	y: number,
) => ({
	name,
	label,
	group,
	x,
	y,
})

export const discordIcons = [
	icon("edit-account", "Edit account", "Controls", 535, 279),
	icon("notifications", "Notifications", "Controls", 670, 279),
	icon("media", "Media", "Controls", 130, 414),
	icon("cloud", "Cloud", "Controls", 265, 414),
	icon("connection", "Connection", "Controls", 400, 414),
	icon("download", "Download", "Controls", 535, 414),
	icon("upload", "Upload", "Controls", 670, 414),
	icon("cloud-download", "Cloud download", "Controls", 400, 549),

	icon("account", "Account", "My account", 55.5, 794),
	icon("more-horizontal", "More", "My account", 190.5, 794),
	icon("security", "Security", "My account", 325.5, 794),
	icon("status-ok", "Status okay", "My account", 473.5, 794),
	icon("status-warning", "Status warning", "My account", 608.5, 794),
	icon("status-danger", "Status danger", "My account", 737.5, 794),
	icon("settings", "Settings", "My account", 123, 929),
	icon("more-vertical", "More options", "My account", 258, 929),
	icon("error", "Error", "My account", 470, 932),
	icon("warning-light", "Warning light", "My account", 600, 929),
	icon("warning-dark", "Warning dark", "My account", 735, 929),

	icon("family-shield", "Family shield", "Content & social", 62.5, 1206),
	icon("visibility", "Visibility", "Content & social", 197.5, 1206),
	icon("image", "Image", "Content & social", 332.5, 1206),
	icon("connected-games", "Connected games", "Content & social", 602.5, 1206),
	icon("blocked", "Blocked", "Content & social", 62.5, 1341),
	icon("check-small", "Check small", "Content & social", 197.5, 1341),
	icon("check", "Check", "Content & social", 332.5, 1341),

	icon("profile-add", "Add profile", "Profiles", 130, 1608),
	icon("profile-badge", "Profile badge", "Profiles", 265, 1608),
	icon("profile-edit", "Edit profile", "Profiles", 400, 1608),
	icon("eyedropper", "Eyedropper", "Profiles", 535, 1608),
	icon("profile-selected", "Selected profile", "Profiles", 670, 1608),
	icon("chevron-up", "Chevron up", "Profiles", 130, 1743),
	icon("cancel-circle", "Cancel", "Profiles", 265, 1743),
	icon("sync", "Sync", "Profiles", 400, 1743),
	icon("gif", "GIF", "Profiles", 535, 1743),
	icon("image-add", "Add image", "Profiles", 670, 1743),
	icon("trash", "Trash", "Profiles", 130, 1878),
	icon("switch-profile", "Switch profile", "Profiles", 265, 1878),
	icon("analytics", "Analytics", "Profiles", 400, 1878),
	icon("arrow-left", "Arrow left", "Profiles", 535, 1878),
	icon("star", "Star", "Profiles", 670, 1878),
	icon("star-filled", "Star filled", "Profiles", 130, 2013),
	icon("star-gold", "Star gold", "Profiles", 265, 2013),
	icon("close", "Close", "Profiles", 400, 2013),
	icon("locked", "Locked", "Profiles", 535, 2013),
	icon("shop", "Shop", "Profiles", 670, 2013),
	icon("prohibited", "Prohibited", "Profiles", 130, 2148),
	icon("moon", "Moon", "Profiles", 265, 2148),
	icon("sun", "Sun", "Profiles", 400, 2148),
	icon("keyboard", "Keyboard", "Profiles", 535, 2148),
	icon("paintbrush", "Paintbrush", "Profiles", 670, 2148),

	icon("family-approved", "Family approved", "Family center", 904.5, 198),
	icon("family-visibility", "Family visibility", "Family center", 1039.5, 198),
	icon("qr-code", "QR code", "Family center", 1174.5, 198),
	icon("family-member", "Family member", "Family center", 1309.5, 198),
	icon("apps-grid", "Apps grid", "Family center", 1444.5, 198),
	icon("family-chat", "Family chat", "Family center", 904.5, 333),
	icon("message", "Message", "Family center", 1039.5, 333),
	icon("phone", "Phone", "Family center", 1174.5, 333),
	icon("payment-card", "Payment card", "Family center", 1309.5, 333),
	icon("flag", "Flag", "Family center", 1444.5, 333),
	icon("family-settings", "Family settings", "Family center", 972, 468),
	icon("level-one", "Level one", "Family center", 1107, 468),
	icon("level-two", "Level two", "Family center", 1242, 468),
	icon("level-three", "Level three", "Family center", 1377, 468),

	icon("authorized-apps", "Authorized apps", "Authorized apps", 1039.5, 678),
	icon("external-link", "External link", "Authorized apps", 1174.5, 678),
	icon("authorized", "Authorized", "Authorized apps", 1309.5, 678),

	icon("devices", "Devices", "Devices", 972, 888),
	icon("desktop", "Desktop", "Devices", 1107, 888),
	icon("mobile", "Mobile", "Devices", 1242, 888),
	icon("disconnect", "Disconnect", "Devices", 1377, 888),

	icon("bluesky", "Bluesky", "Connections", 904.5, 1098),
	icon("epic-games", "Epic Games", "Connections", 1039.5, 1098),
	icon("paypal", "PayPal", "Connections", 1174.5, 1098),
	icon("reddit", "Reddit", "Connections", 1309.5, 1098),
	icon("steam", "Steam", "Connections", 1444.5, 1098),
	icon("tiktok", "TikTok", "Connections", 904.5, 1233),
	icon("x", "X", "Connections", 1039.5, 1233),
	icon("ebay", "eBay", "Connections", 1174.5, 1233),
	icon("crunchyroll", "Crunchyroll", "Connections", 1309.5, 1233),
	icon("playstation", "PlayStation", "Connections", 1444.5, 1233),
	icon("spotify", "Spotify", "Connections", 904.5, 1368),
	icon("xbox", "Xbox", "Connections", 1039.5, 1368),
	icon("amazon-music", "Amazon Music", "Connections", 1174.5, 1368),
	icon("battle-net", "Battle.net", "Connections", 1309.5, 1368),
	icon("identity-v", "Identity V", "Connections", 1444.5, 1368),
	icon("domain", "Domain", "Connections", 904.5, 1503),
	icon("facebook", "Facebook", "Connections", 1039.5, 1503),
	icon("github", "GitHub", "Connections", 1174.5, 1503),
	icon("league-of-legends", "League of Legends", "Connections", 1309.5, 1503),
	icon("riot-games", "Riot Games", "Connections", 1444.5, 1503),
	icon("roblox", "Roblox", "Connections", 1039.5, 1638),
	icon("twitch", "Twitch", "Connections", 1174.5, 1638),
	icon("youtube", "YouTube", "Connections", 1309.5, 1638),

	icon("devices-alt", "Devices alternate", "Device states", 972, 1848),
	icon("desktop-alt", "Desktop alternate", "Device states", 1107, 1848),
	icon("mobile-alt", "Mobile alternate", "Device states", 1242, 1848),
	icon("disconnect-alt", "Disconnect alternate", "Device states", 1377, 1848),
] as const

export type DiscordIconName = (typeof discordIcons)[number]["name"]

export const discordIconNames = discordIcons.map(
	({ name }) => name,
) as DiscordIconName[]

export const discordIconGroups = [
	...new Set(discordIcons.map(({ group }) => group)),
]

export type DiscordIconProps = Omit<ComponentPropsWithRef<"svg">, "name"> & {
	name: DiscordIconName
	label?: string
	size?: number | string
}

export type NamedDiscordIconProps = Omit<DiscordIconProps, "name">

export type NamedDiscordIcon = ((
	props: NamedDiscordIconProps,
) => ReactElement | null) & {
	displayName?: string
}

export function DiscordIcon({
	name,
	label,
	size = 24,
	role,
	ref,
	...props
}: DiscordIconProps) {
	const definition = discordIcons.find(candidate => candidate.name === name)

	if (!definition) return null

	const accessibleLabel = label ?? definition.label

	return (
		<svg
			{...props}
			ref={ref}
			aria-label={accessibleLabel}
			role={role ?? "img"}
			viewBox={`${definition.x} ${definition.y} ${TILE_SIZE} ${TILE_SIZE}`}
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<image href={SHEET_URL} width={SHEET_WIDTH} height={SHEET_HEIGHT} />
		</svg>
	)
}

export function createDiscordIcon(
	name: DiscordIconName,
	displayName: string,
): NamedDiscordIcon {
	function Component({ ref, ...props }: NamedDiscordIconProps) {
		return <DiscordIcon {...props} ref={ref} name={name} />
	}

	Component.displayName = displayName
	return Component
}
