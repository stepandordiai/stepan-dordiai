import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import { NavLink } from "react-router-dom";
import "./Home.scss";

function Home() {
	function addAnimation() {
		const scroller = document.querySelector(
			".scroller"
		) as HTMLDivElement | null;

		// setAttribute expects both arguments to be strings
		scroller?.setAttribute("data-animated", "true");

		const scrollerInner = scroller?.querySelector(
			".scroller__inner"
		) as HTMLDivElement | null;
		const scrollerContent = scrollerInner
			? Array.from(scrollerInner?.children)
			: [];

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true) as HTMLElement;
			let textHTML = "";
			duplicatedItem.innerHTML.split("").forEach((char: string) => {
				textHTML += `<span>${char}</span>`;
			});

			duplicatedItem.innerHTML = textHTML;
			duplicatedItem.setAttribute("aria-hidden", "true");
			scrollerInner?.appendChild(duplicatedItem);
		});
	}

	function showText() {
		const text = document.querySelector(
			".js-home__title"
		) as HTMLElement | null;

		if (text) {
			let textHTML = "";
			text.innerHTML.split("").forEach((char) => {
				textHTML += `<span>${char}</span>`;
			});

			text.innerHTML = textHTML;
		}

		// Add opacity animation for each char
		document
			.querySelectorAll<HTMLElement>(".js-home__title span")
			.forEach((char, index) => {
				setTimeout(() => {
					char.style.animation = "revealChar 1s forwards";
				}, 100 * index);
			});
	}

	useEffect(() => {
		const loading = document.querySelector(
			".loading"
		) as HTMLParagraphElement | null;

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			if (loading?.style.display === "initial") {
				loading.addEventListener("animationend", () => {
					addAnimation();
					showText();
				});
			} else {
				addAnimation();
				showText();
			}
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>FRONT-END DEVELOPER | STEPAN DORDIAI</title>
			</Helmet>
			<div className="home">
				<NavLink
					to={"/contact"}
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className="home__work-link"
				>
					<div className="work-link__dot"></div>
					<span>Available for work</span>
				</NavLink>
				<div
					className="home__scroller scroller"
					data-speed="slow"
					data-direction="left"
				>
					<div className="scroller__inner">
						<h1 className="home__title js-home__title">
							STEPAN DORDIAI FRONT-END DEVELOPER
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
