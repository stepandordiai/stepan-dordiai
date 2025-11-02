import { useLocalStorage } from "../../utils/UseLocalStorage";
import { useEffect, useRef } from "react";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import Resume from "../resume/Resume";
import "./DarkMode.scss";

function DarkMode() {
	// FIXME:
	type ModeThemes = "light" | "dark";

	const [darkMode, setDarkMode] = useLocalStorage(
		"darkMode",
		"light" as ModeThemes
	);

	const refBtn = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		const variables = document.querySelector(":root") as HTMLElement;
		if (refBtn.current) {
			if (darkMode === "light") {
				document.body.style.backgroundColor = "#fff";
				variables.style.setProperty("--bg-clr", "var(--bg-clr-light)");
				variables.style.setProperty("--txt-clr", "var(--txt-clr-dark)");
				variables.style.setProperty("--semi-tp-05", "var(--semi-tp-05-dark)");
				variables.style.setProperty("--semi-tp-10", "var(--semi-tp-10-dark)");
				variables.style.setProperty("--semi-tp-25", "var(--semi-tp-25-dark)");
				variables.style.setProperty("--semi-tp-50", "var(--semi-tp-50-dark)");
				variables.style.setProperty(
					"--bg-semi-tp-50",
					"var(--bg-semi-tp-50-light)"
				);
				refBtn.current.textContent = "DARK";
			} else {
				document.body.style.backgroundColor = "#000";
				variables.style.setProperty("--bg-clr", "var(--bg-clr-dark)");
				variables.style.setProperty("--txt-clr", "var(--txt-clr-light)");
				variables.style.setProperty("--semi-tp-05", "var(--semi-tp-05-light)");
				variables.style.setProperty("--semi-tp-10", "var(--semi-tp-10-light)");
				variables.style.setProperty("--semi-tp-25", "var(--semi-tp-25-light)");
				variables.style.setProperty("--semi-tp-50", "var(--semi-tp-50-light)");
				variables.style.setProperty(
					"--bg-semi-tp-50",
					"var(--bg-semi-tp-50-dark)"
				);
				refBtn.current.textContent = "LIGHT";
			}
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentMode: string) =>
			currentMode === "light" ? "dark" : "light"
		);
	};

	return (
		<div className="dark-mode">
			<Resume />
			<button
				onMouseEnter={interactCursor}
				onMouseLeave={removeInteractCursor}
				onMouseDown={removeInteractCursor}
				onMouseUp={interactCursor}
				ref={refBtn}
				className="dark-mode__btn"
				onClick={toggleDarkMode}
			>
				DARK
			</button>
		</div>
	);
}

export default DarkMode;
