import { useEffect } from "react";

// FIXME: Is it okay to use these names (className, animation) for parameters?
function AnimateElements(className, animation, time = 100) {
    const revealElements = () => {
        document.querySelectorAll(className).forEach((element, index) => {
            // FIXME: setTimeout or setInterval?
            setTimeout(() => {
                element.style.animation = animation;
            }, time * index);
        });
    };

    useEffect(() => {
        // I check if preload is active (if it is i wait until it ends (duration 3 sec))
        if (document.querySelector(".loading").style.display === "initial") {
            document
                .querySelector(".loading")
                .addEventListener("animationend", () => {
                    revealElements();
                });
        } else {
            revealElements();
        }
        // I use this dependency to start animation after the data r loaded
    }, []);

    return <></>;
}

export default AnimateElements;
