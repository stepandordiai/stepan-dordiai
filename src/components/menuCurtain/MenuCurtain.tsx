import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils/isTouchDevice";
import portfolioData from "../../assets/data/portfolio-data.json";
import pgData from "../../assets/data/pg-data.json";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import { useEffect, useState } from "react";
import "./MenuCurtain.scss";

const linksData = [
	{ id: 1, name: "Home", path: "/" },
	{ id: 2, name: "About", path: "/about" },
	{ id: 3, name: "Skills", path: "/skills" },
	{ id: 4, name: "Portfolio", path: "/portfolio", portfolioQty: true },
	{ id: 5, name: "Contact", path: "/contact" },
	{ id: 6, name: "Playground", path: "/playground", pgQty: true },
	{ id: 7, name: "Games", path: "/games" },
];

function MenuCurtain() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);

	useEffect(() => {
		if (!menuOpen) return;

		const closeMenu = () => {
			setMenuOpen(false);
		};

		// Hide nav menu on window resize (when touch device rotates)
		window.addEventListener("resize", closeMenu);

		return () => window.removeEventListener("resize", closeMenu);
	}, []);

	const toggleMenu = () => {
		if (isTouchDevice()) setMenuOpen((prev) => !prev);
	};

	const handleMenuBtn = (props: boolean): void => {
		if (!isTouchDevice()) {
			setMenuVisible(props);
		}
	};

	return (
		<div
			onMouseEnter={() => handleMenuBtn(true)}
			onMouseLeave={() => handleMenuBtn(false)}
			className={`menu-curtain ${menuVisible ? "menu-curtain--visible" : ""} ${
				menuOpen ? "menu-curtain--active" : ""
			}`.trimEnd()}
		>
			<button onClick={toggleMenu} className="burger-btn__container">
				<span className="burger-btn__title">MENU</span>
				<span
					className={`burger-btn ${
						menuOpen || menuVisible ? "burger-btn--active" : ""
					}`}
				></span>
			</button>
			<div className="menu-curtain__header">
				<h1 className="menu-curtain__header-logo">
					STEPAN DORDIAI <span>Portfolio</span>
				</h1>
			</div>
			<nav className="nav">
				{linksData.map((link) => {
					return (
						<NavLink
							key={link.id}
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							className={({ isActive }) =>
								`nav__link ${isActive ? "nav__link--active" : ""}`
							}
							to={link.path}
						>
							<span>{link.name.toUpperCase()}</span>
							{link.portfolioQty && (
								<span className="nav__list-qty">{portfolioData.length}</span>
							)}
							{link.pgQty && (
								<span className="nav__list-qty">{pgData.length}</span>
							)}
						</NavLink>
					);
				})}
			</nav>
			<div className="menu-curtain__footer">
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					href="https://github.com/stepandordiai"
					target="_blank"
					title="GitHub"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					href="https://www.linkedin.com/in/stepandordiai"
					target="_blank"
					title="LinkedIn"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					href="https://t.me/heeeyooo"
					target="_blank"
					title="Telegram"
				>
					<i className="fa-brands fa-telegram"></i>
				</a>
			</div>
		</div>
	);
}

export default MenuCurtain;
