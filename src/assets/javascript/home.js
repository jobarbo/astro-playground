// generate a random word in the data-paragraph element
export function initParagraph() {
	const paragraph = document.querySelector("[data-paragraph]");
	if (paragraph) {
		paragraph.textContent = generateRandomWord();
	}
}

export function generateRandomWord() {
	const words_array = ["Hello", "World", "Astro", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Svelte", "Tailwind", "HTML", "CSS"];
	return words_array[Math.floor(Math.random() * words_array.length)];
}
