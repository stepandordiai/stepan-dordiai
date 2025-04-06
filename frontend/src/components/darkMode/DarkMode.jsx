import { useLocalStorage } from "../../utils/UseLocalStorage";
import { useEffect, useRef } from "react";
import {
    makeCursorActive,
    makeCursorNormal,
    showText,
} from "../../utils/cursorState";
import Resume from "../resume/Resume";
import "./DarkMode.scss";

function DarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");

    const refBtn = useRef(null);

    useEffect(() => {
        const variables = document.querySelector(":root");

        if (darkMode === "light") {
            document.body.style.backgroundColor = "#fff";
            variables.style.setProperty("--bg-clr", "var(--bg-clr-light)");
            variables.style.setProperty("--txt-clr", "var(--txt-clr-dark)");
            variables.style.setProperty(
                "--semi-tp-05",
                "var(--semi-tp-05-dark)"
            );
            variables.style.setProperty(
                "--semi-tp-10",
                "var(--semi-tp-10-dark)"
            );
            variables.style.setProperty(
                "--semi-tp-25",
                "var(--semi-tp-25-dark)"
            );
            variables.style.setProperty(
                "--semi-tp-50",
                "var(--semi-tp-50-dark)"
            );
            variables.style.setProperty(
                "--bg-semi-tp-50",
                "var(--bg-semi-tp-50-light)"
            );
            refBtn.current.textContent = "DARK";
        } else {
            document.body.style.backgroundColor = "#000";
            variables.style.setProperty("--bg-clr", "var(--bg-clr-dark)");
            variables.style.setProperty("--txt-clr", "var(--txt-clr-light)");
            variables.style.setProperty(
                "--semi-tp-05",
                "var(--semi-tp-05-light)"
            );
            variables.style.setProperty(
                "--semi-tp-10",
                "var(--semi-tp-10-light)"
            );
            variables.style.setProperty(
                "--semi-tp-25",
                "var(--semi-tp-25-light)"
            );
            variables.style.setProperty(
                "--semi-tp-50",
                "var(--semi-tp-50-light)"
            );
            variables.style.setProperty(
                "--bg-semi-tp-50",
                "var(--bg-semi-tp-50-dark)"
            );
            refBtn.current.textContent = "LIGHT";
        }
    }, [darkMode]);

    const changeMode = () => {
        setDarkMode((currentMode) => {
            return currentMode === "dark" ? "light" : "dark";
        });

        // I added setTimeout to change text after a function was completed
        setTimeout(() => {
            document.querySelector(".text p").textContent =
                refBtn.current.textContent;
            showText();
        }, 0);
    };

    return (
        <div className="dark-mode">
            <Resume />
            <button
                ref={refBtn}
                className="dark-mode__btn"
                onClick={changeMode}
                onMouseEnter={() =>
                    makeCursorActive(refBtn.current.textContent)
                }
                onMouseLeave={makeCursorNormal}
            >
                LIGHT
            </button>
        </div>
    );
}

export default DarkMode;
