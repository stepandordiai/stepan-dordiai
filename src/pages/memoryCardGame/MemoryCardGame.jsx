import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import img1 from "/gameImages/css3.svg";
import img2 from "/gameImages/html5.svg";
import img3 from "/gameImages/figma.svg";
import img4 from "/gameImages/js.svg";
import img5 from "/gameImages/node.svg";
import img6 from "/gameImages/git.svg";
import img7 from "/gameImages/sass.svg";
import img8 from "/gameImages/react.svg";
import "./MemoryCardGame.scss";

const MemoryCardGame = () => {
	const section = useRef(null);

	useEffect(() => {
		lives();
		cardGenerator();
		if (
			(window.innerWidth > 1000 && window.innerHeight < 650) ||
			(window.innerWidth < 1000 && window.innerHeight < 600)
		) {
			document.querySelector(".game-1-section").classList.add("none");
			document.querySelector(".rotate-container").classList.remove("none");
		} else {
			document.querySelector(".game-1-section").classList.remove("none");
			document.querySelector(".rotate-container").classList.add("none");
		}
	}, []);

	let playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];

	const lives = () => {
		const livesCounts = document.querySelector(".js-lives-count");
		livesCounts.textContent = playerLives.join(" ");
	};

	const cardData = [
		{
			imgSrc: img1,
			name: "css",
		},
		{
			imgSrc: img2,
			name: "html",
		},
		{
			imgSrc: img3,
			name: "figma",
		},
		{
			imgSrc: img4,
			name: "js",
		},
		{
			imgSrc: img5,
			name: "node",
		},
		{
			imgSrc: img6,
			name: "git",
		},
		{
			imgSrc: img7,
			name: "sass",
		},
		{
			imgSrc: img8,
			name: "react",
		},
		{
			imgSrc: img1,
			name: "css",
		},
		{
			imgSrc: img2,
			name: "html",
		},
		{
			imgSrc: img3,
			name: "figma",
		},
		{
			imgSrc: img4,
			name: "js",
		},
		{
			imgSrc: img5,
			name: "node",
		},
		{
			imgSrc: img6,
			name: "git",
		},
		{
			imgSrc: img7,
			name: "sass",
		},
		{
			imgSrc: img8,
			name: "react",
		},
	];

	const randomize = () => {
		return cardData.sort(() => Math.random() - 0.5);
	};

	function cardGenerator() {
		cardData.forEach((item) => {
			const topLeftCorner = document.createElement("div");
			const topRightCorner = document.createElement("div");
			const bottomRightCorner = document.createElement("div");
			const bottomLeftCorner = document.createElement("div");
			const card = document.createElement("div");
			const face = document.createElement("img");
			const back = document.createElement("div");

			topLeftCorner.classList = "card-top-left-corner";
			topRightCorner.classList = "card-top-right-corner";
			bottomRightCorner.classList = "card-bottom-right-corner";
			bottomLeftCorner.classList = "card-bottom-left-corner";
			card.classList = "card";
			face.classList = "face";
			back.classList = "back";

			back.appendChild(topLeftCorner);
			back.appendChild(topRightCorner);
			back.appendChild(bottomRightCorner);
			back.appendChild(bottomLeftCorner);

			section.current.appendChild(card);
			card.appendChild(face);
			card.appendChild(back);

			face.src = item.imgSrc;
			card.setAttribute("name", item.name);

			card.addEventListener("click", (event) => {
				card.classList.toggle("toggle-card");
				const clickedCard = event.target;
				clickedCard.classList.toggle("flipped");
				checkCards();
			});
		});
		section.current.style.pointerEvents = "none";
	}

	function playGameOne(text) {
		document.querySelector(".js-game-one__title-result").textContent = text;
		playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
		lives();
		const randomCardData = randomize();
		const faces = document.querySelectorAll(".face");
		const cards = document.querySelectorAll(".card");
		randomCardData.forEach((item, index) => {
			faces[index].src = item.imgSrc;
			cards[index].setAttribute("name", item.name);
		});
		cards.forEach((item) => {
			item.style.pointerEvents = "none";
			item.classList.add("toggle-card");
			setTimeout(() => {
				item.style.pointerEvents = "all";
				item.classList.remove("toggle-card");
			}, 3000);
		});
		document
			.querySelector(".js-inactive-btn")
			.classList.add("game-one__btn--inactive");
		document.querySelector(".js-inactive-btn").disabled = true;
		section.current.style.pointerEvents = "all";
	}

	function stopGameOne(text) {
		document.querySelector(".js-game-one__title-result").textContent = text;
		playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
		lives();
		const cards = document.querySelectorAll(".card");
		cards.forEach((item) => {
			item.style.pointerEvents = "none";
			item.classList.remove("toggle-card");
		});
		document
			.querySelector(".js-inactive-btn")
			.classList.remove("game-one__btn--inactive");
		document.querySelector(".js-inactive-btn").disabled = false;
		section.current.style.pointerEvents = "none";
		document.querySelector(".js-inactive-btn").textContent = "Play";
	}

	function checkCards() {
		const flippedCards = document.querySelectorAll(".flipped");
		const toggleCards = document.querySelectorAll(".toggle-card");
		if (flippedCards.length === 2) {
			if (
				flippedCards[0].getAttribute("name") ===
				flippedCards[1].getAttribute("name")
			) {
				flippedCards.forEach((card) => {
					card.classList.remove("flipped");
					card.style.pointerEvents = "none";
				});
			} else {
				flippedCards.forEach((card) => {
					card.classList.remove("flipped");
					setTimeout(() => {
						card.classList.remove("toggle-card");
					}, 1000);
				});
				playerLives.pop();
				lives();
				if (playerLives.length === 0) {
					gameResult("You lose!");
				}
			}
		}
		if (toggleCards.length === 16) {
			gameResult("You win!");
		}
	}

	function gameResult(text) {
		document.querySelector(".js-game-one__title-result").textContent = text;
		const cards = document.querySelectorAll(".card");
		cards.forEach((item) => {
			item.style.pointerEvents = "none";
		});
		document
			.querySelector(".js-inactive-btn")
			.classList.remove("game-one__btn--inactive");
		document.querySelector(".js-inactive-btn").disabled = false;
		section.current.style.pointerEvents = "none";
		document.querySelector(".js-inactive-btn").textContent = "Play again";
	}

	addEventListener("resize", () => {
		if (
			(window.innerWidth > 1000 && window.innerHeight < 650) ||
			(window.innerWidth < 1000 && window.innerHeight < 600)
		) {
			document.querySelector(".game-1-section").classList.add("none");
			document.querySelector(".rotate-container").classList.remove("none");
		} else {
			document.querySelector(".game-1-section").classList.remove("none");
			document.querySelector(".rotate-container").classList.add("none");
		}
	});
	return (
		<>
			<Helmet>
				<title>MEMORY CARD GAME | STEPAN DORDIAI</title>
			</Helmet>
			<div className="game-1-section">
				<NavLink
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					onClick={removeInteractCursor}
					className="game-one__back-btn"
					to="/games"
				>
					Back
				</NavLink>
				<p className="game-one__title-result js-game-one__title-result">
					MEMORY CARD GAME
				</p>
				<p className="game-one__lives">
					Lives: <span className="js-lives-count"></span>
				</p>
				<div>
					<section className="cards-grid" ref={section}></section>
					<div className="game-one__btn-container">
						<button
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							className="game-one__btn"
							onClick={() => stopGameOne("Memory Card Game")}
						>
							Stop
						</button>
						<button
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							className="game-one__btn js-inactive-btn"
							onClick={() => playGameOne("Memory Card Game")}
						>
							Play
						</button>
					</div>
				</div>
			</div>
			<div className="rotate-container none">
				<p className="rotate-font-img">
					<i className="fa-solid fa-rotate"></i>
				</p>
				<p className="rotate-title">
					Please rotate your device for better experience!
				</p>
			</div>
		</>
	);
};

export default MemoryCardGame;
