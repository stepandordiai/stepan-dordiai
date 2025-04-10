import { isTouchDevice } from "../../utils/isTouchDevice";
import "./BurgerBtn.scss";

function BurgerBtn() {
    function toggleBurgerBtn() {
        if (!isTouchDevice()) {
            return;
        } else {
            document
                .querySelector(".burger-btn")
                .classList.toggle("burger-btn--active");
            document
                .querySelector(".menu-curtain")
                .classList.toggle("menu-curtain--active");
        }
    }

    return (
        <div onClick={toggleBurgerBtn} className="burger-btn__container">
            <p className="burger-btn__title">MENU</p>
            <div className="burger-btn"></div>
        </div>
    );
}

export default BurgerBtn;
