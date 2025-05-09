import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import { isTouchDevice } from "../../utils/isTouchDevice";
import portfolioData from "../../data/portfolioData.json";
import pgData from "../../data/pgData.json";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import { useEffect } from "react";
import "./MenuCurtain.scss";

function Nav() {
	const activeLink = "nav__link nav__link--active js-nav__link";
	const inactiveLink = "nav__link js-nav__link";

	function showNavMenu() {
		if (!isTouchDevice()) {
			document
				.querySelector(".menu-curtain")
				.classList.add("menu-curtain--hover");
			document.querySelector(".burger-btn").classList.add("burger-btn--active");
		} else {
			return;
		}
	}

	function hideNavMenu() {
		if (!isTouchDevice()) {
			document
				.querySelector(".menu-curtain")
				.classList.remove("menu-curtain--hover");
			document
				.querySelector(".burger-btn")
				.classList.remove("burger-btn--active");
		} else {
			return;
		}
	}

	// Hide nav menu on page resize (when touch device rotates)
	addEventListener("resize", () => {
		document
			.querySelector(".menu-curtain")
			.classList.remove("menu-curtain--active");
		document
			.querySelector(".burger-btn")
			.classList.remove("burger-btn--active");
	});

	useEffect(() => {
		document.querySelectorAll(".js-nav__link").forEach((link) => {
			link.addEventListener("click", () => {
				if (!isTouchDevice()) {
					return;
				} else {
					document
						.querySelector(".menu-curtain")
						.classList.remove("menu-curtain--active");
					document
						.querySelector(".burger-btn")
						.classList.remove("burger-btn--active");
				}
			});
		});
	}, []);

	return (
		<div
			className="menu-curtain"
			onMouseEnter={showNavMenu}
			onMouseLeave={hideNavMenu}
		>
			<BurgerBtn />
			<div className="menu-curtain__header">
				<h1 className="menu-curtain__header-logo">
					STEPAN DORDIAI <span>Portfolio</span>
				</h1>
			</div>
			<nav className="nav">
				<NavLink
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/"
				>
					<span>HOME</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/about"
				>
					<span>ABOUT</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/skills"
				>
					<span>SKILLS</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/portfolio"
				>
					<span>PORTFOLIO</span>
					<span className="nav__list-qty">{portfolioData.length}</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/contact"
				>
					<span>CONTACT</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/playground"
				>
					<span>PLAYGROUND</span>
					<span className="nav__list-qty">{pgData.length}</span>
				</NavLink>
				<NavLink
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
					to="/games"
				>
					<span className="nav__link-extra-font">GAMES</span>
				</NavLink>
			</nav>
			<div className="menu-curtain__footer">
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					href="https://github.com/stepandordiai"
					target="_blank"
				>
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					href="https://www.linkedin.com/in/stepan-dordiai"
					target="_blank"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
				<a
					onMouseOver={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
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
