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

function Nav() {
	useEffect(() => {
		// Hide nav menu on window resize (when touch device rotates)
		window.addEventListener("resize", () => setMenuActive(false));
	}, []);

	// burger-btn

	const [menuActive, setMenuActive] = useState(false);

	const toggleBurgerBtn = () => {
		if (!isTouchDevice()) setMenuActive((prev) => !prev);
	};

	return (
		<div
			onMouseEnter={() => setMenuActive(true)}
			onMouseLeave={() => setMenuActive(false)}
			className={`menu-curtain ${menuActive ? "menu-curtain--active" : ""}`}
		>
			<div onClick={toggleBurgerBtn} className="burger-btn__container">
				<span className="burger-btn__title">MENU</span>
				<div
					className={`burger-btn ${menuActive ? "burger-btn--active" : ""}`}
				></div>
			</div>
			<div className="menu-curtain__header">
				<h1 className="menu-curtain__header-logo">
					STEPAN DORDIAI <span>Portfolio</span>
				</h1>
			</div>
			<nav className="nav">
				{linksData.map((link) => {
					return (
						<NavLink
							onClick={() => setMenuActive(false)}
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							// onMouseUp={interactCursor}
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
					// onMouseUp={interactCursor}
					href="https://github.com/stepandordiai"
					target="_blank"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					// onMouseUp={interactCursor}
					href="https://www.linkedin.com/in/stepandordiai"
					target="_blank"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					// onMouseUp={interactCursor}
					href="https://t.me/heeeyooo"
					target="_blank"
				>
					<i className="fa-brands fa-telegram"></i>
				</a>
			</div>
		</div>
	);
}

export default Nav;
