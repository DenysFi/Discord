import type { NamedDiscordIcon, NamedDiscordIconProps } from "./discord-icons"
import { IconAsset } from "./icon-asset"

const ICON_DIRECTORY = "/discord-icons/individual"

const icon = (name: string, label: string, group: string, x: number, y: number) => ({ name, label, group, x, y })

export const guildIcons = [
	icon("guild-category-001", "Guild channels · Categories 1", "Guild channels · Categories", 23.5, 67),
	icon("guild-category-002", "Guild channels · Categories 2", "Guild channels · Categories", 158.5, 67),
	icon("guild-category-003", "Guild channels · Categories 3", "Guild channels · Categories", 293.5, 67),
	icon("guild-category-004", "Guild channels · Categories 4", "Guild channels · Categories", 428.5, 67),
	icon("guild-category-005", "Guild channels · Categories 5", "Guild channels · Categories", 563.5, 67),
	icon("guild-category-006", "Guild channels · Categories 6", "Guild channels · Categories", 293.5, 202),
	icon("guild-category-007", "Guild channels · Categories 7", "Guild channels · Categories", 23.5, 405),
	icon("guild-category-008", "Guild channels · Categories 8", "Guild channels · Categories", 158.5, 405),
	icon("guild-category-009", "Guild channels · Categories 9", "Guild channels · Categories", 293.5, 405),
	icon("guild-category-010", "Guild channels · Categories 10", "Guild channels · Categories", 428.5, 405),
	icon("guild-category-011", "Guild channels · Categories 11", "Guild channels · Categories", 563.5, 405),
	icon("guild-category-012", "Guild channels · Categories 12", "Guild channels · Categories", 91, 540),
	icon("guild-category-013", "Guild channels · Categories 13", "Guild channels · Categories", 226, 540),
	icon("guild-category-014", "Guild channels · Categories 14", "Guild channels · Categories", 361, 540),
	icon("guild-category-015", "Guild channels · Categories 15", "Guild channels · Categories", 496, 540),
	icon("guild-category-016", "Guild channels · Categories 16", "Guild channels · Categories", 23.5, 743),
	icon("guild-category-017", "Guild channels · Categories 17", "Guild channels · Categories", 158.5, 743),
	icon("guild-category-018", "Guild channels · Categories 18", "Guild channels · Categories", 293.5, 743),
	icon("guild-category-019", "Guild channels · Categories 19", "Guild channels · Categories", 428.5, 743),
	icon("guild-category-020", "Guild channels · Categories 20", "Guild channels · Categories", 563.5, 743),
	icon("guild-category-021", "Guild channels · Categories 21", "Guild channels · Categories", 23.5, 878),
	icon("guild-category-022", "Guild channels · Categories 22", "Guild channels · Categories", 158.5, 878),
	icon("guild-category-023", "Guild channels · Categories 23", "Guild channels · Categories", 293.5, 878),
	icon("guild-category-024", "Guild channels · Categories 24", "Guild channels · Categories", 428.5, 878),
	icon("guild-category-025", "Guild channels · Categories 25", "Guild channels · Categories", 563.5, 878),
	icon("guild-category-026", "Guild channels · Categories 26", "Guild channels · Categories", 23.5, 1013),
	icon("guild-category-027", "Guild channels · Categories 27", "Guild channels · Categories", 158.5, 1013),
	icon("guild-category-028", "Guild channels · Categories 28", "Guild channels · Categories", 293.5, 1013),
	icon("guild-category-029", "Guild channels · Categories 29", "Guild channels · Categories", 428.5, 1013),
	icon("guild-category-030", "Guild channels · Categories 30", "Guild channels · Categories", 563.5, 1013),
	icon("guild-category-031", "Guild channels · Categories 31", "Guild channels · Categories", 23.5, 1148),
	icon("guild-category-032", "Guild channels · Categories 32", "Guild channels · Categories", 158.5, 1148),
	icon("guild-category-033", "Guild channels · Categories 33", "Guild channels · Categories", 293.5, 1148),
	icon("guild-category-034", "Guild channels · Categories 34", "Guild channels · Categories", 428.5, 1148),
	icon("guild-category-035", "Guild channels · Categories 35", "Guild channels · Categories", 563.5, 1148),
	icon("guild-category-036", "Guild channels · Categories 36", "Guild channels · Categories", 23.5, 1283),
	icon("guild-category-037", "Guild channels · Categories 37", "Guild channels · Categories", 158.5, 1283),
	icon("guild-category-038", "Guild channels · Categories 38", "Guild channels · Categories", 293.5, 1283),
	icon("guild-category-039", "Guild channels · Categories 39", "Guild channels · Categories", 428.5, 1283),
	icon("guild-category-040", "Guild channels · Categories 40", "Guild channels · Categories", 563.5, 1283),
	icon("guild-category-041", "Guild channels · Categories 41", "Guild channels · Categories", 23.5, 1418),
	icon("guild-category-042", "Guild channels · Categories 42", "Guild channels · Categories", 158.5, 1418),
	icon("guild-category-043", "Guild channels · Categories 43", "Guild channels · Categories", 293.5, 1418),
	icon("guild-category-044", "Guild channels · Categories 44", "Guild channels · Categories", 428.5, 1418),
	icon("guild-category-045", "Guild channels · Categories 45", "Guild channels · Categories", 563.5, 1418),
	icon("guild-category-046", "Guild channels · Categories 46", "Guild channels · Categories", 23.5, 1621),
	icon("guild-category-047", "Guild channels · Categories 47", "Guild channels · Categories", 158.5, 1621),
	icon("guild-category-048", "Guild channels · Categories 48", "Guild channels · Categories", 293.5, 1621),
	icon("guild-category-049", "Guild channels · Categories 49", "Guild channels · Categories", 428.5, 1621),
	icon("guild-category-050", "Guild channels · Categories 50", "Guild channels · Categories", 563.5, 1621),
	icon("guild-category-051", "Guild channels · Categories 51", "Guild channels · Categories", 158.5, 1756),
	icon("guild-category-052", "Guild channels · Categories 52", "Guild channels · Categories", 293.5, 1756),
	icon("guild-category-053", "Guild channels · Categories 53", "Guild channels · Categories", 428.5, 1756),
	icon("guild-category-054", "Guild channels · Categories 54", "Guild channels · Categories", 23.5, 1959),
	icon("guild-category-055", "Guild channels · Categories 55", "Guild channels · Categories", 158.5, 1959),
	icon("guild-category-056", "Guild channels · Categories 56", "Guild channels · Categories", 293.5, 1959),
	icon("guild-category-057", "Guild channels · Categories 57", "Guild channels · Categories", 428.5, 1959),
	icon("guild-category-058", "Guild channels · Categories 58", "Guild channels · Categories", 563.5, 1959),
	icon("guild-category-059", "Guild channels · Categories 59", "Guild channels · Categories", 23.5, 2094),
	icon("guild-category-060", "Guild channels · Categories 60", "Guild channels · Categories", 158.5, 2094),
	icon("guild-category-061", "Guild channels · Categories 61", "Guild channels · Categories", 293.5, 2094),
	icon("guild-category-062", "Guild channels · Categories 62", "Guild channels · Categories", 428.5, 2094),
	icon("guild-category-063", "Guild channels · Categories 63", "Guild channels · Categories", 563.5, 2094),
	icon("guild-category-064", "Guild channels · Categories 64", "Guild channels · Categories", 22.5, 2229),
	icon("guild-category-065", "Guild channels · Categories 65", "Guild channels · Categories", 158.5, 2229),
	icon("guild-category-066", "Guild channels · Categories 66", "Guild channels · Categories", 294.5, 2229),
	icon("guild-category-067", "Guild channels · Categories 67", "Guild channels · Categories", 429.5, 2229),
	icon("guild-category-068", "Guild channels · Categories 68", "Guild channels · Categories", 564.5, 2229),
	icon("guild-category-069", "Guild channels · Categories 69", "Guild channels · Categories", 23.5, 2364),
	icon("guild-category-070", "Guild channels · Categories 70", "Guild channels · Categories", 158.5, 2364),
	icon("guild-category-071", "Guild channels · Categories 71", "Guild channels · Categories", 293.5, 2364),
	icon("guild-category-072", "Guild channels · Categories 72", "Guild channels · Categories", 428.5, 2364),
	icon("guild-category-073", "Guild channels · Categories 73", "Guild channels · Categories", 563.5, 2364),
	icon("guild-category-074", "Guild channels · Categories 74", "Guild channels · Categories", 23.5, 2567),
	icon("guild-category-075", "Guild channels · Categories 75", "Guild channels · Categories", 158.5, 2567),
	icon("guild-category-076", "Guild channels · Categories 76", "Guild channels · Categories", 293.5, 2567),
	icon("guild-category-077", "Guild channels · Categories 77", "Guild channels · Categories", 428.5, 2567),
	icon("guild-category-078", "Guild channels · Categories 78", "Guild channels · Categories", 563.5, 2567),
	icon("guild-category-079", "Guild channels · Categories 79", "Guild channels · Categories", 23.5, 2702),
	icon("guild-category-080", "Guild channels · Categories 80", "Guild channels · Categories", 158.5, 2702),
	icon("guild-category-081", "Guild channels · Categories 81", "Guild channels · Categories", 293.5, 2702),
	icon("guild-category-082", "Guild channels · Categories 82", "Guild channels · Categories", 428.5, 2702),
	icon("guild-category-083", "Guild channels · Categories 83", "Guild channels · Categories", 563.5, 2702),
	icon("guild-category-084", "Guild channels · Categories 84", "Guild channels · Categories", 23.5, 2837),
	icon("guild-category-085", "Guild channels · Categories 85", "Guild channels · Categories", 158.5, 2837),
	icon("guild-category-086", "Guild channels · Categories 86", "Guild channels · Categories", 293.5, 2837),
	icon("guild-category-087", "Guild channels · Categories 87", "Guild channels · Categories", 428.5, 2837),
	icon("guild-category-088", "Guild channels · Categories 88", "Guild channels · Categories", 563.5, 2837),
	icon("guild-category-089", "Guild channels · Categories 89", "Guild channels · Categories", 22, 2972),
	icon("guild-category-090", "Guild channels · Categories 90", "Guild channels · Categories", 157, 2972),
	icon("guild-category-091", "Guild channels · Categories 91", "Guild channels · Categories", 292, 2972),
	icon("guild-category-092", "Guild channels · Categories 92", "Guild channels · Categories", 428, 2972),
	icon("guild-category-093", "Guild channels · Categories 93", "Guild channels · Categories", 564, 2972),
	icon("guild-category-094", "Guild channels · Categories 94", "Guild channels · Categories", 225, 3107),
	icon("guild-category-095", "Guild channels · Categories 95", "Guild channels · Categories", 361, 3107),
	icon("guild-category-096", "Guild channels · Categories 96", "Guild channels · Categories", 726.5, 67),
	icon("guild-category-097", "Guild channels · Categories 97", "Guild channels · Categories", 861.5, 67),
	icon("guild-category-098", "Guild channels · Categories 98", "Guild channels · Categories", 996.5, 67),
	icon("guild-category-099", "Guild channels · Categories 99", "Guild channels · Categories", 1131.5, 67),
	icon("guild-category-100", "Guild channels · Categories 100", "Guild channels · Categories", 1266.5, 67),
	icon("guild-category-101", "Guild channels · Categories 101", "Guild channels · Categories", 996.5, 202),
	icon("guild-category-102", "Guild channels · Categories 102", "Guild channels · Categories", 726.5, 405),
	icon("guild-category-103", "Guild channels · Categories 103", "Guild channels · Categories", 861.5, 405),
	icon("guild-category-104", "Guild channels · Categories 104", "Guild channels · Categories", 996.5, 405),
	icon("guild-category-105", "Guild channels · Categories 105", "Guild channels · Categories", 1131.5, 405),
	icon("guild-category-106", "Guild channels · Categories 106", "Guild channels · Categories", 1266.5, 405),
	icon("guild-category-107", "Guild channels · Categories 107", "Guild channels · Categories", 724.5, 540),
	icon("guild-category-108", "Guild channels · Categories 108", "Guild channels · Categories", 859.5, 540),
	icon("guild-category-109", "Guild channels · Categories 109", "Guild channels · Categories", 995.5, 540),
	icon("guild-category-110", "Guild channels · Categories 110", "Guild channels · Categories", 1131.5, 540),
	icon("guild-category-111", "Guild channels · Categories 111", "Guild channels · Categories", 1267.5, 540),
	icon("guild-category-112", "Guild channels · Categories 112", "Guild channels · Categories", 726, 675),
	icon("guild-category-113", "Guild channels · Categories 113", "Guild channels · Categories", 862, 675),
	icon("guild-category-114", "Guild channels · Categories 114", "Guild channels · Categories", 997, 675),
	icon("guild-category-115", "Guild channels · Categories 115", "Guild channels · Categories", 1132, 675),
	icon("guild-category-116", "Guild channels · Categories 116", "Guild channels · Categories", 1267, 675),
	icon("guild-category-117", "Guild channels · Categories 117", "Guild channels · Categories", 726.5, 810),
	icon("guild-category-118", "Guild channels · Categories 118", "Guild channels · Categories", 861.5, 810),
	icon("guild-category-119", "Guild channels · Categories 119", "Guild channels · Categories", 996.5, 810),
	icon("guild-category-120", "Guild channels · Categories 120", "Guild channels · Categories", 1131.5, 810),
	icon("guild-category-121", "Guild channels · Categories 121", "Guild channels · Categories", 1266.5, 810),
	icon("guild-category-122", "Guild channels · Categories 122", "Guild channels · Categories", 726.5, 945),
	icon("guild-category-123", "Guild channels · Categories 123", "Guild channels · Categories", 861.5, 945),
	icon("guild-category-124", "Guild channels · Categories 124", "Guild channels · Categories", 996.5, 945),
	icon("guild-category-125", "Guild channels · Categories 125", "Guild channels · Categories", 1131.5, 945),
	icon("guild-category-126", "Guild channels · Categories 126", "Guild channels · Categories", 1266.5, 945),
	icon("guild-category-127", "Guild channels · Categories 127", "Guild channels · Categories", 726.5, 1080),
	icon("guild-category-128", "Guild channels · Categories 128", "Guild channels · Categories", 861.5, 1080),
	icon("guild-category-129", "Guild channels · Categories 129", "Guild channels · Categories", 996.5, 1080),
	icon("guild-category-130", "Guild channels · Categories 130", "Guild channels · Categories", 1131.5, 1080),
	icon("guild-category-131", "Guild channels · Categories 131", "Guild channels · Categories", 1266.5, 1080),
	icon("guild-category-132", "Guild channels · Categories 132", "Guild channels · Categories", 725.5, 1215),
	icon("guild-category-133", "Guild channels · Categories 133", "Guild channels · Categories", 860.5, 1215),
	icon("guild-category-134", "Guild channels · Categories 134", "Guild channels · Categories", 995.5, 1215),
	icon("guild-category-135", "Guild channels · Categories 135", "Guild channels · Categories", 1130.5, 1215),
	icon("guild-category-136", "Guild channels · Categories 136", "Guild channels · Categories", 1266.5, 1215),
	icon("guild-category-137", "Guild channels · Categories 137", "Guild channels · Categories", 725.5, 1350),
	icon("guild-category-138", "Guild channels · Categories 138", "Guild channels · Categories", 861.5, 1350),
	icon("guild-category-139", "Guild channels · Categories 139", "Guild channels · Categories", 997.5, 1350),
	icon("guild-category-140", "Guild channels · Categories 140", "Guild channels · Categories", 1132.5, 1350),
	icon("guild-category-141", "Guild channels · Categories 141", "Guild channels · Categories", 1267.5, 1350),
	icon("guild-category-142", "Guild channels · Categories 142", "Guild channels · Categories", 794, 1485),
	icon("guild-category-143", "Guild channels · Categories 143", "Guild channels · Categories", 929, 1485),
	icon("guild-category-144", "Guild channels · Categories 144", "Guild channels · Categories", 1064, 1485),
	icon("guild-category-145", "Guild channels · Categories 145", "Guild channels · Categories", 1199, 1485),
	icon("guild-category-146", "Guild channels · Categories 146", "Guild channels · Categories", 794, 1688),
	icon("guild-category-147", "Guild channels · Categories 147", "Guild channels · Categories", 929, 1688),
	icon("guild-category-148", "Guild channels · Categories 148", "Guild channels · Categories", 1064, 1688),
	icon("guild-category-149", "Guild channels · Categories 149", "Guild channels · Categories", 1199, 1688),
	icon("guild-category-150", "Guild channels · Categories 150", "Guild channels · Categories", 929, 1891),
	icon("guild-category-151", "Guild channels · Categories 151", "Guild channels · Categories", 1064, 1891),
	icon("guild-category-152", "Guild channels · Categories 152", "Guild channels · Categories", 726.5, 2094),
	icon("guild-category-153", "Guild channels · Categories 153", "Guild channels · Categories", 861.5, 2094),
	icon("guild-category-154", "Guild channels · Categories 154", "Guild channels · Categories", 996.5, 2094),
	icon("guild-category-155", "Guild channels · Categories 155", "Guild channels · Categories", 1131.5, 2094),
	icon("guild-category-156", "Guild channels · Categories 156", "Guild channels · Categories", 1266.5, 2094),
	icon("guild-category-157", "Guild channels · Categories 157", "Guild channels · Categories", 726.5, 2229),
	icon("guild-category-158", "Guild channels · Categories 158", "Guild channels · Categories", 861.5, 2229),
	icon("guild-category-159", "Guild channels · Categories 159", "Guild channels · Categories", 996.5, 2229),
	icon("guild-category-160", "Guild channels · Categories 160", "Guild channels · Categories", 1131.5, 2229),
	icon("guild-category-161", "Guild channels · Categories 161", "Guild channels · Categories", 1266.5, 2229),
	icon("guild-category-162", "Guild channels · Categories 162", "Guild channels · Categories", 861.5, 2364),
	icon("guild-category-163", "Guild channels · Categories 163", "Guild channels · Categories", 996.5, 2364),
	icon("guild-category-164", "Guild channels · Categories 164", "Guild channels · Categories", 1131.5, 2364),
	icon("guild-category-165", "Guild channels · Categories 165", "Guild channels · Categories", 726.5, 2567),
	icon("guild-category-166", "Guild channels · Categories 166", "Guild channels · Categories", 861.5, 2567),
	icon("guild-category-167", "Guild channels · Categories 167", "Guild channels · Categories", 996.5, 2567),
	icon("guild-category-168", "Guild channels · Categories 168", "Guild channels · Categories", 1131.5, 2567),
	icon("guild-category-169", "Guild channels · Categories 169", "Guild channels · Categories", 1266.5, 2567),
	icon("guild-category-170", "Guild channels · Categories 170", "Guild channels · Categories", 996.5, 2702),
	icon("guild-tooltip-001", "Guilds · Tooltip 1", "Guilds · Tooltip", 23.5, 67),
	icon("guild-tooltip-002", "Guilds · Tooltip 2", "Guilds · Tooltip", 158.5, 67),
	icon("guild-tooltip-003", "Guilds · Tooltip 3", "Guilds · Tooltip", 293.5, 67),
	icon("guild-tooltip-004", "Guilds · Tooltip 4", "Guilds · Tooltip", 428.5, 67),
	icon("guild-tooltip-005", "Guilds · Tooltip 5", "Guilds · Tooltip", 563.5, 67),
	icon("guild-tooltip-006", "Guilds · Tooltip 6", "Guilds · Tooltip", 23.5, 202),
	icon("guild-tooltip-007", "Guilds · Tooltip 7", "Guilds · Tooltip", 158.5, 202),
	icon("guild-tooltip-008", "Guilds · Tooltip 8", "Guilds · Tooltip", 293.5, 202),
	icon("guild-tooltip-009", "Guilds · Tooltip 9", "Guilds · Tooltip", 428.5, 202),
	icon("guild-tooltip-010", "Guilds · Tooltip 10", "Guilds · Tooltip", 563.5, 202),
	icon("guild-tooltip-011", "Guilds · Tooltip 11", "Guilds · Tooltip", 23.5, 337),
	icon("guild-tooltip-012", "Guilds · Tooltip 12", "Guilds · Tooltip", 158.5, 337),
	icon("guild-tooltip-013", "Guilds · Tooltip 13", "Guilds · Tooltip", 293.5, 337),
	icon("guild-tooltip-014", "Guilds · Tooltip 14", "Guilds · Tooltip", 428.5, 337),
	icon("guild-tooltip-015", "Guilds · Tooltip 15", "Guilds · Tooltip", 563.5, 337),
	icon("guild-tooltip-016", "Guilds · Tooltip 16", "Guilds · Tooltip", 158.5, 472),
	icon("guild-tooltip-017", "Guilds · Tooltip 17", "Guilds · Tooltip", 293.5, 472),
	icon("guild-tooltip-018", "Guilds · Tooltip 18", "Guilds · Tooltip", 428.5, 472),
	icon("guild-boost-001", "Guilds · Boost page 1", "Guilds · Boost page", 23.5, 67),
	icon("guild-boost-002", "Guilds · Boost page 2", "Guilds · Boost page", 158.5, 67),
	icon("guild-boost-003", "Guilds · Boost page 3", "Guilds · Boost page", 293.5, 67),
	icon("guild-boost-004", "Guilds · Boost page 4", "Guilds · Boost page", 428.5, 67),
	icon("guild-boost-005", "Guilds · Boost page 5", "Guilds · Boost page", 563.5, 67),
	icon("guild-boost-006", "Guilds · Boost page 6", "Guilds · Boost page", 23.5, 202),
	icon("guild-boost-007", "Guilds · Boost page 7", "Guilds · Boost page", 158.5, 202),
	icon("guild-boost-008", "Guilds · Boost page 8", "Guilds · Boost page", 293.5, 202),
	icon("guild-boost-009", "Guilds · Boost page 9", "Guilds · Boost page", 428.5, 202),
	icon("guild-boost-010", "Guilds · Boost page 10", "Guilds · Boost page", 563.5, 202),
	icon("guild-boost-011", "Guilds · Boost page 11", "Guilds · Boost page", 23.5, 337),
	icon("guild-boost-012", "Guilds · Boost page 12", "Guilds · Boost page", 158.5, 337),
	icon("guild-boost-013", "Guilds · Boost page 13", "Guilds · Boost page", 293.5, 337),
	icon("guild-boost-014", "Guilds · Boost page 14", "Guilds · Boost page", 428.5, 337),
	icon("guild-boost-015", "Guilds · Boost page 15", "Guilds · Boost page", 563.5, 337),
	icon("guild-boost-016", "Guilds · Boost page 16", "Guilds · Boost page", 23, 472),
	icon("guild-boost-017", "Guilds · Boost page 17", "Guilds · Boost page", 158, 472),
	icon("guild-boost-018", "Guilds · Boost page 18", "Guilds · Boost page", 293, 472),
	icon("guild-boost-019", "Guilds · Boost page 19", "Guilds · Boost page", 428, 472),
	icon("guild-boost-020", "Guilds · Boost page 20", "Guilds · Boost page", 563, 472),
	icon("guild-boost-021", "Guilds · Boost page 21", "Guilds · Boost page", 225, 607),
	icon("guild-boost-022", "Guilds · Boost page 22", "Guilds · Boost page", 361, 607),
	icon("guild-event-001", "Guilds · Events 1", "Guilds · Events", 23.5, 67),
	icon("guild-event-002", "Guilds · Events 2", "Guilds · Events", 158.5, 67),
	icon("guild-event-003", "Guilds · Events 3", "Guilds · Events", 293.5, 67),
	icon("guild-event-004", "Guilds · Events 4", "Guilds · Events", 428.5, 67),
	icon("guild-event-005", "Guilds · Events 5", "Guilds · Events", 563.5, 67),
	icon("guild-event-006", "Guilds · Events 6", "Guilds · Events", 23.5, 202),
	icon("guild-event-007", "Guilds · Events 7", "Guilds · Events", 158.5, 202),
	icon("guild-event-008", "Guilds · Events 8", "Guilds · Events", 293.5, 202),
	icon("guild-event-009", "Guilds · Events 9", "Guilds · Events", 428.5, 202),
	icon("guild-event-010", "Guilds · Events 10", "Guilds · Events", 563.5, 202),
	icon("guild-event-011", "Guilds · Events 11", "Guilds · Events", 293.5, 337),
	icon("guild-app-directory-001", "Guilds · App directory 1", "Guilds · App directory", 23.5, 67),
	icon("guild-app-directory-002", "Guilds · App directory 2", "Guilds · App directory", 158.5, 67),
	icon("guild-app-directory-003", "Guilds · App directory 3", "Guilds · App directory", 293.5, 67),
	icon("guild-app-directory-004", "Guilds · App directory 4", "Guilds · App directory", 428.5, 67),
	icon("guild-app-directory-005", "Guilds · App directory 5", "Guilds · App directory", 563.5, 67),
	icon("guild-app-directory-006", "Guilds · App directory 6", "Guilds · App directory", 23.5, 202),
	icon("guild-app-directory-007", "Guilds · App directory 7", "Guilds · App directory", 158.5, 202),
	icon("guild-app-directory-008", "Guilds · App directory 8", "Guilds · App directory", 293.5, 202),
	icon("guild-app-directory-009", "Guilds · App directory 9", "Guilds · App directory", 428.5, 202),
	icon("guild-app-directory-010", "Guilds · App directory 10", "Guilds · App directory", 563.5, 202),
	icon("guild-app-directory-011", "Guilds · App directory 11", "Guilds · App directory", 23.5, 337),
	icon("guild-app-directory-012", "Guilds · App directory 12", "Guilds · App directory", 158.5, 337),
	icon("guild-app-directory-013", "Guilds · App directory 13", "Guilds · App directory", 293.5, 337),
	icon("guild-app-directory-014", "Guilds · App directory 14", "Guilds · App directory", 428.5, 337),
	icon("guild-app-directory-015", "Guilds · App directory 15", "Guilds · App directory", 563.5, 337),
	icon("guild-app-directory-016", "Guilds · App directory 16", "Guilds · App directory", 23.5, 472),
	icon("guild-app-directory-017", "Guilds · App directory 17", "Guilds · App directory", 158.5, 472),
	icon("guild-app-directory-018", "Guilds · App directory 18", "Guilds · App directory", 293.5, 472),
	icon("guild-app-directory-019", "Guilds · App directory 19", "Guilds · App directory", 428.5, 472),
	icon("guild-app-directory-020", "Guilds · App directory 20", "Guilds · App directory", 563.5, 472),
	icon("guild-app-directory-021", "Guilds · App directory 21", "Guilds · App directory", 23.5, 607),
	icon("guild-app-directory-022", "Guilds · App directory 22", "Guilds · App directory", 158.5, 607),
	icon("guild-app-directory-023", "Guilds · App directory 23", "Guilds · App directory", 293.5, 607),
	icon("guild-app-directory-024", "Guilds · App directory 24", "Guilds · App directory", 428.5, 607),
	icon("guild-app-directory-025", "Guilds · App directory 25", "Guilds · App directory", 563.5, 607),
	icon("guild-app-directory-026", "Guilds · App directory 26", "Guilds · App directory", 226, 742),
	icon("guild-app-directory-027", "Guilds · App directory 27", "Guilds · App directory", 361, 742),
	icon("guild-server-insight-001", "Guilds · Server insights 1", "Guilds · Server insights", 23.5, 67),
	icon("guild-server-insight-002", "Guilds · Server insights 2", "Guilds · Server insights", 158.5, 67),
	icon("guild-server-insight-003", "Guilds · Server insights 3", "Guilds · Server insights", 293.5, 67),
	icon("guild-server-insight-004", "Guilds · Server insights 4", "Guilds · Server insights", 428.5, 67),
	icon("guild-server-insight-005", "Guilds · Server insights 5", "Guilds · Server insights", 563.5, 67),
	icon("guild-server-insight-006", "Guilds · Server insights 6", "Guilds · Server insights", 23.5, 202),
	icon("guild-server-insight-007", "Guilds · Server insights 7", "Guilds · Server insights", 158.5, 202),
	icon("guild-server-insight-008", "Guilds · Server insights 8", "Guilds · Server insights", 293.5, 202),
	icon("guild-server-insight-009", "Guilds · Server insights 9", "Guilds · Server insights", 428.5, 202),
	icon("guild-server-insight-010", "Guilds · Server insights 10", "Guilds · Server insights", 563.5, 202),
	icon("guild-server-insight-011", "Guilds · Server insights 11", "Guilds · Server insights", 158.5, 337),
	icon("guild-server-insight-012", "Guilds · Server insights 12", "Guilds · Server insights", 293.5, 337),
	icon("guild-server-insight-013", "Guilds · Server insights 13", "Guilds · Server insights", 428.5, 337),
] as const

export type GuildIconName = (typeof guildIcons)[number]["name"]
export type GuildIconProps = NamedDiscordIconProps & { name: GuildIconName }

export function GuildIcon({ name, label, size = 20, colorMode = "currentColor", role, ref, ...props }: GuildIconProps) {
	const definition = guildIcons.find(candidate => candidate.name === name)
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

function createGuildIcon(name: GuildIconName, displayName: string): NamedDiscordIcon {
	function Component({ ref, ...props }: NamedDiscordIconProps) {
		return <GuildIcon {...props} ref={ref} name={name} />
	}

	Component.displayName = displayName
	return Component
}

export const GuildCategory001 = createGuildIcon("guild-category-001", "GuildCategory001")
export const GuildCategory002 = createGuildIcon("guild-category-002", "GuildCategory002")
export const GuildCategory003 = createGuildIcon("guild-category-003", "GuildCategory003")
export const GuildCategory004 = createGuildIcon("guild-category-004", "GuildCategory004")
export const GuildCategory005 = createGuildIcon("guild-category-005", "GuildCategory005")
export const GuildCategory006 = createGuildIcon("guild-category-006", "GuildCategory006")
export const GuildCategory007 = createGuildIcon("guild-category-007", "GuildCategory007")
export const GuildCategory008 = createGuildIcon("guild-category-008", "GuildCategory008")
export const GuildCategory009 = createGuildIcon("guild-category-009", "GuildCategory009")
export const GuildCategory010 = createGuildIcon("guild-category-010", "GuildCategory010")
export const GuildCategory011 = createGuildIcon("guild-category-011", "GuildCategory011")
export const GuildCategory012 = createGuildIcon("guild-category-012", "GuildCategory012")
export const GuildCategory013 = createGuildIcon("guild-category-013", "GuildCategory013")
export const GuildCategory014 = createGuildIcon("guild-category-014", "GuildCategory014")
export const GuildCategory015 = createGuildIcon("guild-category-015", "GuildCategory015")
export const GuildCategory016 = createGuildIcon("guild-category-016", "GuildCategory016")
export const GuildCategory017 = createGuildIcon("guild-category-017", "GuildCategory017")
export const GuildCategory018 = createGuildIcon("guild-category-018", "GuildCategory018")
export const GuildCategory019 = createGuildIcon("guild-category-019", "GuildCategory019")
export const GuildCategory020 = createGuildIcon("guild-category-020", "GuildCategory020")
export const GuildCategory021 = createGuildIcon("guild-category-021", "GuildCategory021")
export const GuildCategory022 = createGuildIcon("guild-category-022", "GuildCategory022")
export const GuildCategory023 = createGuildIcon("guild-category-023", "GuildCategory023")
export const GuildCategory024 = createGuildIcon("guild-category-024", "GuildCategory024")
export const GuildCategory025 = createGuildIcon("guild-category-025", "GuildCategory025")
export const GuildCategory026 = createGuildIcon("guild-category-026", "GuildCategory026")
export const GuildCategory027 = createGuildIcon("guild-category-027", "GuildCategory027")
export const GuildCategory028 = createGuildIcon("guild-category-028", "GuildCategory028")
export const GuildCategory029 = createGuildIcon("guild-category-029", "GuildCategory029")
export const GuildCategory030 = createGuildIcon("guild-category-030", "GuildCategory030")
export const GuildCategory031 = createGuildIcon("guild-category-031", "GuildCategory031")
export const GuildCategory032 = createGuildIcon("guild-category-032", "GuildCategory032")
export const GuildCategory033 = createGuildIcon("guild-category-033", "GuildCategory033")
export const GuildCategory034 = createGuildIcon("guild-category-034", "GuildCategory034")
export const GuildCategory035 = createGuildIcon("guild-category-035", "GuildCategory035")
export const GuildCategory036 = createGuildIcon("guild-category-036", "GuildCategory036")
export const GuildCategory037 = createGuildIcon("guild-category-037", "GuildCategory037")
export const GuildCategory038 = createGuildIcon("guild-category-038", "GuildCategory038")
export const GuildCategory039 = createGuildIcon("guild-category-039", "GuildCategory039")
export const GuildCategory040 = createGuildIcon("guild-category-040", "GuildCategory040")
export const GuildCategory041 = createGuildIcon("guild-category-041", "GuildCategory041")
export const GuildCategory042 = createGuildIcon("guild-category-042", "GuildCategory042")
export const GuildCategory043 = createGuildIcon("guild-category-043", "GuildCategory043")
export const GuildCategory044 = createGuildIcon("guild-category-044", "GuildCategory044")
export const GuildCategory045 = createGuildIcon("guild-category-045", "GuildCategory045")
export const GuildCategory046 = createGuildIcon("guild-category-046", "GuildCategory046")
export const GuildCategory047 = createGuildIcon("guild-category-047", "GuildCategory047")
export const GuildCategory048 = createGuildIcon("guild-category-048", "GuildCategory048")
export const GuildCategory049 = createGuildIcon("guild-category-049", "GuildCategory049")
export const GuildCategory050 = createGuildIcon("guild-category-050", "GuildCategory050")
export const GuildCategory051 = createGuildIcon("guild-category-051", "GuildCategory051")
export const GuildCategory052 = createGuildIcon("guild-category-052", "GuildCategory052")
export const GuildCategory053 = createGuildIcon("guild-category-053", "GuildCategory053")
export const GuildCategory054 = createGuildIcon("guild-category-054", "GuildCategory054")
export const GuildCategory055 = createGuildIcon("guild-category-055", "GuildCategory055")
export const GuildCategory056 = createGuildIcon("guild-category-056", "GuildCategory056")
export const GuildCategory057 = createGuildIcon("guild-category-057", "GuildCategory057")
export const GuildCategory058 = createGuildIcon("guild-category-058", "GuildCategory058")
export const GuildCategory059 = createGuildIcon("guild-category-059", "GuildCategory059")
export const GuildCategory060 = createGuildIcon("guild-category-060", "GuildCategory060")
export const GuildCategory061 = createGuildIcon("guild-category-061", "GuildCategory061")
export const GuildCategory062 = createGuildIcon("guild-category-062", "GuildCategory062")
export const GuildCategory063 = createGuildIcon("guild-category-063", "GuildCategory063")
export const GuildCategory064 = createGuildIcon("guild-category-064", "GuildCategory064")
export const GuildCategory065 = createGuildIcon("guild-category-065", "GuildCategory065")
export const GuildCategory066 = createGuildIcon("guild-category-066", "GuildCategory066")
export const GuildCategory067 = createGuildIcon("guild-category-067", "GuildCategory067")
export const GuildCategory068 = createGuildIcon("guild-category-068", "GuildCategory068")
export const GuildCategory069 = createGuildIcon("guild-category-069", "GuildCategory069")
export const GuildCategory070 = createGuildIcon("guild-category-070", "GuildCategory070")
export const GuildCategory071 = createGuildIcon("guild-category-071", "GuildCategory071")
export const GuildCategory072 = createGuildIcon("guild-category-072", "GuildCategory072")
export const GuildCategory073 = createGuildIcon("guild-category-073", "GuildCategory073")
export const GuildCategory074 = createGuildIcon("guild-category-074", "GuildCategory074")
export const GuildCategory075 = createGuildIcon("guild-category-075", "GuildCategory075")
export const GuildCategory076 = createGuildIcon("guild-category-076", "GuildCategory076")
export const GuildCategory077 = createGuildIcon("guild-category-077", "GuildCategory077")
export const GuildCategory078 = createGuildIcon("guild-category-078", "GuildCategory078")
export const GuildCategory079 = createGuildIcon("guild-category-079", "GuildCategory079")
export const GuildCategory080 = createGuildIcon("guild-category-080", "GuildCategory080")
export const GuildCategory081 = createGuildIcon("guild-category-081", "GuildCategory081")
export const GuildCategory082 = createGuildIcon("guild-category-082", "GuildCategory082")
export const GuildCategory083 = createGuildIcon("guild-category-083", "GuildCategory083")
export const GuildCategory084 = createGuildIcon("guild-category-084", "GuildCategory084")
export const GuildCategory085 = createGuildIcon("guild-category-085", "GuildCategory085")
export const GuildCategory086 = createGuildIcon("guild-category-086", "GuildCategory086")
export const GuildCategory087 = createGuildIcon("guild-category-087", "GuildCategory087")
export const GuildCategory088 = createGuildIcon("guild-category-088", "GuildCategory088")
export const GuildCategory089 = createGuildIcon("guild-category-089", "GuildCategory089")
export const GuildCategory090 = createGuildIcon("guild-category-090", "GuildCategory090")
export const GuildCategory091 = createGuildIcon("guild-category-091", "GuildCategory091")
export const GuildCategory092 = createGuildIcon("guild-category-092", "GuildCategory092")
export const GuildCategory093 = createGuildIcon("guild-category-093", "GuildCategory093")
export const GuildCategory094 = createGuildIcon("guild-category-094", "GuildCategory094")
export const GuildCategory095 = createGuildIcon("guild-category-095", "GuildCategory095")
export const GuildCategory096 = createGuildIcon("guild-category-096", "GuildCategory096")
export const GuildCategory097 = createGuildIcon("guild-category-097", "GuildCategory097")
export const GuildCategory098 = createGuildIcon("guild-category-098", "GuildCategory098")
export const GuildCategory099 = createGuildIcon("guild-category-099", "GuildCategory099")
export const GuildCategory100 = createGuildIcon("guild-category-100", "GuildCategory100")
export const GuildCategory101 = createGuildIcon("guild-category-101", "GuildCategory101")
export const GuildCategory102 = createGuildIcon("guild-category-102", "GuildCategory102")
export const GuildCategory103 = createGuildIcon("guild-category-103", "GuildCategory103")
export const GuildCategory104 = createGuildIcon("guild-category-104", "GuildCategory104")
export const GuildCategory105 = createGuildIcon("guild-category-105", "GuildCategory105")
export const GuildCategory106 = createGuildIcon("guild-category-106", "GuildCategory106")
export const GuildCategory107 = createGuildIcon("guild-category-107", "GuildCategory107")
export const GuildCategory108 = createGuildIcon("guild-category-108", "GuildCategory108")
export const GuildCategory109 = createGuildIcon("guild-category-109", "GuildCategory109")
export const GuildCategory110 = createGuildIcon("guild-category-110", "GuildCategory110")
export const GuildCategory111 = createGuildIcon("guild-category-111", "GuildCategory111")
export const GuildCategory112 = createGuildIcon("guild-category-112", "GuildCategory112")
export const GuildCategory113 = createGuildIcon("guild-category-113", "GuildCategory113")
export const GuildCategory114 = createGuildIcon("guild-category-114", "GuildCategory114")
export const GuildCategory115 = createGuildIcon("guild-category-115", "GuildCategory115")
export const GuildCategory116 = createGuildIcon("guild-category-116", "GuildCategory116")
export const GuildCategory117 = createGuildIcon("guild-category-117", "GuildCategory117")
export const GuildCategory118 = createGuildIcon("guild-category-118", "GuildCategory118")
export const GuildCategory119 = createGuildIcon("guild-category-119", "GuildCategory119")
export const GuildCategory120 = createGuildIcon("guild-category-120", "GuildCategory120")
export const GuildCategory121 = createGuildIcon("guild-category-121", "GuildCategory121")
export const GuildCategory122 = createGuildIcon("guild-category-122", "GuildCategory122")
export const GuildCategory123 = createGuildIcon("guild-category-123", "GuildCategory123")
export const GuildCategory124 = createGuildIcon("guild-category-124", "GuildCategory124")
export const GuildCategory125 = createGuildIcon("guild-category-125", "GuildCategory125")
export const GuildCategory126 = createGuildIcon("guild-category-126", "GuildCategory126")
export const GuildCategory127 = createGuildIcon("guild-category-127", "GuildCategory127")
export const GuildCategory128 = createGuildIcon("guild-category-128", "GuildCategory128")
export const GuildCategory129 = createGuildIcon("guild-category-129", "GuildCategory129")
export const GuildCategory130 = createGuildIcon("guild-category-130", "GuildCategory130")
export const GuildCategory131 = createGuildIcon("guild-category-131", "GuildCategory131")
export const GuildCategory132 = createGuildIcon("guild-category-132", "GuildCategory132")
export const GuildCategory133 = createGuildIcon("guild-category-133", "GuildCategory133")
export const GuildCategory134 = createGuildIcon("guild-category-134", "GuildCategory134")
export const GuildCategory135 = createGuildIcon("guild-category-135", "GuildCategory135")
export const GuildCategory136 = createGuildIcon("guild-category-136", "GuildCategory136")
export const GuildCategory137 = createGuildIcon("guild-category-137", "GuildCategory137")
export const GuildCategory138 = createGuildIcon("guild-category-138", "GuildCategory138")
export const GuildCategory139 = createGuildIcon("guild-category-139", "GuildCategory139")
export const GuildCategory140 = createGuildIcon("guild-category-140", "GuildCategory140")
export const GuildCategory141 = createGuildIcon("guild-category-141", "GuildCategory141")
export const GuildCategory142 = createGuildIcon("guild-category-142", "GuildCategory142")
export const GuildCategory143 = createGuildIcon("guild-category-143", "GuildCategory143")
export const GuildCategory144 = createGuildIcon("guild-category-144", "GuildCategory144")
export const GuildCategory145 = createGuildIcon("guild-category-145", "GuildCategory145")
export const GuildCategory146 = createGuildIcon("guild-category-146", "GuildCategory146")
export const GuildCategory147 = createGuildIcon("guild-category-147", "GuildCategory147")
export const GuildCategory148 = createGuildIcon("guild-category-148", "GuildCategory148")
export const GuildCategory149 = createGuildIcon("guild-category-149", "GuildCategory149")
export const GuildCategory150 = createGuildIcon("guild-category-150", "GuildCategory150")
export const GuildCategory151 = createGuildIcon("guild-category-151", "GuildCategory151")
export const GuildCategory152 = createGuildIcon("guild-category-152", "GuildCategory152")
export const GuildCategory153 = createGuildIcon("guild-category-153", "GuildCategory153")
export const GuildCategory154 = createGuildIcon("guild-category-154", "GuildCategory154")
export const GuildCategory155 = createGuildIcon("guild-category-155", "GuildCategory155")
export const GuildCategory156 = createGuildIcon("guild-category-156", "GuildCategory156")
export const GuildCategory157 = createGuildIcon("guild-category-157", "GuildCategory157")
export const GuildCategory158 = createGuildIcon("guild-category-158", "GuildCategory158")
export const GuildCategory159 = createGuildIcon("guild-category-159", "GuildCategory159")
export const GuildCategory160 = createGuildIcon("guild-category-160", "GuildCategory160")
export const GuildCategory161 = createGuildIcon("guild-category-161", "GuildCategory161")
export const GuildCategory162 = createGuildIcon("guild-category-162", "GuildCategory162")
export const GuildCategory163 = createGuildIcon("guild-category-163", "GuildCategory163")
export const GuildCategory164 = createGuildIcon("guild-category-164", "GuildCategory164")
export const GuildCategory165 = createGuildIcon("guild-category-165", "GuildCategory165")
export const GuildCategory166 = createGuildIcon("guild-category-166", "GuildCategory166")
export const GuildCategory167 = createGuildIcon("guild-category-167", "GuildCategory167")
export const GuildCategory168 = createGuildIcon("guild-category-168", "GuildCategory168")
export const GuildCategory169 = createGuildIcon("guild-category-169", "GuildCategory169")
export const GuildCategory170 = createGuildIcon("guild-category-170", "GuildCategory170")
export const GuildTooltip171 = createGuildIcon("guild-tooltip-001", "GuildTooltip171")
export const GuildTooltip172 = createGuildIcon("guild-tooltip-002", "GuildTooltip172")
export const GuildTooltip173 = createGuildIcon("guild-tooltip-003", "GuildTooltip173")
export const GuildTooltip174 = createGuildIcon("guild-tooltip-004", "GuildTooltip174")
export const GuildTooltip175 = createGuildIcon("guild-tooltip-005", "GuildTooltip175")
export const GuildTooltip176 = createGuildIcon("guild-tooltip-006", "GuildTooltip176")
export const GuildTooltip177 = createGuildIcon("guild-tooltip-007", "GuildTooltip177")
export const GuildTooltip178 = createGuildIcon("guild-tooltip-008", "GuildTooltip178")
export const GuildTooltip179 = createGuildIcon("guild-tooltip-009", "GuildTooltip179")
export const GuildTooltip180 = createGuildIcon("guild-tooltip-010", "GuildTooltip180")
export const GuildTooltip181 = createGuildIcon("guild-tooltip-011", "GuildTooltip181")
export const GuildTooltip182 = createGuildIcon("guild-tooltip-012", "GuildTooltip182")
export const GuildTooltip183 = createGuildIcon("guild-tooltip-013", "GuildTooltip183")
export const GuildTooltip184 = createGuildIcon("guild-tooltip-014", "GuildTooltip184")
export const GuildTooltip185 = createGuildIcon("guild-tooltip-015", "GuildTooltip185")
export const GuildTooltip186 = createGuildIcon("guild-tooltip-016", "GuildTooltip186")
export const GuildTooltip187 = createGuildIcon("guild-tooltip-017", "GuildTooltip187")
export const GuildTooltip188 = createGuildIcon("guild-tooltip-018", "GuildTooltip188")
export const GuildBoost189 = createGuildIcon("guild-boost-001", "GuildBoost189")
export const GuildBoost190 = createGuildIcon("guild-boost-002", "GuildBoost190")
export const GuildBoost191 = createGuildIcon("guild-boost-003", "GuildBoost191")
export const GuildBoost192 = createGuildIcon("guild-boost-004", "GuildBoost192")
export const GuildBoost193 = createGuildIcon("guild-boost-005", "GuildBoost193")
export const GuildBoost194 = createGuildIcon("guild-boost-006", "GuildBoost194")
export const GuildBoost195 = createGuildIcon("guild-boost-007", "GuildBoost195")
export const GuildBoost196 = createGuildIcon("guild-boost-008", "GuildBoost196")
export const GuildBoost197 = createGuildIcon("guild-boost-009", "GuildBoost197")
export const GuildBoost198 = createGuildIcon("guild-boost-010", "GuildBoost198")
export const GuildBoost199 = createGuildIcon("guild-boost-011", "GuildBoost199")
export const GuildBoost200 = createGuildIcon("guild-boost-012", "GuildBoost200")
export const GuildBoost201 = createGuildIcon("guild-boost-013", "GuildBoost201")
export const GuildBoost202 = createGuildIcon("guild-boost-014", "GuildBoost202")
export const GuildBoost203 = createGuildIcon("guild-boost-015", "GuildBoost203")
export const GuildBoost204 = createGuildIcon("guild-boost-016", "GuildBoost204")
export const GuildBoost205 = createGuildIcon("guild-boost-017", "GuildBoost205")
export const GuildBoost206 = createGuildIcon("guild-boost-018", "GuildBoost206")
export const GuildBoost207 = createGuildIcon("guild-boost-019", "GuildBoost207")
export const GuildBoost208 = createGuildIcon("guild-boost-020", "GuildBoost208")
export const GuildBoost209 = createGuildIcon("guild-boost-021", "GuildBoost209")
export const GuildBoost210 = createGuildIcon("guild-boost-022", "GuildBoost210")
export const GuildEvent211 = createGuildIcon("guild-event-001", "GuildEvent211")
export const GuildEvent212 = createGuildIcon("guild-event-002", "GuildEvent212")
export const GuildEvent213 = createGuildIcon("guild-event-003", "GuildEvent213")
export const GuildEvent214 = createGuildIcon("guild-event-004", "GuildEvent214")
export const GuildEvent215 = createGuildIcon("guild-event-005", "GuildEvent215")
export const GuildEvent216 = createGuildIcon("guild-event-006", "GuildEvent216")
export const GuildEvent217 = createGuildIcon("guild-event-007", "GuildEvent217")
export const GuildEvent218 = createGuildIcon("guild-event-008", "GuildEvent218")
export const GuildEvent219 = createGuildIcon("guild-event-009", "GuildEvent219")
export const GuildEvent220 = createGuildIcon("guild-event-010", "GuildEvent220")
export const GuildEvent221 = createGuildIcon("guild-event-011", "GuildEvent221")
export const GuildAppDirectory222 = createGuildIcon("guild-app-directory-001", "GuildAppDirectory222")
export const GuildAppDirectory223 = createGuildIcon("guild-app-directory-002", "GuildAppDirectory223")
export const GuildAppDirectory224 = createGuildIcon("guild-app-directory-003", "GuildAppDirectory224")
export const GuildAppDirectory225 = createGuildIcon("guild-app-directory-004", "GuildAppDirectory225")
export const GuildAppDirectory226 = createGuildIcon("guild-app-directory-005", "GuildAppDirectory226")
export const GuildAppDirectory227 = createGuildIcon("guild-app-directory-006", "GuildAppDirectory227")
export const GuildAppDirectory228 = createGuildIcon("guild-app-directory-007", "GuildAppDirectory228")
export const GuildAppDirectory229 = createGuildIcon("guild-app-directory-008", "GuildAppDirectory229")
export const GuildAppDirectory230 = createGuildIcon("guild-app-directory-009", "GuildAppDirectory230")
export const GuildAppDirectory231 = createGuildIcon("guild-app-directory-010", "GuildAppDirectory231")
export const GuildAppDirectory232 = createGuildIcon("guild-app-directory-011", "GuildAppDirectory232")
export const GuildAppDirectory233 = createGuildIcon("guild-app-directory-012", "GuildAppDirectory233")
export const GuildAppDirectory234 = createGuildIcon("guild-app-directory-013", "GuildAppDirectory234")
export const GuildAppDirectory235 = createGuildIcon("guild-app-directory-014", "GuildAppDirectory235")
export const GuildAppDirectory236 = createGuildIcon("guild-app-directory-015", "GuildAppDirectory236")
export const GuildAppDirectory237 = createGuildIcon("guild-app-directory-016", "GuildAppDirectory237")
export const GuildAppDirectory238 = createGuildIcon("guild-app-directory-017", "GuildAppDirectory238")
export const GuildAppDirectory239 = createGuildIcon("guild-app-directory-018", "GuildAppDirectory239")
export const GuildAppDirectory240 = createGuildIcon("guild-app-directory-019", "GuildAppDirectory240")
export const GuildAppDirectory241 = createGuildIcon("guild-app-directory-020", "GuildAppDirectory241")
export const GuildAppDirectory242 = createGuildIcon("guild-app-directory-021", "GuildAppDirectory242")
export const GuildAppDirectory243 = createGuildIcon("guild-app-directory-022", "GuildAppDirectory243")
export const GuildAppDirectory244 = createGuildIcon("guild-app-directory-023", "GuildAppDirectory244")
export const GuildAppDirectory245 = createGuildIcon("guild-app-directory-024", "GuildAppDirectory245")
export const GuildAppDirectory246 = createGuildIcon("guild-app-directory-025", "GuildAppDirectory246")
export const GuildAppDirectory247 = createGuildIcon("guild-app-directory-026", "GuildAppDirectory247")
export const GuildAppDirectory248 = createGuildIcon("guild-app-directory-027", "GuildAppDirectory248")
export const GuildServerInsight249 = createGuildIcon("guild-server-insight-001", "GuildServerInsight249")
export const GuildServerInsight250 = createGuildIcon("guild-server-insight-002", "GuildServerInsight250")
export const GuildServerInsight251 = createGuildIcon("guild-server-insight-003", "GuildServerInsight251")
export const GuildServerInsight252 = createGuildIcon("guild-server-insight-004", "GuildServerInsight252")
export const GuildServerInsight253 = createGuildIcon("guild-server-insight-005", "GuildServerInsight253")
export const GuildServerInsight254 = createGuildIcon("guild-server-insight-006", "GuildServerInsight254")
export const GuildServerInsight255 = createGuildIcon("guild-server-insight-007", "GuildServerInsight255")
export const GuildServerInsight256 = createGuildIcon("guild-server-insight-008", "GuildServerInsight256")
export const GuildServerInsight257 = createGuildIcon("guild-server-insight-009", "GuildServerInsight257")
export const GuildServerInsight258 = createGuildIcon("guild-server-insight-010", "GuildServerInsight258")
export const GuildServerInsight259 = createGuildIcon("guild-server-insight-011", "GuildServerInsight259")
export const GuildServerInsight260 = createGuildIcon("guild-server-insight-012", "GuildServerInsight260")
export const GuildServerInsight261 = createGuildIcon("guild-server-insight-013", "GuildServerInsight261")
