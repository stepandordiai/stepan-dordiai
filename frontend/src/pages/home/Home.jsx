import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "./Home.scss";

function Home() {
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (
                document.querySelector(".loading").style.display === "initial"
            ) {
                document
                    .querySelector(".loading")
                    .addEventListener("animationend", () => {
                        addAnimation();
                        showText();
                    });
            } else {
                addAnimation();
                showText();
            }
        }
    }, []);

    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");

        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    function showText() {
        const text = document.querySelector(".js-home__title");
        let textHTML = "";
        text.innerHTML.split("").forEach((char) => {
            textHTML += `<span>${char}</span>`;
        });

        text.innerHTML = textHTML;

        document
            .querySelectorAll(".js-home__title span")
            .forEach((char, index) => {
                setTimeout(() => {
                    char.style.animation = "revealChar 1s forwards";
                }, 100 * index);
            });
    }

    return (
        <>
            <Helmet>
                <title>FRONT-END DEVELOPER | STEPAN DORDIAI</title>
            </Helmet>
            <section className="home">
                <div
                    className="scroller"
                    data-speed="slow"
                    data-direction="left"
                >
                    <div className="scroller__inner">
                        <h1 className="home__title js-home__title">
                            STEPAN DORDIAI FRONT-END DEVELOPER
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
