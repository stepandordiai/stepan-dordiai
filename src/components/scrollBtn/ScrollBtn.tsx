import { useEffect } from "react";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./ScrollBtn.scss";

type ScrollBtnProps = {
	className: string;
};

const ScrollBtn = ({ className }: ScrollBtnProps) => {
	useEffect(() => {
		const element = document.querySelector(className) as HTMLDivElement | null;

		let scrollUpInterval: number;
		let scrollDownInterval: number;

		function scrollUp() {
			if (!element) return;

			element.scrollTop -= 100;
			scrollUpInterval = setInterval(() => {
				element.scrollTop -= 100;
			}, 200);
		}

		function scrollDown() {
			if (!element) return;

			element.scrollTop += 100;
			scrollDownInterval = setInterval(() => {
				element.scrollTop += 100;
			}, 200);
		}

		function stopScrollingUp() {
			clearInterval(scrollUpInterval);
		}

		function stopScrollingDown() {
			clearInterval(scrollDownInterval);
		}

		const scrollUpBtn = document.querySelector(
			".scroll__up-btn"
		) as HTMLButtonElement | null;
		const scrollDownBtn = document.querySelector(
			".scroll__down-btn"
		) as HTMLButtonElement | null;

		// Scroll up listeners
		scrollUpBtn?.addEventListener("mouseenter", () =>
			makeCursorActive("Scroll up")
		);
		scrollUpBtn?.addEventListener("mouseleave", makeCursorNormal);
		scrollUpBtn?.addEventListener("mousedown", scrollUp);
		scrollUpBtn?.addEventListener("mouseup", stopScrollingUp);

		// Scroll down listeners
		scrollDownBtn?.addEventListener("mouseenter", () =>
			makeCursorActive("Scroll down")
		);
		scrollDownBtn?.addEventListener("mouseleave", makeCursorNormal);
		scrollDownBtn?.addEventListener("mousedown", scrollDown);
		scrollDownBtn?.addEventListener("mouseup", stopScrollingDown);

		return () => {
			// Scroll up listeners
			scrollUpBtn?.removeEventListener("mouseenter", () =>
				makeCursorActive("Scroll up")
			);
			scrollUpBtn?.removeEventListener("mouseleave", makeCursorNormal);
			scrollUpBtn?.removeEventListener("mousedown", scrollUp);
			scrollUpBtn?.removeEventListener("mouseup", stopScrollingUp);

			// Scroll down listeners
			scrollDownBtn?.removeEventListener("mouseenter", () =>
				makeCursorActive("Scroll down")
			);
			scrollDownBtn?.removeEventListener("mouseleave", makeCursorNormal);
			scrollDownBtn?.removeEventListener("mousedown", scrollDown);
			scrollDownBtn?.removeEventListener("mouseup", stopScrollingDown);
		};
	}, []);

	return (
		<>
			<button className="scroll__up-btn">
				<i className="fa-solid fa-arrow-up-long"></i>
			</button>
			<button className="scroll__down-btn">
				<i className="fa-solid fa-arrow-down-long"></i>
			</button>
		</>
	);
};

export default ScrollBtn;
