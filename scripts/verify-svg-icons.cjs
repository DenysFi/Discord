/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs/promises")
const path = require("node:path")
const sharp = require("sharp")

const projectRoot = path.resolve(__dirname, "..")
const density = 144
const scale = 2

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
]

async function definitionsFor(source) {
	const registry = await fs.readFile(path.join(projectRoot, source.registry), "utf8")
	return [...registry.matchAll(source.matcher)].map(match => ({
		name: match[1],
		x: Number(match[2]),
		y: Number(match[3]),
	}))
}

async function verifySource(source) {
	const definitions = await definitionsFor(source)
	const { data: sourcePixels, info } = await sharp(path.join(projectRoot, source.asset), {
		density,
	})
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true })
	const failures = []

	async function verifyDefinition(definition) {
		const generatedPath = path.join(
			projectRoot,
			"public",
			"discord-icons",
			"individual",
			`${definition.name}.svg`,
		)
		const { data: generatedPixels, info: generatedInfo } = await sharp(generatedPath, {
			density,
		})
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true })

		let differentPixels = 0
		const left = Math.round(definition.x * scale)
		const top = Math.round(definition.y * scale)

		for (let y = 0; y < generatedInfo.height; y += 1) {
			for (let x = 0; x < generatedInfo.width; x += 1) {
				const generatedOffset = (y * generatedInfo.width + x) * 4
				const sourceOffset = ((top + y) * info.width + left + x) * 4
				if (
					generatedPixels[generatedOffset] !== sourcePixels[sourceOffset] ||
					generatedPixels[generatedOffset + 1] !== sourcePixels[sourceOffset + 1] ||
					generatedPixels[generatedOffset + 2] !== sourcePixels[sourceOffset + 2] ||
					generatedPixels[generatedOffset + 3] !== sourcePixels[sourceOffset + 3]
				) {
					differentPixels += 1
				}
			}
		}

		return differentPixels > 8 ? { name: definition.name, differentPixels } : null
	}

	for (let index = 0; index < definitions.length; index += 12) {
		const results = await Promise.all(
			definitions.slice(index, index + 12).map(verifyDefinition),
		)
		failures.push(...results.filter(Boolean))
	}

	return { checked: definitions.length, failures }
}

async function main() {
	let checked = 0
	const failures = []

	for (const source of sources) {
		const result = await verifySource(source)
		checked += result.checked
		failures.push(...result.failures)
	}

	if (failures.length) {
		console.error(JSON.stringify({ checked, failures: failures.slice(0, 20) }, null, 2))
		process.exitCode = 1
		return
	}

	console.log(`Verified ${checked} SVG files against their source pixels.`)
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
