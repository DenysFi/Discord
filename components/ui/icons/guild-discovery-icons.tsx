import type { NamedDiscordIcon, NamedDiscordIconProps } from "./discord-icons"
import { IconAsset } from "./icon-asset"

const ICON_DIRECTORY = "/discord-icons/individual"

const icon = (name: string, label: string, x: number, y: number) => ({
	name,
	label,
	x,
	y,
})

export const guildDiscoveryIcons = [
	icon("guild-discovery-world", "World", 58.5, 171),
	icon("guild-discovery-desktop", "Desktop", 193.5, 171),
	icon("guild-discovery-gaming", "Gaming", 328.5, 171),
	icon("guild-discovery-entertainment", "Entertainment", 463.5, 171),
	icon("guild-discovery-community", "Community", 598.5, 171),
	icon("guild-discovery-technology", "Technology", 56.5, 306),
	icon("guild-discovery-hobbies", "Hobbies", 191.5, 306),
	icon("guild-discovery-music", "Music", 327.5, 306),
	icon("guild-discovery-education", "Education", 463.5, 306),
	icon("guild-discovery-science", "Science", 599.5, 306),
	icon("guild-discovery-organization", "Organization", 58, 441),
	icon("guild-discovery-culture", "Culture", 194, 441),
	icon("guild-discovery-lifestyle", "Lifestyle", 329, 441),
	icon("guild-discovery-document", "Document", 464, 441),
	icon("guild-discovery-verified", "Verified", 599, 441),
	icon("guild-discovery-partner", "Partner", 328.5, 576),
] as const

export type GuildDiscoveryIconName = (typeof guildDiscoveryIcons)[number]["name"]

export type GuildDiscoveryIconProps = NamedDiscordIconProps & {
	name: GuildDiscoveryIconName
}

export function GuildDiscoveryIcon({
	name,
	label,
	size = 20,
	colorMode = "currentColor",
	role,
	ref,
	...props
}: GuildDiscoveryIconProps) {
	const definition = guildDiscoveryIcons.find(candidate => candidate.name === name)
	if (!definition) return null

	return (
		<IconAsset
			{...props}
			ref={ref}
			asset={`${ICON_DIRECTORY}/${definition.name}.svg`}
			colorMode={colorMode}
			label={label ?? definition.label}
			role={role ?? "img"}
			size={size}
		/>
	)
}

function createGuildDiscoveryIcon(
	name: GuildDiscoveryIconName,
	displayName: string,
): NamedDiscordIcon {
	function Component({ ref, ...props }: NamedDiscordIconProps) {
		return <GuildDiscoveryIcon {...props} ref={ref} name={name} />
	}

	Component.displayName = displayName
	return Component
}

export const GuildDiscoveryWorld = createGuildDiscoveryIcon("guild-discovery-world", "GuildDiscoveryWorld")
export const GuildDiscoveryDesktop = createGuildDiscoveryIcon("guild-discovery-desktop", "GuildDiscoveryDesktop")
export const GuildDiscoveryGaming = createGuildDiscoveryIcon("guild-discovery-gaming", "GuildDiscoveryGaming")
export const GuildDiscoveryEntertainment = createGuildDiscoveryIcon("guild-discovery-entertainment", "GuildDiscoveryEntertainment")
export const GuildDiscoveryCommunity = createGuildDiscoveryIcon("guild-discovery-community", "GuildDiscoveryCommunity")
export const GuildDiscoveryTechnology = createGuildDiscoveryIcon("guild-discovery-technology", "GuildDiscoveryTechnology")
export const GuildDiscoveryHobbies = createGuildDiscoveryIcon("guild-discovery-hobbies", "GuildDiscoveryHobbies")
export const GuildDiscoveryMusic = createGuildDiscoveryIcon("guild-discovery-music", "GuildDiscoveryMusic")
export const GuildDiscoveryEducation = createGuildDiscoveryIcon("guild-discovery-education", "GuildDiscoveryEducation")
export const GuildDiscoveryScience = createGuildDiscoveryIcon("guild-discovery-science", "GuildDiscoveryScience")
export const GuildDiscoveryOrganization = createGuildDiscoveryIcon("guild-discovery-organization", "GuildDiscoveryOrganization")
export const GuildDiscoveryCulture = createGuildDiscoveryIcon("guild-discovery-culture", "GuildDiscoveryCulture")
export const GuildDiscoveryLifestyle = createGuildDiscoveryIcon("guild-discovery-lifestyle", "GuildDiscoveryLifestyle")
export const GuildDiscoveryDocument = createGuildDiscoveryIcon("guild-discovery-document", "GuildDiscoveryDocument")
export const GuildDiscoveryVerified = createGuildDiscoveryIcon("guild-discovery-verified", "GuildDiscoveryVerified")
export const GuildDiscoveryPartner = createGuildDiscoveryIcon("guild-discovery-partner", "GuildDiscoveryPartner")
