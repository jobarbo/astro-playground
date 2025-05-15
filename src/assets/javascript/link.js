// make it exportable
export function initLinks() {
	const links = document.querySelectorAll("[data-link]");

	links.forEach((link) => {
		const number = randomNumber();
		const span = link.querySelector(".random-number");
		if (span) {
			span.textContent = `[${number}]`;
		}
		link.addEventListener("click", (e) => {
			console.log(link.href);
		});
	});

	return {
		links,
	};
}

export function randomNumber() {
	return Math.floor(Math.random() * 100);
}
