export function makeCursorActive(title: string): void {
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.add("cursor--active");
	const text = document.querySelector(".text p") as HTMLParagraphElement | null;

	if (!text) return;
	text.textContent = title;
	showText();
}

export function makeCursorNormal(): void {
	const text = document.querySelector(".text p") as HTMLParagraphElement | null;
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.remove("cursor--active");
	if (text) {
		text.textContent = "";
	}
}

export function showText(): void {
	const text = document.querySelector(".text p") as HTMLParagraphElement | null;
	let textHTML = "";
	text?.innerHTML.split("").forEach((char, i) => {
		textHTML += `<span style="transform:rotate(${
			i * 20
		}deg) translateX(-50%)">${char}</span>`;
	});

	if (!text) return;
	text.innerHTML = textHTML;
	const chars = document.querySelectorAll(
		".text span"
	) as NodeListOf<HTMLSpanElement>;

	if (!chars) return;

	chars.forEach((char, index) => {
		setTimeout(() => {
			char.style.animation = "revealChar 0.5s forwards";
		}, 100 * index);
	});
}

export function interactCursor(): void {
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.add("cursor--interact");
}

export function removeInteractCursor(): void {
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.remove("cursor--interact");
}
