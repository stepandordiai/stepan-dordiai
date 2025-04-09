import { useState, useEffect, useRef } from "react";
import { isTouchDevice } from "../../utils/isTouchDevice";
import "./BurgerBtn.scss";

function BurgerBtn() {
    const [burgerBtn, setBurgerBtn] = useState(false);

    const refBurger = useRef(null);

    useEffect(() => {
        if (burgerBtn) {
            refBurger.current.classList.add("burger-btn--active");
            document
                .querySelector(".menu-curtain")
                .classList.add("menu-curtain--active");
        } else {
            refBurger.current.classList.remove("burger-btn--active");
            document
                .querySelector(".menu-curtain")
                .classList.remove("menu-curtain--active");
        }
    }, [burgerBtn]);

    const toggleBurgerBtn = () => {
        if (!isTouchDevice()) {
            return;
        } else {
            setBurgerBtn(!burgerBtn);
        }
    };

    return (
        <div onClick={toggleBurgerBtn} className="burger-btn__container">
            <p className="burger-btn__title">MENU</p>
            <div ref={refBurger} className="burger-btn js-burger-btn"></div>
        </div>
    );
}

export default BurgerBtn;
