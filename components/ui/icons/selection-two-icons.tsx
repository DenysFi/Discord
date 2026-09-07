import type { NamedDiscordIcon, NamedDiscordIconProps } from "./discord-icons";
import { IconAsset } from "./icon-asset";

const ICON_DIRECTORY = "/discord-icons/individual";

const tile = <const TName extends string, const TGroup extends string>(
  name: TName,
  label: string,
  group: TGroup,
  x: number,
  y: number,
) => ({ name, label, group, x, y });

export const selectionTwoIcons = [
  tile("profile-link", "Profile Link", "Profile actions", 78.5, 191),
  tile("profile-game-link", "Profile Game Link", "Profile actions", 213.5, 191),
  tile("profile-plus", "Profile Plus", "Profile actions", 348.5, 191),
  tile("profile-award", "Profile Award", "Profile actions", 483.5, 191),
  tile("profile-thumbs-up", "Profile Thumbs Up", "Profile actions", 618.5, 191),
  tile("profile-thumbs-down", "Profile Thumbs Down", "Profile actions", 78.5, 326),
  tile("profile-standing", "Profile Standing", "Profile actions", 213.5, 326),
  tile("profile-chevron-left", "Profile Chevron Left", "Profile actions", 348.5, 326),
  tile("profile-grid", "Profile Grid", "Profile actions", 483.5, 326),
  tile("profile-id", "Profile Id", "Profile actions", 618.5, 326),
  tile("profile-add-friend", "Profile Add Friend", "Profile actions", 78.5, 461),
  tile("profile-switch-account", "Profile Switch Account", "Profile actions", 213.5, 461),
  tile("profile-user-clock", "Profile User Clock", "Profile actions", 348.5, 461),
  tile("profile-message", "Profile Message", "Profile actions", 483.5, 461),
  tile("profile-arrow-up-right", "Profile Arrow Up Right", "Profile actions", 618.5, 461),
  tile("profile-swords", "Profile Swords", "Profile actions", 78.5, 596),
  tile("profile-verified", "Profile Verified", "Profile actions", 213.5, 596),
  tile("profile-document", "Profile Document", "Profile actions", 348.5, 596),
  tile("profile-card-add", "Profile Card Add", "Profile actions", 483.5, 596),
  tile("profile-copy", "Profile Copy", "Profile actions", 618.5, 596),
  tile("profile-alert", "Profile Alert", "Profile actions", 78.5, 731),
  tile("profile-open", "Profile Open", "Profile actions", 213.5, 731),
  tile("profile-trash", "Profile Trash", "Profile actions", 348.5, 731),
  tile("profile-discord", "Profile Discord", "Profile actions", 483.5, 731),
  tile("profile-gamepad", "Profile Gamepad", "Profile actions", 618.5, 731),
  tile("profile-edit-alt", "Profile Edit Alt", "Profile actions", 78.5, 866),
  tile("profile-at-spiral", "Profile At Spiral", "Profile actions", 213.5, 866),
  tile("profile-danger", "Profile Danger", "Profile actions", 348.5, 866),
  tile("profile-notifications-off", "Profile Notifications Off", "Profile actions", 483.5, 866),
  tile("profile-check-blue", "Profile Check Blue", "Profile actions", 618.5, 866),
  tile("profile-info", "Profile Info", "Profile actions", 78.5, 1001),
  tile("profile-lightning", "Profile Lightning", "Profile actions", 213.5, 1001),
  tile("profile-heart", "Profile Heart", "Profile actions", 348.5, 1001),
  tile("profile-flame", "Profile Flame", "Profile actions", 483.5, 1001),
  tile("profile-magic-wand", "Profile Magic Wand", "Profile actions", 618.5, 1001),
  tile("profile-at", "Profile At", "Profile actions", 78.5, 1136),
  tile("profile-sprout", "Profile Sprout", "Profile actions", 213.5, 1136),
  tile("profile-refresh", "Profile Refresh", "Profile actions", 348.5, 1136),
  tile("profile-sparkles", "Profile Sparkles", "Profile actions", 483.5, 1136),
  tile("profile-trophy", "Profile Trophy", "Profile actions", 618.5, 1136),
  tile("profile-badge01", "Profile Badge01", "Profile badges", 783.5, 191),
  tile("profile-badge02", "Profile Badge02", "Profile badges", 918.5, 191),
  tile("profile-badge03", "Profile Badge03", "Profile badges", 1053.5, 191),
  tile("profile-badge04", "Profile Badge04", "Profile badges", 1188.5, 191),
  tile("profile-badge05", "Profile Badge05", "Profile badges", 1323.5, 191),
  tile("profile-badge06", "Profile Badge06", "Profile badges", 783.5, 326),
  tile("profile-badge07", "Profile Badge07", "Profile badges", 918.5, 326),
  tile("profile-badge08", "Profile Badge08", "Profile badges", 1053.5, 326),
  tile("profile-badge09", "Profile Badge09", "Profile badges", 1188.5, 326),
  tile("profile-badge10", "Profile Badge10", "Profile badges", 1323.5, 326),
  tile("profile-badge11", "Profile Badge11", "Profile badges", 783.5, 461),
  tile("profile-badge12", "Profile Badge12", "Profile badges", 918.5, 461),
  tile("profile-badge13", "Profile Badge13", "Profile badges", 1053.5, 461),
  tile("profile-badge14", "Profile Badge14", "Profile badges", 1188.5, 461),
  tile("profile-badge15", "Profile Badge15", "Profile badges", 1323.5, 461),
  tile("profile-badge16", "Profile Badge16", "Profile badges", 783.5, 596),
  tile("profile-badge17", "Profile Badge17", "Profile badges", 918.5, 596),
  tile("profile-badge18", "Profile Badge18", "Profile badges", 1053.5, 596),
  tile("profile-badge19", "Profile Badge19", "Profile badges", 1188.5, 596),
  tile("profile-badge20", "Profile Badge20", "Profile badges", 1323.5, 596),
  tile("profile-badge21", "Profile Badge21", "Profile badges", 783.5, 731),
  tile("profile-badge22", "Profile Badge22", "Profile badges", 918.5, 731),
  tile("profile-badge23", "Profile Badge23", "Profile badges", 1053.5, 731),
  tile("profile-badge24", "Profile Badge24", "Profile badges", 1188.5, 731),
  tile("profile-badge25", "Profile Badge25", "Profile badges", 1323.5, 731),
  tile("profile-badge26", "Profile Badge26", "Profile badges", 783.5, 866),
  tile("profile-badge27", "Profile Badge27", "Profile badges", 918.5, 866),
  tile("profile-badge28", "Profile Badge28", "Profile badges", 1053.5, 866),
  tile("profile-badge29", "Profile Badge29", "Profile badges", 1188.5, 866),
  tile("profile-badge30", "Profile Badge30", "Profile badges", 1323.5, 866),
  tile("profile-badge31", "Profile Badge31", "Profile badges", 783.5, 1001),
  tile("profile-badge32", "Profile Badge32", "Profile badges", 918.5, 1001),
  tile("profile-badge33", "Profile Badge33", "Profile badges", 1053.5, 1001),
  tile("profile-badge34", "Profile Badge34", "Profile badges", 1188.5, 1001),
  tile("profile-badge35", "Profile Badge35", "Profile badges", 1323.5, 1001),
  tile("profile-badge36", "Profile Badge36", "Profile badges", 783.5, 1136),
  tile("profile-badge37", "Profile Badge37", "Profile badges", 918.5, 1136),
  tile("profile-badge38", "Profile Badge38", "Profile badges", 1053.5, 1136),
  tile("profile-badge39", "Profile Badge39", "Profile badges", 1188.5, 1136),
  tile("profile-badge40", "Profile Badge40", "Profile badges", 1323.5, 1136),
  tile("profile-badge41", "Profile Badge41", "Profile badges", 783.5, 1271),
  tile("profile-badge42", "Profile Badge42", "Profile badges", 918.5, 1271),
  tile("profile-badge43", "Profile Badge43", "Profile badges", 1053.5, 1271),
  tile("profile-badge44", "Profile Badge44", "Profile badges", 1188.5, 1271),
  tile("profile-badge45", "Profile Badge45", "Profile badges", 1323.5, 1271),
  tile("profile-badge46", "Profile Badge46", "Profile badges", 783.5, 1406),
  tile("profile-badge47", "Profile Badge47", "Profile badges", 918.5, 1406),
  tile("profile-badge48", "Profile Badge48", "Profile badges", 1053.5, 1406),
  tile("profile-badge49", "Profile Badge49", "Profile badges", 1188.5, 1406),
  tile("profile-badge50", "Profile Badge50", "Profile badges", 1323.5, 1406),
  tile("profile-badge51", "Profile Badge51", "Profile badges", 986, 1541),
  tile("profile-badge52", "Profile Badge52", "Profile badges", 1121, 1541),
  tile("clan-tag01", "Clan Tag01", "Clan tags", 76.5, 1339),
  tile("clan-tag02", "Clan Tag02", "Clan tags", 211.5, 1339),
  tile("clan-tag03", "Clan Tag03", "Clan tags", 346.5, 1339),
  tile("clan-tag04", "Clan Tag04", "Clan tags", 481.5, 1339),
  tile("clan-tag05", "Clan Tag05", "Clan tags", 616.5, 1339),
  tile("clan-tag06", "Clan Tag06", "Clan tags", 76.5, 1474),
  tile("clan-tag07", "Clan Tag07", "Clan tags", 211.5, 1474),
  tile("clan-tag08", "Clan Tag08", "Clan tags", 346.5, 1474),
  tile("clan-tag09", "Clan Tag09", "Clan tags", 481.5, 1474),
  tile("clan-tag10", "Clan Tag10", "Clan tags", 616.5, 1474),
  tile("clan-tag11", "Clan Tag11", "Clan tags", 76.5, 1609),
  tile("clan-tag12", "Clan Tag12", "Clan tags", 211.5, 1609),
  tile("clan-tag13", "Clan Tag13", "Clan tags", 346.5, 1609),
  tile("clan-tag14", "Clan Tag14", "Clan tags", 481.5, 1609),
  tile("clan-tag15", "Clan Tag15", "Clan tags", 616.5, 1609),
  tile("clan-tag16", "Clan Tag16", "Clan tags", 76.5, 1744),
  tile("clan-tag17", "Clan Tag17", "Clan tags", 211.5, 1744),
  tile("clan-tag18", "Clan Tag18", "Clan tags", 346.5, 1744),
  tile("clan-tag19", "Clan Tag19", "Clan tags", 481.5, 1744),
  tile("clan-tag20", "Clan Tag20", "Clan tags", 616.5, 1744),
  tile("clan-tag21", "Clan Tag21", "Clan tags", 76.5, 1879),
  tile("clan-tag22", "Clan Tag22", "Clan tags", 211.5, 1879),
  tile("clan-tag23", "Clan Tag23", "Clan tags", 346.5, 1879),
  tile("clan-tag24", "Clan Tag24", "Clan tags", 481.5, 1879),
  tile("clan-tag25", "Clan Tag25", "Clan tags", 616.5, 1879),
  tile("clan-tag26", "Clan Tag26", "Clan tags", 76.5, 2014),
  tile("clan-tag27", "Clan Tag27", "Clan tags", 211.5, 2014),
  tile("clan-tag28", "Clan Tag28", "Clan tags", 346.5, 2014),
  tile("clan-tag29", "Clan Tag29", "Clan tags", 481.5, 2014),
  tile("clan-tag30", "Clan Tag30", "Clan tags", 616.5, 2014),
  tile("clan-tag31", "Clan Tag31", "Clan tags", 76.5, 2149),
  tile("clan-tag32", "Clan Tag32", "Clan tags", 211.5, 2149),
  tile("clan-tag33", "Clan Tag33", "Clan tags", 346.5, 2149),
  tile("clan-tag34", "Clan Tag34", "Clan tags", 481.5, 2149),
  tile("clan-tag35", "Clan Tag35", "Clan tags", 616.5, 2149),
  tile("clan-tag36", "Clan Tag36", "Clan tags", 76.5, 2284),
  tile("clan-tag37", "Clan Tag37", "Clan tags", 211.5, 2284),
  tile("clan-tag38", "Clan Tag38", "Clan tags", 346.5, 2284),
  tile("clan-tag39", "Clan Tag39", "Clan tags", 481.5, 2284),
  tile("clan-tag40", "Clan Tag40", "Clan tags", 616.5, 2284),
  tile("profile-briefcase", "Profile Briefcase", "Profile extras", 106.5, 2685),
  tile("profile-ticket", "Profile Ticket", "Profile extras", 241.5, 2685),
  tile("profile-sword", "Profile Sword", "Profile extras", 376.5, 2685),
  tile("profile-robot", "Profile Robot", "Profile extras", 511.5, 2685),
  tile("profile-planet", "Profile Planet", "Profile extras", 646.5, 2685),
  tile("profile-boots", "Profile Boots", "Profile extras", 106.5, 2820),
  tile("profile-spaceship", "Profile Spaceship", "Profile extras", 241.5, 2820),
  tile("profile-helmet", "Profile Helmet", "Profile extras", 376.5, 2820),
  tile("profile-bird", "Profile Bird", "Profile extras", 511.5, 2820),
  tile("profile-bananas", "Profile Bananas", "Profile extras", 646.5, 2820),
  tile("profile-megaphone", "Profile Megaphone", "Profile extras", 376.5, 2955),
  tile("dev-confirm", "Dev Confirm", "Developer panel", 783.5, 1738),
  tile("dev-cancel", "Dev Cancel", "Developer panel", 918.5, 1738),
  tile("dev-lock", "Dev Lock", "Developer panel", 1053.5, 1738),
  tile("dev-clock", "Dev Clock", "Developer panel", 1188.5, 1738),
  tile("dev-shield", "Dev Shield", "Developer panel", 1323.5, 1738),
  tile("dev-moon", "Dev Moon", "Developer panel", 783.5, 1873),
  tile("dev-sun", "Dev Sun", "Developer panel", 918.5, 1873),
  tile("dev-grid", "Dev Grid", "Developer panel", 1053.5, 1873),
  tile("dev-home", "Dev Home", "Developer panel", 1188.5, 1873),
  tile("dev-image-add", "Dev Image Add", "Developer panel", 1323.5, 1873),
  tile("dev-close", "Dev Close", "Developer panel", 783.5, 2008),
  tile("dev-settings", "Dev Settings", "Developer panel", 918.5, 2008),
  tile("dev-plug", "Dev Plug", "Developer panel", 1053.5, 2008),
  tile("dev-discord", "Dev Discord", "Developer panel", 1188.5, 2008),
  tile("dev-warning", "Dev Warning", "Developer panel", 1323.5, 2008),
  tile("dev-alert", "Dev Alert", "Developer panel", 783.5, 2143),
  tile("dev-smile", "Dev Smile", "Developer panel", 918.5, 2143),
  tile("dev-integrations", "Dev Integrations", "Developer panel", 1053.5, 2143),
  tile("dev-compass", "Dev Compass", "Developer panel", 1188.5, 2143),
  tile("dev-menu", "Dev Menu", "Developer panel", 1323.5, 2143),
  tile("dev-reply", "Dev Reply", "Developer panel", 783.5, 2278),
  tile("dev-member", "Dev Member", "Developer panel", 918.5, 2278),
  tile("dev-checklist", "Dev Checklist", "Developer panel", 1053.5, 2278),
  tile("dev-nodes", "Dev Nodes", "Developer panel", 1188.5, 2278),
  tile("dev-linked-card", "Dev Linked Card", "Developer panel", 1323.5, 2278),
  tile("dev-images", "Dev Images", "Developer panel", 783.5, 2413),
  tile("dev-add", "Dev Add", "Developer panel", 918.5, 2413),
  tile("dev-members", "Dev Members", "Developer panel", 1053.5, 2413),
  tile("dev-mascot", "Dev Mascot", "Developer panel", 1188.5, 2413),
  tile("dev-sparkles", "Dev Sparkles", "Developer panel", 1323.5, 2413),
  tile("dev-slash", "Dev Slash", "Developer panel", 783.5, 2548),
  tile("dev-eye", "Dev Eye", "Developer panel", 918.5, 2548),
  tile("dev-list", "Dev List", "Developer panel", 1053.5, 2548),
  tile("dev-help", "Dev Help", "Developer panel", 1188.5, 2548),
  tile("dev-atom", "Dev Atom", "Developer panel", 1323.5, 2548),
  tile("dm-plus", "Dm Plus", "Direct messages · Chat", 78.5, 3246.5),
  tile("dm-pin", "Dm Pin", "Direct messages · Chat", 213.5, 3246.5),
  tile("dm-add-friend", "Dm Add Friend", "Direct messages · Chat", 348.5, 3246.5),
  tile("dm-switch-account", "Dm Switch Account", "Direct messages · Chat", 483.5, 3246.5),
  tile("dm-user-check", "Dm User Check", "Direct messages · Chat", 618.5, 3246.5),
  tile("dm-id", "Dm Id", "Direct messages · Chat", 145.5, 3381.5),
  tile("dm-chevron-right", "Dm Chevron Right", "Direct messages · Chat", 280.5, 3381.5),
  tile("dm-chevron-down", "Dm Chevron Down", "Direct messages · Chat", 415.5, 3381.5),
  tile("dm-message-check", "Dm Message Check", "Direct messages · Chat", 550.5, 3381.5),
  tile("call-phone", "Call Phone", "Direct messages · Call", 78.5, 3584.5),
  tile("call-video", "Call Video", "Direct messages · Call", 213.5, 3584.5),
  tile("call-video-off", "Call Video Off", "Direct messages · Call", 348.5, 3584.5),
  tile("call-hang-up", "Call Hang Up", "Direct messages · Call", 483.5, 3584.5),
  tile("call-microphone", "Call Microphone", "Direct messages · Call", 618.5, 3584.5),
  tile("call-microphone-off", "Call Microphone Off", "Direct messages · Call", 78.5, 3719.5),
  tile("call-headphones", "Call Headphones", "Direct messages · Call", 213.5, 3719.5),
  tile("call-deafened", "Call Deafened", "Direct messages · Call", 348.5, 3719.5),
  tile("call-ringing", "Call Ringing", "Direct messages · Call", 483.5, 3719.5),
  tile("call-activities", "Call Activities", "Direct messages · Call", 618.5, 3719.5),
  tile("call-share-screen", "Call Share Screen", "Direct messages · Call", 78.5, 3854.5),
  tile("call-chevron-down", "Call Chevron Down", "Direct messages · Call", 213.5, 3854.5),
  tile("call-open", "Call Open", "Direct messages · Call", 348.5, 3854.5),
  tile("call-fullscreen", "Call Fullscreen", "Direct messages · Call", 483.5, 3854.5),
  tile("call-accept", "Call Accept", "Direct messages · Call", 618.5, 3854.5),
  tile("call-handset", "Call Handset", "Direct messages · Call", 348.5, 3989.5),
  tile("activity-rocket", "Activity Rocket", "Direct messages · Activity", 781.5, 3246.5),
  tile("activity-search", "Activity Search", "Direct messages · Activity", 916.5, 3246.5),
  tile("activity-arrow-left", "Activity Arrow Left", "Direct messages · Activity", 1051.5, 3246.5),
  tile("activity-link", "Activity Link", "Direct messages · Activity", 1186.5, 3246.5),
  tile("activity-more", "Activity More", "Direct messages · Activity", 1321.5, 3246.5),
  tile("activity-id", "Activity Id", "Direct messages · Activity", 781.5, 3381.5),
  tile("activity-members", "Activity Members", "Direct messages · Activity", 916.5, 3381.5),
  tile("activity-nitro", "Activity Nitro", "Direct messages · Activity", 1051.5, 3381.5),
  tile("activity-popout", "Activity Popout", "Direct messages · Activity", 1186.5, 3381.5),
  tile("activity-celebrate", "Activity Celebrate", "Direct messages · Activity", 1321.5, 3381.5),
  tile("activity-apps", "Activity Apps", "Direct messages · Activity", 849, 3516.5),
  tile("activity-share-screen", "Activity Share Screen", "Direct messages · Activity", 984, 3516.5),
  tile("activity-user-play", "Activity User Play", "Direct messages · Activity", 1119, 3516.5),
  tile("activity-maximize", "Activity Maximize", "Direct messages · Activity", 1254, 3516.5),
  tile("message-add", "Message Add", "Direct messages · Message bar", 781.5, 3854),
  tile("message-menu", "Message Menu", "Direct messages · Message bar", 916.5, 3854),
  tile("message-file", "Message File", "Direct messages · Message bar", 1051.5, 3854),
  tile("message-gift", "Message Gift", "Direct messages · Message bar", 1186.5, 3854),
  tile("message-gif", "Message GIF", "Direct messages · Message bar", 1321.5, 3854),
  tile("message-sticker", "Message Sticker", "Direct messages · Message bar", 781.5, 3989),
  tile("message-emoji", "Message Emoji", "Direct messages · Message bar", 916.5, 3989),
  tile("message-activities", "Message Activities", "Direct messages · Message bar", 1051.5, 3989),
  tile("message-star", "Message Star", "Direct messages · Message bar", 1186.5, 3989),
  tile("message-star-filled", "Message Star Filled", "Direct messages · Message bar", 1321.5, 3989),
  tile("message-star-outline", "Message Star Outline", "Direct messages · Message bar", 781.5, 4124),
  tile("message-star-gold", "Message Star Gold", "Direct messages · Message bar", 916.5, 4124),
  tile("message-clock", "Message Clock", "Direct messages · Message bar", 1051.5, 4124),
  tile("message-upload", "Message Upload", "Direct messages · Message bar", 1186.5, 4124),
  tile("message-slash", "Message Slash", "Direct messages · Message bar", 1321.5, 4124),
  tile("message-snooze", "Message Snooze", "Direct messages · Message bar", 781.5, 4259),
  tile("message-stopwatch", "Message Stopwatch", "Direct messages · Message bar", 916.5, 4259),
  tile("message-profile-status", "Message Profile Status", "Direct messages · Message bar", 1051.5, 4259),
  tile("message-lock", "Message Lock", "Direct messages · Message bar", 1186.5, 4259),
  tile("message-moon", "Message Moon", "Direct messages · Message bar", 1321.5, 4259),
  tile("message-favorite", "Message Favorite", "Direct messages · Message bar", 781.5, 4394),
  tile("message-leaf", "Message Leaf", "Direct messages · Message bar", 916.5, 4394),
  tile("message-bowl", "Message Bowl", "Direct messages · Message bar", 1051.5, 4394),
  tile("message-gamepad", "Message Gamepad", "Direct messages · Message bar", 1186.5, 4394),
  tile("message-bike", "Message Bike", "Direct messages · Message bar", 1321.5, 4394),
  tile("message-stage", "Message Stage", "Direct messages · Message bar", 916.5, 4529),
  tile("message-heart", "Message Heart", "Direct messages · Message bar", 1051.5, 4529),
  tile("message-flag", "Message Flag", "Direct messages · Message bar", 1186.5, 4529),
] as const;

export type SelectionTwoIconName = (typeof selectionTwoIcons)[number]["name"];
export const selectionTwoIconGroups = [...new Set(selectionTwoIcons.map(({ group }) => group))];

export type SelectionTwoIconProps = NamedDiscordIconProps & {
  name: SelectionTwoIconName;
};

export function SelectionTwoIcon({
  name,
  label,
  size = 20,
  colorMode = "currentColor",
  role,
  ref,
  ...props
}: SelectionTwoIconProps) {
  const definition = selectionTwoIcons.find((candidate) => candidate.name === name);
  if (!definition) return null;

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
  );
}

export function createSelectionTwoIcon(
  name: SelectionTwoIconName,
  displayName: string,
): NamedDiscordIcon {
  function Component({ ref, ...props }: NamedDiscordIconProps) {
    return <SelectionTwoIcon {...props} ref={ref} name={name} />;
  }

  Component.displayName = displayName;
  return Component;
}

export const ProfileLink = createSelectionTwoIcon("profile-link", "ProfileLink");
export const ProfileGameLink = createSelectionTwoIcon("profile-game-link", "ProfileGameLink");
export const ProfilePlus = createSelectionTwoIcon("profile-plus", "ProfilePlus");
export const ProfileAward = createSelectionTwoIcon("profile-award", "ProfileAward");
export const ProfileThumbsUp = createSelectionTwoIcon("profile-thumbs-up", "ProfileThumbsUp");
export const ProfileThumbsDown = createSelectionTwoIcon("profile-thumbs-down", "ProfileThumbsDown");
export const ProfileStanding = createSelectionTwoIcon("profile-standing", "ProfileStanding");
export const ProfileChevronLeft = createSelectionTwoIcon("profile-chevron-left", "ProfileChevronLeft");
export const ProfileGrid = createSelectionTwoIcon("profile-grid", "ProfileGrid");
export const ProfileId = createSelectionTwoIcon("profile-id", "ProfileId");
export const ProfileAddFriend = createSelectionTwoIcon("profile-add-friend", "ProfileAddFriend");
export const ProfileSwitchAccount = createSelectionTwoIcon("profile-switch-account", "ProfileSwitchAccount");
export const ProfileUserClock = createSelectionTwoIcon("profile-user-clock", "ProfileUserClock");
export const ProfileMessage = createSelectionTwoIcon("profile-message", "ProfileMessage");
export const ProfileArrowUpRight = createSelectionTwoIcon("profile-arrow-up-right", "ProfileArrowUpRight");
export const ProfileSwords = createSelectionTwoIcon("profile-swords", "ProfileSwords");
export const ProfileVerified = createSelectionTwoIcon("profile-verified", "ProfileVerified");
export const ProfileDocument = createSelectionTwoIcon("profile-document", "ProfileDocument");
export const ProfileCardAdd = createSelectionTwoIcon("profile-card-add", "ProfileCardAdd");
export const ProfileCopy = createSelectionTwoIcon("profile-copy", "ProfileCopy");
export const ProfileAlert = createSelectionTwoIcon("profile-alert", "ProfileAlert");
export const ProfileOpen = createSelectionTwoIcon("profile-open", "ProfileOpen");
export const ProfileTrash = createSelectionTwoIcon("profile-trash", "ProfileTrash");
export const ProfileDiscord = createSelectionTwoIcon("profile-discord", "ProfileDiscord");
export const ProfileGamepad = createSelectionTwoIcon("profile-gamepad", "ProfileGamepad");
export const ProfileEditAlt = createSelectionTwoIcon("profile-edit-alt", "ProfileEditAlt");
export const ProfileAtSpiral = createSelectionTwoIcon("profile-at-spiral", "ProfileAtSpiral");
export const ProfileDanger = createSelectionTwoIcon("profile-danger", "ProfileDanger");
export const ProfileNotificationsOff = createSelectionTwoIcon("profile-notifications-off", "ProfileNotificationsOff");
export const ProfileCheckBlue = createSelectionTwoIcon("profile-check-blue", "ProfileCheckBlue");
export const ProfileInfo = createSelectionTwoIcon("profile-info", "ProfileInfo");
export const ProfileLightning = createSelectionTwoIcon("profile-lightning", "ProfileLightning");
export const ProfileHeart = createSelectionTwoIcon("profile-heart", "ProfileHeart");
export const ProfileFlame = createSelectionTwoIcon("profile-flame", "ProfileFlame");
export const ProfileMagicWand = createSelectionTwoIcon("profile-magic-wand", "ProfileMagicWand");
export const ProfileAt = createSelectionTwoIcon("profile-at", "ProfileAt");
export const ProfileSprout = createSelectionTwoIcon("profile-sprout", "ProfileSprout");
export const ProfileRefresh = createSelectionTwoIcon("profile-refresh", "ProfileRefresh");
export const ProfileSparkles = createSelectionTwoIcon("profile-sparkles", "ProfileSparkles");
export const ProfileTrophy = createSelectionTwoIcon("profile-trophy", "ProfileTrophy");
export const ProfileBadge01 = createSelectionTwoIcon("profile-badge01", "ProfileBadge01");
export const ProfileBadge02 = createSelectionTwoIcon("profile-badge02", "ProfileBadge02");
export const ProfileBadge03 = createSelectionTwoIcon("profile-badge03", "ProfileBadge03");
export const ProfileBadge04 = createSelectionTwoIcon("profile-badge04", "ProfileBadge04");
export const ProfileBadge05 = createSelectionTwoIcon("profile-badge05", "ProfileBadge05");
export const ProfileBadge06 = createSelectionTwoIcon("profile-badge06", "ProfileBadge06");
export const ProfileBadge07 = createSelectionTwoIcon("profile-badge07", "ProfileBadge07");
export const ProfileBadge08 = createSelectionTwoIcon("profile-badge08", "ProfileBadge08");
export const ProfileBadge09 = createSelectionTwoIcon("profile-badge09", "ProfileBadge09");
export const ProfileBadge10 = createSelectionTwoIcon("profile-badge10", "ProfileBadge10");
export const ProfileBadge11 = createSelectionTwoIcon("profile-badge11", "ProfileBadge11");
export const ProfileBadge12 = createSelectionTwoIcon("profile-badge12", "ProfileBadge12");
export const ProfileBadge13 = createSelectionTwoIcon("profile-badge13", "ProfileBadge13");
export const ProfileBadge14 = createSelectionTwoIcon("profile-badge14", "ProfileBadge14");
export const ProfileBadge15 = createSelectionTwoIcon("profile-badge15", "ProfileBadge15");
export const ProfileBadge16 = createSelectionTwoIcon("profile-badge16", "ProfileBadge16");
export const ProfileBadge17 = createSelectionTwoIcon("profile-badge17", "ProfileBadge17");
export const ProfileBadge18 = createSelectionTwoIcon("profile-badge18", "ProfileBadge18");
export const ProfileBadge19 = createSelectionTwoIcon("profile-badge19", "ProfileBadge19");
export const ProfileBadge20 = createSelectionTwoIcon("profile-badge20", "ProfileBadge20");
export const ProfileBadge21 = createSelectionTwoIcon("profile-badge21", "ProfileBadge21");
export const ProfileBadge22 = createSelectionTwoIcon("profile-badge22", "ProfileBadge22");
export const ProfileBadge23 = createSelectionTwoIcon("profile-badge23", "ProfileBadge23");
export const ProfileBadge24 = createSelectionTwoIcon("profile-badge24", "ProfileBadge24");
export const ProfileBadge25 = createSelectionTwoIcon("profile-badge25", "ProfileBadge25");
export const ProfileBadge26 = createSelectionTwoIcon("profile-badge26", "ProfileBadge26");
export const ProfileBadge27 = createSelectionTwoIcon("profile-badge27", "ProfileBadge27");
export const ProfileBadge28 = createSelectionTwoIcon("profile-badge28", "ProfileBadge28");
export const ProfileBadge29 = createSelectionTwoIcon("profile-badge29", "ProfileBadge29");
export const ProfileBadge30 = createSelectionTwoIcon("profile-badge30", "ProfileBadge30");
export const ProfileBadge31 = createSelectionTwoIcon("profile-badge31", "ProfileBadge31");
export const ProfileBadge32 = createSelectionTwoIcon("profile-badge32", "ProfileBadge32");
export const ProfileBadge33 = createSelectionTwoIcon("profile-badge33", "ProfileBadge33");
export const ProfileBadge34 = createSelectionTwoIcon("profile-badge34", "ProfileBadge34");
export const ProfileBadge35 = createSelectionTwoIcon("profile-badge35", "ProfileBadge35");
export const ProfileBadge36 = createSelectionTwoIcon("profile-badge36", "ProfileBadge36");
export const ProfileBadge37 = createSelectionTwoIcon("profile-badge37", "ProfileBadge37");
export const ProfileBadge38 = createSelectionTwoIcon("profile-badge38", "ProfileBadge38");
export const ProfileBadge39 = createSelectionTwoIcon("profile-badge39", "ProfileBadge39");
export const ProfileBadge40 = createSelectionTwoIcon("profile-badge40", "ProfileBadge40");
export const ProfileBadge41 = createSelectionTwoIcon("profile-badge41", "ProfileBadge41");
export const ProfileBadge42 = createSelectionTwoIcon("profile-badge42", "ProfileBadge42");
export const ProfileBadge43 = createSelectionTwoIcon("profile-badge43", "ProfileBadge43");
export const ProfileBadge44 = createSelectionTwoIcon("profile-badge44", "ProfileBadge44");
export const ProfileBadge45 = createSelectionTwoIcon("profile-badge45", "ProfileBadge45");
export const ProfileBadge46 = createSelectionTwoIcon("profile-badge46", "ProfileBadge46");
export const ProfileBadge47 = createSelectionTwoIcon("profile-badge47", "ProfileBadge47");
export const ProfileBadge48 = createSelectionTwoIcon("profile-badge48", "ProfileBadge48");
export const ProfileBadge49 = createSelectionTwoIcon("profile-badge49", "ProfileBadge49");
export const ProfileBadge50 = createSelectionTwoIcon("profile-badge50", "ProfileBadge50");
export const ProfileBadge51 = createSelectionTwoIcon("profile-badge51", "ProfileBadge51");
export const ProfileBadge52 = createSelectionTwoIcon("profile-badge52", "ProfileBadge52");
export const ClanTag01 = createSelectionTwoIcon("clan-tag01", "ClanTag01");
export const ClanTag02 = createSelectionTwoIcon("clan-tag02", "ClanTag02");
export const ClanTag03 = createSelectionTwoIcon("clan-tag03", "ClanTag03");
export const ClanTag04 = createSelectionTwoIcon("clan-tag04", "ClanTag04");
export const ClanTag05 = createSelectionTwoIcon("clan-tag05", "ClanTag05");
export const ClanTag06 = createSelectionTwoIcon("clan-tag06", "ClanTag06");
export const ClanTag07 = createSelectionTwoIcon("clan-tag07", "ClanTag07");
export const ClanTag08 = createSelectionTwoIcon("clan-tag08", "ClanTag08");
export const ClanTag09 = createSelectionTwoIcon("clan-tag09", "ClanTag09");
export const ClanTag10 = createSelectionTwoIcon("clan-tag10", "ClanTag10");
export const ClanTag11 = createSelectionTwoIcon("clan-tag11", "ClanTag11");
export const ClanTag12 = createSelectionTwoIcon("clan-tag12", "ClanTag12");
export const ClanTag13 = createSelectionTwoIcon("clan-tag13", "ClanTag13");
export const ClanTag14 = createSelectionTwoIcon("clan-tag14", "ClanTag14");
export const ClanTag15 = createSelectionTwoIcon("clan-tag15", "ClanTag15");
export const ClanTag16 = createSelectionTwoIcon("clan-tag16", "ClanTag16");
export const ClanTag17 = createSelectionTwoIcon("clan-tag17", "ClanTag17");
export const ClanTag18 = createSelectionTwoIcon("clan-tag18", "ClanTag18");
export const ClanTag19 = createSelectionTwoIcon("clan-tag19", "ClanTag19");
export const ClanTag20 = createSelectionTwoIcon("clan-tag20", "ClanTag20");
export const ClanTag21 = createSelectionTwoIcon("clan-tag21", "ClanTag21");
export const ClanTag22 = createSelectionTwoIcon("clan-tag22", "ClanTag22");
export const ClanTag23 = createSelectionTwoIcon("clan-tag23", "ClanTag23");
export const ClanTag24 = createSelectionTwoIcon("clan-tag24", "ClanTag24");
export const ClanTag25 = createSelectionTwoIcon("clan-tag25", "ClanTag25");
export const ClanTag26 = createSelectionTwoIcon("clan-tag26", "ClanTag26");
export const ClanTag27 = createSelectionTwoIcon("clan-tag27", "ClanTag27");
export const ClanTag28 = createSelectionTwoIcon("clan-tag28", "ClanTag28");
export const ClanTag29 = createSelectionTwoIcon("clan-tag29", "ClanTag29");
export const ClanTag30 = createSelectionTwoIcon("clan-tag30", "ClanTag30");
export const ClanTag31 = createSelectionTwoIcon("clan-tag31", "ClanTag31");
export const ClanTag32 = createSelectionTwoIcon("clan-tag32", "ClanTag32");
export const ClanTag33 = createSelectionTwoIcon("clan-tag33", "ClanTag33");
export const ClanTag34 = createSelectionTwoIcon("clan-tag34", "ClanTag34");
export const ClanTag35 = createSelectionTwoIcon("clan-tag35", "ClanTag35");
export const ClanTag36 = createSelectionTwoIcon("clan-tag36", "ClanTag36");
export const ClanTag37 = createSelectionTwoIcon("clan-tag37", "ClanTag37");
export const ClanTag38 = createSelectionTwoIcon("clan-tag38", "ClanTag38");
export const ClanTag39 = createSelectionTwoIcon("clan-tag39", "ClanTag39");
export const ClanTag40 = createSelectionTwoIcon("clan-tag40", "ClanTag40");
export const ProfileBriefcase = createSelectionTwoIcon("profile-briefcase", "ProfileBriefcase");
export const ProfileTicket = createSelectionTwoIcon("profile-ticket", "ProfileTicket");
export const ProfileSword = createSelectionTwoIcon("profile-sword", "ProfileSword");
export const ProfileRobot = createSelectionTwoIcon("profile-robot", "ProfileRobot");
export const ProfilePlanet = createSelectionTwoIcon("profile-planet", "ProfilePlanet");
export const ProfileBoots = createSelectionTwoIcon("profile-boots", "ProfileBoots");
export const ProfileSpaceship = createSelectionTwoIcon("profile-spaceship", "ProfileSpaceship");
export const ProfileHelmet = createSelectionTwoIcon("profile-helmet", "ProfileHelmet");
export const ProfileBird = createSelectionTwoIcon("profile-bird", "ProfileBird");
export const ProfileBananas = createSelectionTwoIcon("profile-bananas", "ProfileBananas");
export const ProfileMegaphone = createSelectionTwoIcon("profile-megaphone", "ProfileMegaphone");
export const DevConfirm = createSelectionTwoIcon("dev-confirm", "DevConfirm");
export const DevCancel = createSelectionTwoIcon("dev-cancel", "DevCancel");
export const DevLock = createSelectionTwoIcon("dev-lock", "DevLock");
export const DevClock = createSelectionTwoIcon("dev-clock", "DevClock");
export const DevShield = createSelectionTwoIcon("dev-shield", "DevShield");
export const DevMoon = createSelectionTwoIcon("dev-moon", "DevMoon");
export const DevSun = createSelectionTwoIcon("dev-sun", "DevSun");
export const DevGrid = createSelectionTwoIcon("dev-grid", "DevGrid");
export const DevHome = createSelectionTwoIcon("dev-home", "DevHome");
export const DevImageAdd = createSelectionTwoIcon("dev-image-add", "DevImageAdd");
export const DevClose = createSelectionTwoIcon("dev-close", "DevClose");
export const DevSettings = createSelectionTwoIcon("dev-settings", "DevSettings");
export const DevPlug = createSelectionTwoIcon("dev-plug", "DevPlug");
export const DevDiscord = createSelectionTwoIcon("dev-discord", "DevDiscord");
export const DevWarning = createSelectionTwoIcon("dev-warning", "DevWarning");
export const DevAlert = createSelectionTwoIcon("dev-alert", "DevAlert");
export const DevSmile = createSelectionTwoIcon("dev-smile", "DevSmile");
export const DevIntegrations = createSelectionTwoIcon("dev-integrations", "DevIntegrations");
export const DevCompass = createSelectionTwoIcon("dev-compass", "DevCompass");
export const DevMenu = createSelectionTwoIcon("dev-menu", "DevMenu");
export const DevReply = createSelectionTwoIcon("dev-reply", "DevReply");
export const DevMember = createSelectionTwoIcon("dev-member", "DevMember");
export const DevChecklist = createSelectionTwoIcon("dev-checklist", "DevChecklist");
export const DevNodes = createSelectionTwoIcon("dev-nodes", "DevNodes");
export const DevLinkedCard = createSelectionTwoIcon("dev-linked-card", "DevLinkedCard");
export const DevImages = createSelectionTwoIcon("dev-images", "DevImages");
export const DevAdd = createSelectionTwoIcon("dev-add", "DevAdd");
export const DevMembers = createSelectionTwoIcon("dev-members", "DevMembers");
export const DevMascot = createSelectionTwoIcon("dev-mascot", "DevMascot");
export const DevSparkles = createSelectionTwoIcon("dev-sparkles", "DevSparkles");
export const DevSlash = createSelectionTwoIcon("dev-slash", "DevSlash");
export const DevEye = createSelectionTwoIcon("dev-eye", "DevEye");
export const DevList = createSelectionTwoIcon("dev-list", "DevList");
export const DevHelp = createSelectionTwoIcon("dev-help", "DevHelp");
export const DevAtom = createSelectionTwoIcon("dev-atom", "DevAtom");
export const DmPlus = createSelectionTwoIcon("dm-plus", "DmPlus");
export const DmPin = createSelectionTwoIcon("dm-pin", "DmPin");
export const DmAddFriend = createSelectionTwoIcon("dm-add-friend", "DmAddFriend");
export const DmSwitchAccount = createSelectionTwoIcon("dm-switch-account", "DmSwitchAccount");
export const DmUserCheck = createSelectionTwoIcon("dm-user-check", "DmUserCheck");
export const DmId = createSelectionTwoIcon("dm-id", "DmId");
export const DmChevronRight = createSelectionTwoIcon("dm-chevron-right", "DmChevronRight");
export const DmChevronDown = createSelectionTwoIcon("dm-chevron-down", "DmChevronDown");
export const DmMessageCheck = createSelectionTwoIcon("dm-message-check", "DmMessageCheck");
export const CallPhone = createSelectionTwoIcon("call-phone", "CallPhone");
export const CallVideo = createSelectionTwoIcon("call-video", "CallVideo");
export const CallVideoOff = createSelectionTwoIcon("call-video-off", "CallVideoOff");
export const CallHangUp = createSelectionTwoIcon("call-hang-up", "CallHangUp");
export const CallMicrophone = createSelectionTwoIcon("call-microphone", "CallMicrophone");
export const CallMicrophoneOff = createSelectionTwoIcon("call-microphone-off", "CallMicrophoneOff");
export const CallHeadphones = createSelectionTwoIcon("call-headphones", "CallHeadphones");
export const CallDeafened = createSelectionTwoIcon("call-deafened", "CallDeafened");
export const CallRinging = createSelectionTwoIcon("call-ringing", "CallRinging");
export const CallActivities = createSelectionTwoIcon("call-activities", "CallActivities");
export const CallShareScreen = createSelectionTwoIcon("call-share-screen", "CallShareScreen");
export const CallChevronDown = createSelectionTwoIcon("call-chevron-down", "CallChevronDown");
export const CallOpen = createSelectionTwoIcon("call-open", "CallOpen");
export const CallFullscreen = createSelectionTwoIcon("call-fullscreen", "CallFullscreen");
export const CallAccept = createSelectionTwoIcon("call-accept", "CallAccept");
export const CallHandset = createSelectionTwoIcon("call-handset", "CallHandset");
export const ActivityRocket = createSelectionTwoIcon("activity-rocket", "ActivityRocket");
export const ActivitySearch = createSelectionTwoIcon("activity-search", "ActivitySearch");
export const ActivityArrowLeft = createSelectionTwoIcon("activity-arrow-left", "ActivityArrowLeft");
export const ActivityLink = createSelectionTwoIcon("activity-link", "ActivityLink");
export const ActivityMore = createSelectionTwoIcon("activity-more", "ActivityMore");
export const ActivityId = createSelectionTwoIcon("activity-id", "ActivityId");
export const ActivityMembers = createSelectionTwoIcon("activity-members", "ActivityMembers");
export const ActivityNitro = createSelectionTwoIcon("activity-nitro", "ActivityNitro");
export const ActivityPopout = createSelectionTwoIcon("activity-popout", "ActivityPopout");
export const ActivityCelebrate = createSelectionTwoIcon("activity-celebrate", "ActivityCelebrate");
export const ActivityApps = createSelectionTwoIcon("activity-apps", "ActivityApps");
export const ActivityShareScreen = createSelectionTwoIcon("activity-share-screen", "ActivityShareScreen");
export const ActivityUserPlay = createSelectionTwoIcon("activity-user-play", "ActivityUserPlay");
export const ActivityMaximize = createSelectionTwoIcon("activity-maximize", "ActivityMaximize");
export const MessageAdd = createSelectionTwoIcon("message-add", "MessageAdd");
export const MessageMenu = createSelectionTwoIcon("message-menu", "MessageMenu");
export const MessageFile = createSelectionTwoIcon("message-file", "MessageFile");
export const MessageGift = createSelectionTwoIcon("message-gift", "MessageGift");
export const MessageGIF = createSelectionTwoIcon("message-gif", "MessageGIF");
export const MessageSticker = createSelectionTwoIcon("message-sticker", "MessageSticker");
export const MessageEmoji = createSelectionTwoIcon("message-emoji", "MessageEmoji");
export const MessageActivities = createSelectionTwoIcon("message-activities", "MessageActivities");
export const MessageStar = createSelectionTwoIcon("message-star", "MessageStar");
export const MessageStarFilled = createSelectionTwoIcon("message-star-filled", "MessageStarFilled");
export const MessageStarOutline = createSelectionTwoIcon("message-star-outline", "MessageStarOutline");
export const MessageStarGold = createSelectionTwoIcon("message-star-gold", "MessageStarGold");
export const MessageClock = createSelectionTwoIcon("message-clock", "MessageClock");
export const MessageUpload = createSelectionTwoIcon("message-upload", "MessageUpload");
export const MessageSlash = createSelectionTwoIcon("message-slash", "MessageSlash");
export const MessageSnooze = createSelectionTwoIcon("message-snooze", "MessageSnooze");
export const MessageStopwatch = createSelectionTwoIcon("message-stopwatch", "MessageStopwatch");
export const MessageProfileStatus = createSelectionTwoIcon("message-profile-status", "MessageProfileStatus");
export const MessageLock = createSelectionTwoIcon("message-lock", "MessageLock");
export const MessageMoon = createSelectionTwoIcon("message-moon", "MessageMoon");
export const MessageFavorite = createSelectionTwoIcon("message-favorite", "MessageFavorite");
export const MessageLeaf = createSelectionTwoIcon("message-leaf", "MessageLeaf");
export const MessageBowl = createSelectionTwoIcon("message-bowl", "MessageBowl");
export const MessageGamepad = createSelectionTwoIcon("message-gamepad", "MessageGamepad");
export const MessageBike = createSelectionTwoIcon("message-bike", "MessageBike");
export const MessageStage = createSelectionTwoIcon("message-stage", "MessageStage");
export const MessageHeart = createSelectionTwoIcon("message-heart", "MessageHeart");
export const MessageFlag = createSelectionTwoIcon("message-flag", "MessageFlag");
