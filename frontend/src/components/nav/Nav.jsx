import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import { isTouchDevice } from "../../utils/isTouchDevice";
import portfolioData from "../../data/portfolioData";
import pgData from "./../../data/pgData.json";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Nav.scss";

function Nav() {
    function showNavMenu() {
        if (!isTouchDevice()) {
            document.querySelector(".nav").classList.add("nav--hover");
            document
                .querySelector(".js-burger-btn")
                .classList.add("burger-btn--active");
        } else {
            return;
        }
    }

    function hideNavMenu() {
        if (!isTouchDevice()) {
            document.querySelector(".nav").classList.remove("nav--hover");
            document
                .querySelector(".js-burger-btn")
                .classList.remove("burger-btn--active");
        } else {
            return;
        }
    }

    const activeLink = "nav__link nav__link--active";
    const inactiveLink = "nav__link";

    // Hide nav menu on page resize (when touch device rotates)
    // addEventListener("resize", () => {
    //     document.querySelector(".nav").classList.remove("nav--active");
    //     document
    //         .querySelector(".burger-btn")
    //         .classList.remove("burger-btn--active");
    // });

    return (
        <nav
            className="nav"
            onMouseOver={showNavMenu}
            onMouseLeave={hideNavMenu}
        >
            <BurgerBtn />
            <div className="nav__header">
                <h1 className="nav__header-logo">STEPAN DORDIAI</h1>
            </div>
            <ul className="nav__list">
                <li>
                    <NavLink
                        onMouseEnter={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/"
                    >
                        <span>HOME</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about"
                    >
                        <span>ABOUT</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/skills"
                    >
                        <span>SKILLS</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/portfolio"
                    >
                        <span>PORTFOLIO</span>
                        <span className="nav__list-qty">
                            {portfolioData.length}
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contact"
                    >
                        <span>CONTACT</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/playground"
                    >
                        <span>PLAYGROUND</span>
                        <span className="nav__list-qty">{pgData.length}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onMouseOver={interactCursor}
                        onMouseLeave={removeInteractCursor}
                        onMouseDown={removeInteractCursor}
                        onMouseUp={interactCursor}
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/games"
                    >
                        <span className="nav__link-extra-font">GAMES</span>
                    </NavLink>
                </li>
            </ul>
            <div className="nav__footer">
                <ul className="nav__footer-list">
                    <li>
                        <a
                            onMouseOver={interactCursor}
                            onMouseLeave={removeInteractCursor}
                            onMouseDown={removeInteractCursor}
                            onMouseUp={interactCursor}
                            href="https://github.com/stepandordiai"
                            target="_blank"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            onMouseOver={interactCursor}
                            onMouseLeave={removeInteractCursor}
                            onMouseDown={removeInteractCursor}
                            onMouseUp={interactCursor}
                            href="https://www.linkedin.com/in/stepan-dordiai"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            onMouseOver={interactCursor}
                            onMouseLeave={removeInteractCursor}
                            onMouseDown={removeInteractCursor}
                            onMouseUp={interactCursor}
                            href="https://t.me/heeeyooo"
                            target="_blank"
                            title="Telegram"
                        >
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
