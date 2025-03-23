import { NavLink } from "react-router-dom";
import BurgerBtn from "../burgerBtn/BurgerBtn";
import { isTouchDevice } from "../../utils/isTouchDevice";
import portfolioData from "../../data/portfolioData";
import pgData from "../../data/pgData.json";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import { useEffect } from "react";
import "./MenuCurtain.scss";

function Nav() {
    function showNavMenu() {
        if (!isTouchDevice()) {
            document
                .querySelector(".menu-curtain")
                .classList.add("menu-curtain--hover");
            document
                .querySelector(".js-burger-btn")
                .classList.add("burger-btn--active");
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
                .querySelector(".js-burger-btn")
                .classList.remove("burger-btn--active");
        } else {
            return;
        }
    }

    // Hide menu curtain on nav link click
    useEffect(() => {
        if (!isTouchDevice()) {
            return;
        } else {
            document.querySelectorAll("js-nav__link").forEach((link) => {
                link.addEventListener("click", () => {
                    refBurger.current.classList.remove("burger-btn--active");
                    document
                        .querySelector(".menu-curtain")
                        .classList.remove("menu-curtain--active");
                });
            });
        }
    }, []);

    const activeLink = "nav__link nav__link--active js-nav__link";
    const inactiveLink = "nav__link js-nav__link";

    // Hide nav menu on page resize (when touch device rotates)
    // addEventListener("resize", () => {
    //     document.querySelector(".nav").classList.remove("nav--active");
    //     document
    //         .querySelector(".burger-btn")
    //         .classList.remove("burger-btn--active");
    // });

    return (
        <div
            className="menu-curtain"
            onMouseOver={showNavMenu}
            onMouseLeave={hideNavMenu}
        >
            <BurgerBtn />
            <div className="menu-curtain__header">
                <h1 className="menu-curtain__header-logo">STEPAN DORDIAI</h1>
            </div>
            <nav className="nav">
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
                    GitHub
                </a>
                <a
                    onMouseOver={interactCursor}
                    onMouseLeave={removeInteractCursor}
                    onMouseDown={removeInteractCursor}
                    onMouseUp={interactCursor}
                    href="https://www.linkedin.com/in/stepan-dordiai"
                    target="_blank"
                >
                    LinkedIn
                </a>
                <a
                    onMouseOver={interactCursor}
                    onMouseLeave={removeInteractCursor}
                    onMouseDown={removeInteractCursor}
                    onMouseUp={interactCursor}
                    href="https://t.me/heeeyooo"
                    target="_blank"
                >
                    Telegram
                </a>
            </div>
        </div>
    );
}

export default Nav;
