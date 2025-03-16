// If there is no param, default is empty string
export function makeCursorActive(props = "") {
    document.querySelector("#custom-cursor").classList.add("cursor--active");
    document.querySelector(".text p").textContent = props;
    showText();
}

export function makeCursorNormal() {
    document.querySelector("#custom-cursor").classList.remove("cursor--active");
    document.querySelector(".text p").textContent = "";
}

export function showText() {
    const text = document.querySelector(".text p");
    let textHTML = "";
    text.innerHTML.split("").forEach((char, i) => {
        textHTML += `<span style="transform:rotate(${
            i * 20
        }deg) translateX(-50%)">${char}</span>`;
    });

    text.innerHTML = textHTML;

    document.querySelectorAll(".text span").forEach((char, index) => {
        setTimeout(() => {
            char.style.animation = "revealChar 0.5s forwards";
        }, 100 * index);
    });
}

export function interactCursor() {
    document.querySelector("#custom-cursor").classList.add("cursor--interact");
}

export function removeInteractCursor() {
    document
        .querySelector("#custom-cursor")
        .classList.remove("cursor--interact");
}
