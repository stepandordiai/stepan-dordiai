import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./MemoryCardGame.scss";

const MemoryCardGame = () => {
	const section = useRef<HTMLElement | null>(null);

	useEffect(() => {
		lives();
		cardGenerator();

		function handleRotationBanner(): void {
			const gameSection1 = document.querySelector(
				".game-1-section"
			) as HTMLDivElement | null;
			const rotateContainer = document.querySelector(
				".rotate-container"
			) as HTMLDivElement | null;

			if (
				(window.innerWidth > 1000 && window.innerHeight < 650) ||
				(window.innerWidth < 1000 && window.innerHeight < 600)
			) {
				gameSection1?.classList.add("none");
				rotateContainer?.classList.remove("none");
			} else {
				gameSection1?.classList.remove("none");
				rotateContainer?.classList.add("none");
			}
		}

		handleRotationBanner();

		window.addEventListener("resize", handleRotationBanner);

		return () => {
			window.removeEventListener("resize", handleRotationBanner);
		};
	}, []);

	let playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];

	const lives = () => {
		const livesCounts = document.querySelector(
			".js-lives-count"
		) as HTMLSpanElement | null;
		if (!livesCounts) return;
		livesCounts.textContent = playerLives.join(" ");
	};

	interface CardData {
		imgSrc: string;
		name: string;
	}

	const cardData: CardData[] = [
		{
			imgSrc: "fa-brands fa-sass",
			name: "sass",
		},
		{
			imgSrc: "fa-brands fa-node",
			name: "node",
		},
		{
			imgSrc: "fa-brands fa-github",
			name: "github",
		},
		{
			imgSrc: "fa-brands fa-square-js",
			name: "js",
		},
		{
			imgSrc: "fa-brands fa-css3-alt",
			name: "css",
		},
		{
			imgSrc: "fa-brands fa-html5",
			name: "html",
		},
		{
			imgSrc: "fa-brands fa-python",
			name: "python",
		},
		{
			imgSrc: "fa-brands fa-react",
			name: "react",
		},
		{
			imgSrc: "fa-brands fa-sass",
			name: "sass",
		},
		{
			imgSrc: "fa-brands fa-node",
			name: "node",
		},
		{
			imgSrc: "fa-brands fa-github",
			name: "github",
		},
		{
			imgSrc: "fa-brands fa-square-js",
			name: "js",
		},
		{
			imgSrc: "fa-brands fa-css3-alt",
			name: "css",
		},
		{
			imgSrc: "fa-brands fa-html5",
			name: "html",
		},
		{
			imgSrc: "fa-brands fa-python",
			name: "python",
		},
		{
			imgSrc: "fa-brands fa-react",
			name: "react",
		},
	];

	const randomize = () => {
		return cardData.sort(() => Math.random() - 0.5);
	};

	function cardGenerator(): void {
		cardData.forEach((item) => {
			const card = document.createElement("div");
			const face = document.createElement("div");
			const back = document.createElement("div");
			const icon = document.createElement("i");

			card.classList = "card";
			face.classList = "face";
			back.classList = "back";
			icon.classList = "icon";

			section.current?.appendChild(card);
			card.appendChild(face);
			card.appendChild(back);
			face.appendChild(icon);

			// face.src = item.imgSrc;
			// icon.className = item.imgSrc;
			card.setAttribute("name", item.name);

			card.addEventListener("click", (event) => {
				card.classList.toggle("toggle-card");
				const clickedCard = event.target as HTMLElement | null;
				clickedCard?.classList.toggle("flipped");
				checkCards();
			});
		});

		if (section.current) {
			section.current.style.pointerEvents = "none";
		}
	}

	function playGameOne(text: string): void {
		const title = document.querySelector(
			".js-game-one__title-result"
		) as HTMLElement | null;
		if (!title) return;
		title.textContent = text;
		playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
		lives();
		const randomCardData = randomize();

		const icons = document.querySelectorAll(".icon") as NodeListOf<HTMLElement>;
		const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

		randomCardData.forEach((item, index) => {
			if (!icons || !cards) return;
			icons[index].className = item.imgSrc;
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

		const inactiveBtn = document.querySelector(
			".js-inactive-btn"
		) as HTMLButtonElement | null;

		if (!inactiveBtn || !section.current) return;
		inactiveBtn.classList.add("game-one__btn--inactive");
		inactiveBtn.disabled = true;
		section.current.style.pointerEvents = "all";
	}

	function stopGameOne(text: string): void {
		const title = document.querySelector(
			".js-game-one__title-result"
		) as HTMLElement | null;
		if (!title) return;
		title.textContent = text;
		playerLives = ["❤", "❤", "❤", "❤", "❤", "❤"];
		lives();
		const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

		cards.forEach((item) => {
			item.style.pointerEvents = "none";
			item.classList.remove("toggle-card");
		});
		const inactiveBtn = document.querySelector(
			".js-inactive-btn"
		) as HTMLButtonElement | null;
		if (!inactiveBtn || !section.current) return;
		inactiveBtn.classList.remove("game-one__btn--inactive");
		inactiveBtn.disabled = false;
		section.current.style.pointerEvents = "none";
		inactiveBtn.textContent = "Play";
	}

	function checkCards(): void {
		const flippedCards = document.querySelectorAll(
			".flipped"
		) as NodeListOf<HTMLElement>;
		const toggleCards = document.querySelectorAll(
			".toggle-card"
		) as NodeListOf<HTMLElement>;

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

	function gameResult(text: string): void {
		const title = document.querySelector(
			".js-game-one__title-result"
		) as HTMLElement | null;
		if (!title) return;
		title.textContent = text;
		const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

		cards.forEach((item) => {
			item.style.pointerEvents = "none";
		});
		const inactiveBtn = document.querySelector(
			".js-inactive-btn"
		) as HTMLButtonElement | null;
		if (!inactiveBtn || !section.current) return;
		inactiveBtn.classList.remove("game-one__btn--inactive");
		inactiveBtn.disabled = false;
		section.current.style.pointerEvents = "none";
		inactiveBtn.textContent = "Play again";
	}

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
