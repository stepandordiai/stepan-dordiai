import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import "./ScrollBtn.scss";

const ScrollBtn = ({ className }) => {
    let scrollUpInterval;

    function scrollUp() {
        document.querySelector(className).scrollTop -= 100;

        scrollUpInterval = setInterval(() => {
            document.querySelector(className).scrollTop -= 100;
        }, 200);
    }

    let scrollDownInterval;

    function scrollDown() {
        document.querySelector(className).scrollTop += 100;
        scrollDownInterval = setInterval(() => {
            document.querySelector(className).scrollTop += 100;
        }, 200);
    }

    function stopScrollingUp() {
        clearInterval(scrollUpInterval);
    }

    function stopScrollingDown() {
        clearInterval(scrollDownInterval);
    }

    return (
        <>
            <button
                onMouseEnter={() => makeCursorActive("Scroll up")}
                onMouseLeave={makeCursorNormal}
                onMouseDown={scrollUp}
                onMouseUp={stopScrollingUp}
                className="scroll__up-btn"
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </button>
            <button
                onMouseEnter={() => makeCursorActive("Scroll down")}
                onMouseLeave={makeCursorNormal}
                onMouseDown={scrollDown}
                onMouseUp={stopScrollingDown}
                className="scroll__down-btn"
            >
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
        </>
    );
};

export default ScrollBtn;
