/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs/promises")
const path = require("node:path")
const { chromium } = require(
	"C:/Users/Lucky/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
)

const projectRoot = path.resolve(__dirname, "..")
const outputDirectory = path.join(projectRoot, "public", "discord-icons", "individual")

const sources = [
	{
		asset: "scripts/sources/user-settings.svg",
		registry: "components/ui/icons/discord-icons.tsx",
		matcher: /icon\("([^"]+)",\s*"[^"]+",\s*"[^"]+",\s*([\d.]+),\s*([\d.]+)\)/g,
	},
	{
		asset: "scripts/sources/profiles-and-messages.svg",
		registry: "components/ui/icons/selection-two-icons.tsx",
		matcher: /tile\("([^"]+)",\s*"[^"]+",\s*"[^"]+",\s*([\d.]+),\s*([\d.]+)\)/g,
	},
	{
		asset: "scripts/sources/Collections/Guild discovery.svg",
		registry: "components/ui/icons/guild-discovery-icons.tsx",
		matcher: /icon\("([^"]+)",\s*"[^"]+",\s*([\d.]+),\s*([\d.]+)\)/g,
	},
	{
		asset: "scripts/sources/Collections/Frame 3.svg",
		registry: "components/ui/icons/friends-icons.tsx",
		matcher: /icon\("([^"]+)",\s*"[^"]+",\s*([\d.]+),\s*([\d.]+)\)/g,
	},
	{
		asset: "scripts/sources/Collections/Guilds channels/Categories.svg",
		componentPrefix: "GuildCategory",
		group: "Guild channels · Categories",
		prefix: "guild-category",
	},
	{
		asset: "scripts/sources/Collections/Guilds/Tooltip.svg",
		componentPrefix: "GuildTooltip",
		group: "Guilds · Tooltip",
		prefix: "guild-tooltip",
	},
	{
		asset: "scripts/sources/Collections/Guilds/Boost page.svg",
		componentPrefix: "GuildBoost",
		group: "Guilds · Boost page",
		prefix: "guild-boost",
	},
	{
		asset: "scripts/sources/Collections/Guilds/Events.svg",
		componentPrefix: "GuildEvent",
		group: "Guilds · Events",
		prefix: "guild-event",
	},
	{
		asset: "scripts/sources/Collections/Guilds/App directory.svg",
		componentPrefix: "GuildAppDirectory",
		group: "Guilds · App directory",
		prefix: "guild-app-directory",
	},
	{
		asset: "scripts/sources/Collections/Guilds/Server insights.svg",
		componentPrefix: "GuildServerInsight",
		group: "Guilds · Server insights",
		prefix: "guild-server-insight",
	},
]

async function readDefinitions(source) {
	if (source.prefix) {
		const svg = await fs.readFile(path.join(projectRoot, source.asset), "utf8")
		const tilePattern = /<rect\b[^>]*\bx="([\d.]+)"[^>]*\by="([\d.]+)"[^>]*\brx="30"[^>]*\bfill="#1A1A1C"[^>]*\/?\s*>/g
		return [...svg.matchAll(tilePattern)].map((match, index) => ({
			name: `${source.prefix}-${String(index + 1).padStart(3, "0")}`,
			label: `${source.group} ${index + 1}`,
			x: Number(match[1]),
			y: Number(match[2]),
		}))
	}

	const registry = await fs.readFile(path.join(projectRoot, source.registry), "utf8")
	return [...registry.matchAll(source.matcher)].map(match => ({
		name: match[1],
		label: match[1],
		x: Number(match[2]),
		y: Number(match[3]),
	}))
}

async function extractSource(page, source, definitions) {
	const svg = await fs.readFile(path.join(projectRoot, source.asset), "utf8")
	await page.setContent(svg)

	const extracted = await page.evaluate(definitionsToExtract => {
		const sourceSvg = document.querySelector("svg")
		if (!sourceSvg) throw new Error("Source SVG was not loaded")

		const selector = "path,rect,circle,ellipse,line,polyline,polygon,image,use,text"
		const sourceLeaves = [...sourceSvg.querySelectorAll(selector)]

		const bounds = sourceLeaves.map(node => {
			if (node.closest("defs")) return null

			try {
				const box = node.getBBox()
				const matrix = node.getCTM()
				if (!matrix) return null

				const points = [
					new DOMPoint(box.x, box.y).matrixTransform(matrix),
					new DOMPoint(box.x + box.width, box.y).matrixTransform(matrix),
					new DOMPoint(box.x, box.y + box.height).matrixTransform(matrix),
					new DOMPoint(box.x + box.width, box.y + box.height).matrixTransform(matrix),
				]
				const xs = points.map(point => point.x)
				const ys = points.map(point => point.y)
				return {
					x: Math.min(...xs),
					y: Math.min(...ys),
					width: Math.max(...xs) - Math.min(...xs),
					height: Math.max(...ys) - Math.min(...ys),
				}
			} catch {
				return null
			}
		})

		return definitionsToExtract.map(definition => {
			const clone = sourceSvg.cloneNode(true)
			const cloneLeaves = [...clone.querySelectorAll(selector)]
			const crop = { x: definition.x, y: definition.y, width: 100, height: 100 }

			cloneLeaves.forEach((node, index) => {
				if (node.closest("defs")) return

				const box = bounds[index]
				const intersects =
					box &&
					box.width <= 140 &&
					box.height <= 140 &&
					box.x < crop.x + crop.width &&
					box.x + box.width > crop.x &&
					box.y < crop.y + crop.height &&
					box.y + box.height > crop.y

				if (!intersects) node.remove()
			})

			const findReferences = markup =>
				[...markup.matchAll(/(?:url\(#|(?:href|xlink:href)=["']#)([^)'"\s]+)/g)].map(
					match => match[1],
				)
			const defs = clone.querySelector("defs")
			if (defs) {
				const required = new Set(findReferences(clone.outerHTML.replace(defs.outerHTML, "")))
				let changed = true

				while (changed) {
					changed = false
					for (const id of [...required]) {
						const definition = [...defs.querySelectorAll("[id]")].find(
							node => node.id === id,
						)
						if (!definition) continue
						for (const dependency of findReferences(definition.outerHTML)) {
							if (!required.has(dependency)) {
								required.add(dependency)
								changed = true
							}
						}
					}
				}

				for (const child of [...defs.children]) {
					const ids = [child, ...child.querySelectorAll("[id]")]
						.map(node => node.id)
						.filter(Boolean)
					if (!ids.some(id => required.has(id))) child.remove()
				}
				if (!defs.children.length) defs.remove()
			}

			const removeEmptyGroups = node => {
				for (const child of [...node.children]) removeEmptyGroups(child)
				if (node.tagName?.toLowerCase() === "g" && !node.children.length) node.remove()
			}
			removeEmptyGroups(clone)

			// Drop the Figma tile plate so icons are transparent / blend with UI.
			for (const node of [...clone.querySelectorAll("rect")]) {
				if (node.closest("defs")) continue
				if (node.hasAttribute("transform")) continue
				const rx = Number(node.getAttribute("rx"))
				const fill = (node.getAttribute("fill") || "").toUpperCase()
				if (rx === 30 && fill === "#1A1A1C") node.remove()
			}

			clone.setAttribute("width", "100")
			clone.setAttribute("height", "100")
			clone.setAttribute("viewBox", `${crop.x} ${crop.y} 100 100`)
			clone.removeAttribute("style")

			return {
				name: definition.name,
				svg: new XMLSerializer()
					.serializeToString(clone)
					.replace(/>\s+</g, "><"),
			}
		})
	}, definitions)

	for (const icon of extracted) {
		await fs.writeFile(path.join(outputDirectory, `${icon.name}.svg`), icon.svg)
	}

	return extracted.length
}

async function writeGuildIconsRegistry(groups) {
	const registryPath = path.join(projectRoot, "components", "ui", "icons", "guild-icons.tsx")
	const definitions = groups.flatMap(({ source, icons }) =>
		icons.map(icon => ({ ...icon, group: source.group, componentPrefix: source.componentPrefix })),
	)
	const declarationLines = definitions.map(
		icon => `\ticon("${icon.name}", "${icon.label}", "${icon.group}", ${icon.x}, ${icon.y}),`,
	)
	const exportLines = definitions.map((icon, index) => {
		const name = `${icon.componentPrefix}${String(index + 1).padStart(3, "0")}`
		return `export const ${name} = createGuildIcon("${icon.name}", "${name}")`
	})

	const registry = `import type { NamedDiscordIcon, NamedDiscordIconProps } from "./discord-icons"\nimport { IconAsset } from "./icon-asset"\n\nconst ICON_DIRECTORY = "/discord-icons/individual"\n\nconst icon = (name: string, label: string, group: string, x: number, y: number) => ({ name, label, group, x, y })\n\nexport const guildIcons = [\n${declarationLines.join("\n")}\n] as const\n\nexport type GuildIconName = (typeof guildIcons)[number]["name"]\nexport type GuildIconProps = NamedDiscordIconProps & { name: GuildIconName }\n\nexport function GuildIcon({ name, label, size = 24, colorMode = "currentColor", role, ref, ...props }: GuildIconProps) {\n\tconst definition = guildIcons.find(candidate => candidate.name === name)\n\tif (!definition) return null\n\n\treturn (\n\t\t<IconAsset\n\t\t\t{...props}\n\t\t\tref={ref}\n\t\t\tasset={\`\${ICON_DIRECTORY}/\${definition.name}.svg\`}\n\t\t\tcolorMode={colorMode}\n\t\t\tlabel={label ?? definition.label}\n\t\t\trole={role ?? "img"}\n\t\t\tsize={size}\n\t\t/>\n\t)\n}\n\nfunction createGuildIcon(name: GuildIconName, displayName: string): NamedDiscordIcon {\n\tfunction Component({ ref, ...props }: NamedDiscordIconProps) {\n\t\treturn <GuildIcon {...props} ref={ref} name={name} />\n\t}\n\n\tComponent.displayName = displayName\n\treturn Component\n}\n\n${exportLines.join("\n")}\n`
	await fs.writeFile(registryPath, registry)
}

async function main() {
	await fs.mkdir(outputDirectory, { recursive: true })
	const browser = await chromium.launch({
		executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
		headless: true,
	})
	const page = await browser.newPage()

	try {
		let total = 0
		const generatedGroups = []
		for (const source of sources) {
			const definitions = await readDefinitions(source)
			if (source.prefix) generatedGroups.push({ source, icons: definitions })
			total += await extractSource(page, source, definitions)
		}
		await writeGuildIconsRegistry(generatedGroups)
		console.log(`Extracted ${total} individual SVG files.`)
	} finally {
		await browser.close()
	}
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
