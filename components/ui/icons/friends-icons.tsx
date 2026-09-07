import type { NamedDiscordIcon, NamedDiscordIconProps } from "./discord-icons"
import { IconAsset } from "./icon-asset"

const ICON_DIRECTORY = "/discord-icons/individual"

const icon = (name: string, label: string, x: number, y: number) => ({ name, label, x, y })

export const friendsIcons = [
	icon("friends-online", "Online friends", 58.5, 191),
	icon("friends-search", "Search", 193.5, 191),
	icon("friends-add", "Add friend", 328.5, 191),
	icon("friends-inbox", "Inbox", 463.5, 191),
	icon("friends-collapse", "Collapse", 598.5, 191),
	icon("friends-filter", "Filter friends", 58.5, 326),
	icon("friends-help", "Help", 193.5, 326),
	icon("friends-remove", "Remove friend", 328.5, 326),
	icon("friends-remove-danger", "Remove friend", 463.5, 326),
	icon("friends-explore", "Explore", 598.5, 326),
] as const

export type FriendsIconName = (typeof friendsIcons)[number]["name"]

export type FriendsIconProps = NamedDiscordIconProps & { name: FriendsIconName }

export function FriendsIcon({
	name,
	label,
	size = 20,
	colorMode = "currentColor",
	role,
	ref,
	...props
}: FriendsIconProps) {
	const definition = friendsIcons.find(candidate => candidate.name === name)
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

function createFriendsIcon(name: FriendsIconName, displayName: string): NamedDiscordIcon {
	function Component({ ref, ...props }: NamedDiscordIconProps) {
		return <FriendsIcon {...props} ref={ref} name={name} />
	}

	Component.displayName = displayName
	return Component
}

export const FriendsOnline = createFriendsIcon("friends-online", "FriendsOnline")
export const FriendsSearch = createFriendsIcon("friends-search", "FriendsSearch")
export const FriendsAdd = createFriendsIcon("friends-add", "FriendsAdd")
export const FriendsInbox = createFriendsIcon("friends-inbox", "FriendsInbox")
export const FriendsCollapse = createFriendsIcon("friends-collapse", "FriendsCollapse")
export const FriendsFilter = createFriendsIcon("friends-filter", "FriendsFilter")
export const FriendsHelp = createFriendsIcon("friends-help", "FriendsHelp")
export const FriendsRemove = createFriendsIcon("friends-remove", "FriendsRemove")
export const FriendsRemoveDanger = createFriendsIcon("friends-remove-danger", "FriendsRemoveDanger")
export const FriendsExplore = createFriendsIcon("friends-explore", "FriendsExplore")
