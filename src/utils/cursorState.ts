const customCursor = document.querySelector(
	"#custom-cursor"
) as HTMLDivElement | null;
const text = document.querySelector(".text p") as HTMLParagraphElement | null;

export function makeCursorActive(title: string) {
	customCursor?.classList.add("cursor--active");
	if (text) {
		text.textContent = title;
	}
	showText();
}

export function makeCursorNormal() {
	customCursor?.classList.remove("cursor--active");
	if (text) {
		text.textContent = "";
	}
}

export function showText() {
	let textHTML = "";
	text?.innerHTML.split("").forEach((char, i) => {
		textHTML += `<span style="transform:rotate(${
			i * 20
		}deg) translateX(-50%)">${char}</span>`;
	});

	if (text) {
		text.innerHTML = textHTML;
	}
	const chars = document.querySelectorAll(
		".text span"
	) as NodeListOf<HTMLSpanElement>;

	chars.forEach((char, index) => {
		setTimeout(() => {
			char.style.animation = "revealChar 0.5s forwards";
		}, 100 * index);
	});
}

export function interactCursor() {
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.add("cursor--interact");
}

export function removeInteractCursor() {
	const customCursor = document.querySelector(
		"#custom-cursor"
	) as HTMLDivElement | null;
	customCursor?.classList.remove("cursor--interact");
}
