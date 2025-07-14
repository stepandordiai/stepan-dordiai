import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import { isTouchDevice } from "../../utils/isTouchDevice";
import portfolioData from "../../assets/data/portfolio-data.json";
import pgData from "../../assets/data/pg-data.json";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import { useEffect } from "react";
import "./MenuCurtain.scss";

function Nav() {
	const activeLink = "nav__link nav__link--active js-nav__link";
	const inactiveLink = "nav__link js-nav__link";

	useEffect(() => {
		const menuCurtain = document.querySelector(
			".menu-curtain"
		) as HTMLDivElement | null;
		const burgerBtn = document.querySelector(
			".burger-btn"
		) as HTMLDivElement | null;

		function showNavMenu() {
			if (isTouchDevice() || !menuCurtain || !burgerBtn) return;

			menuCurtain.classList.add("menu-curtain--hover");
			burgerBtn.classList.add("burger-btn--active");
		}

		function hideNavMenu() {
			if (isTouchDevice() || !menuCurtain || !burgerBtn) return;

			menuCurtain?.classList.remove("menu-curtain--hover");
			burgerBtn?.classList.remove("burger-btn--active");
		}

		function hideMenuCurtain() {
			if (!isTouchDevice() || !menuCurtain || !burgerBtn) return;

			menuCurtain?.classList.remove("menu-curtain--active");
			burgerBtn?.classList.remove("burger-btn--active");
		}

		menuCurtain?.addEventListener("mouseenter", showNavMenu);
		menuCurtain?.addEventListener("mouseleave", hideNavMenu);

		const navLinks = document.querySelectorAll(".js-nav__link");

		navLinks.forEach((link) => {
			link.addEventListener("click", hideMenuCurtain);
		});

		// Hide nav menu on window resize (when touch device rotates)
		window.addEventListener("resize", hideMenuCurtain);

		return () => {
			menuCurtain?.removeEventListener("mouseenter", showNavMenu);
			menuCurtain?.removeEventListener("mouseleave", hideNavMenu);

			navLinks.forEach((link) => {
				link.removeEventListener("click", hideMenuCurtain);
			});

			window.removeEventListener("resize", hideMenuCurtain);
		};
	}, []);

	return (
		<div className="menu-curtain">
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
					href="https://www.linkedin.com/in/stepandordiai"
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
