import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils/isTouchDevice";
import { useEffect } from "react";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Games.scss";

const Games = () => {
	useEffect(() => {
		// I use useEffect to remove scroll to see the tilt effect on touch devices
		if (!isTouchDevice()) {
			document.querySelector(".games").style.overflowY = "scroll";
		} else {
			document.querySelector(".games").style.overflowY = "hidden";
		}

		document.querySelector(".games").addEventListener("scroll", () => {
			if (document.querySelector(".games").scrollTop >= 100) {
				document.querySelector(".pag1").classList.remove("active");
				document.querySelector(".pag2").classList.add("active");
			} else {
				document.querySelector(".pag1").classList.add("active");
				document.querySelector(".pag2").classList.remove("active");
			}
		});

		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
	}, []);

	function addAnimation() {
		const scrollers = document.querySelectorAll(".scroller");

		scrollers.forEach((scroller) => {
			scroller.setAttribute("data-animated", true);

			const scrollerInner = scroller.querySelector(".scroller__inner");
			const scrollerContent = Array.from(scrollerInner.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute("aria-hidden", true);
				scrollerInner.appendChild(duplicatedItem);
			});
		});
	}

	function scrollPag1() {
		document.querySelector(".games").scrollTop = 0;
	}

	function scrollPag2() {
		document.querySelector(".games").scrollTop = 500;
	}

	//FIXME: className as a property?
	function addTiltEffect(event, className) {
		const rect = document.querySelector(className).getBoundingClientRect();

		const offsetX =
			(!isTouchDevice() ? event.clientX : event.touches[0].pageX) -
			rect.left -
			rect.width / 2;
		const offsetY =
			(!isTouchDevice() ? event.clientY : event.touches[0].pageY) -
			rect.top -
			rect.height / 2;

		const DEG = 15;

		const tiltX = (offsetY / rect.height) * -DEG;
		const tiltY = (offsetX / rect.width) * DEG;

		document
			.querySelector(className)
			.style.setProperty("--tiltX", `${tiltX}deg`);
		document
			.querySelector(className)
			.style.setProperty("--tiltY", `${tiltY}deg`);
	}

	function removeTiltEffect(className) {
		document.querySelector(className).style.setProperty("--tiltX", `0deg`);
		document.querySelector(className).style.setProperty("--tiltY", `0deg`);
	}

	return (
		<>
			<Helmet>
				<title>GAMES | STEPAN DORDIAI</title>
			</Helmet>
			<div className="games">
				<div
					className="game-wrapper"
					onMouseMove={() => addTiltEffect(event, ".js-game-one-container")}
					onMouseLeave={() => removeTiltEffect(".js-game-one-container")}
					onTouchMove={() => addTiltEffect(event, ".js-game-one-container")}
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
					onMouseMove={() => addTiltEffect(event, ".js-game-two-container")}
					onMouseLeave={() => removeTiltEffect(".js-game-two-container")}
					onTouchMove={() => addTiltEffect(event, ".js-game-two-container")}
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
			</div>
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
