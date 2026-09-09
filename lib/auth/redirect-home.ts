function redirectHome(decorateUrl: (url: string) => string) {
	const url = decorateUrl("/")
	window.location.assign(
		url.startsWith("http")
			? url
			: new URL(url, window.location.origin).toString(),
	)
}

export { redirectHome }
