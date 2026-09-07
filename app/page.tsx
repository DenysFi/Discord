import {
	GitHub,
	SelectionTwoIcon,
	discordIcons,
	selectionTwoIconGroups,
	selectionTwoIcons,
} from "@/components/ui/icons"

export default function Home() {
	return (
		<main className="icon-catalog">
			<header className="icon-catalog__header">
				<p className="icon-catalog__eyebrow">Discord UI library</p>
				<h1>Icon catalog</h1>
				<p>
					{discordIcons.length + selectionTwoIcons.length} vector assets
					imported from the supplied Figma exports.
				</p>
			</header>

			<GitHub width={32} height={32} />

			{selectionTwoIconGroups.map(group => (
				<section className="icon-group" key={group}>
					<div className="icon-group__heading">
						<h2>{group}</h2>
						<span>
							{selectionTwoIcons.filter(icon => icon.group === group).length}
						</span>
					</div>

					<ul className="icon-grid">
						{selectionTwoIcons
							.filter(icon => icon.group === group)
							.map(icon => (
								<li className="icon-card" key={icon.name}>
									<SelectionTwoIcon name={icon.name} size={64} />
									<code>{icon.name}</code>
								</li>
							))}
					</ul>
				</section>
			))}
		</main>
	)
}
