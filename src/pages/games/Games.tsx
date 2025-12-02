import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils/isTouchDevice";
import { useEffect } from "react";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Games.scss";

const Games = () => {
	// FIXME:
	useEffect(() => {
		const games = document.querySelector(".games") as HTMLDivElement | null;

		// I use useEffect to remove scroll to see the tilt effect on touch devices
		if (games) {
			if (!isTouchDevice()) {
				games.style.overflowY = "scroll";
			} else {
				games.style.overflowY = "hidden";
			}
		}

		games?.addEventListener("scroll", () => {
			const pag1 = document.querySelector(".pag1");
			const pag2 = document.querySelector(".pag2");

			if (games.scrollTop >= 100) {
				pag1?.classList.remove("active");
				pag2?.classList.add("active");
			} else {
				pag1?.classList.add("active");
				pag2?.classList.remove("active");
			}
		});

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	}, []);

	function addAnimation(): void {
		const scrollers = document.querySelectorAll(".scroller");

		scrollers.forEach((scroller) => {
			scroller.setAttribute("data-animated", "true");

			const scrollerInner = scroller.querySelector(
				".scroller__inner"
			) as HTMLDivElement | null;

			if (!scrollerInner) return;

			const scrollerContent = Array.from(scrollerInner.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true) as HTMLElement;
				duplicatedItem.setAttribute("aria-hidden", "true");
				scrollerInner?.appendChild(duplicatedItem);
			});
		});
	}

	function scrollPag1(): void {
		const games = document.querySelector(".games") as HTMLDivElement | null;

		if (!games) return;
		games.scrollTop = 0;
	}

	function scrollPag2(): void {
		const games = document.querySelector(".games") as HTMLDivElement | null;

		if (!games) return;
		games.scrollTop = 500;
	}

	function addTiltEffect(
		event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
		className: string
	): void {
		const element = document.querySelector(className) as HTMLDivElement | null;

		if (!element) return;

		const rect = element.getBoundingClientRect();

		const nativeEvent = event.nativeEvent;
		const isTouch = "touches" in nativeEvent;

		const offsetX =
			(isTouch
				? (nativeEvent as TouchEvent).touches[0].pageX
				: (nativeEvent as MouseEvent).clientX) -
			rect.left -
			rect.width / 2;
		const offsetY =
			(isTouch
				? (nativeEvent as TouchEvent).touches[0].pageY
				: (nativeEvent as MouseEvent).clientY) -
			rect.top -
			rect.height / 2;

		const DEG = 15;

		const tiltX = (offsetY / rect.height) * -DEG;
		const tiltY = (offsetX / rect.width) * DEG;

		element.style.setProperty("--tiltX", `${tiltX}deg`);
		element.style.setProperty("--tiltY", `${tiltY}deg`);
	}

	function removeTiltEffect(className: string): void {
		const element = document.querySelector(className) as HTMLDivElement | null;
		if (element) {
			element.style.setProperty("--tiltX", `0deg`);
			element.style.setProperty("--tiltY", `0deg`);
		}
	}

	return (
		<>
			<Helmet>
				<title>GAMES | STEPAN DORDIAI</title>
			</Helmet>
			<main className="games">
				<div
					className="game-wrapper"
					onMouseMove={(e) => addTiltEffect(e, ".js-game-one-container")}
					onMouseLeave={() => removeTiltEffect(".js-game-one-container")}
					onTouchMove={(e) => addTiltEffect(e, ".js-game-one-container")}
					onTouchEnd={() => removeTiltEffect(".js-game-one-container")}
				>
					<div className="game-container js-game-one-container">
						<div className="game-container__header">
							<p className="game-container__number">1</p>
							<div className="scroller" data-speed="fast" data-direction="left">
								<div className="scroller__inner">
									<p className="game-container__title">Memory Card Game</p>
								</div>
							</div>
						</div>
						<NavLink
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							onClick={removeInteractCursor}
							className="game-container__start-btn"
							to="/memory-card-game"
						>
							Start
						</NavLink>
					</div>
				</div>
				<div
					className="game-wrapper"
					onMouseMove={(e) => addTiltEffect(e, ".js-game-two-container")}
					onMouseLeave={() => removeTiltEffect(".js-game-two-container")}
					onTouchMove={(e) => addTiltEffect(e, ".js-game-two-container")}
					onTouchEnd={() => removeTiltEffect(".js-game-two-container")}
				>
					<div className="game-container js-game-two-container">
						<div className="game-container__header">
							<p className="game-container__number">2</p>
							<div className="scroller" data-speed="fast" data-direction="left">
								<div className="scroller__inner">
									<p className="game-container__title">Coming soon</p>
								</div>
							</div>
						</div>
						<button className="game-container__start-btn">Start</button>
					</div>
				</div>
			</main>
			<div className="games-section__pagination">
				<span
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					onClick={scrollPag1}
					className="pag1 active"
				></span>
				<span
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					onClick={scrollPag2}
					className="pag2"
				></span>
			</div>
		</>
	);
};

export default Games;
