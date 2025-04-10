// If there is no param, default is empty string
export function makeCursorActive(title, link) {
    document.querySelector("#custom-cursor").classList.add("cursor--active");
    document.querySelector(".text p").textContent = title;
    if (link) {
        document
            .querySelector(".custom-cursor__link")
            .classList.add("custom-cursor__link--active");
    }
    showText();
}

export function makeCursorNormal() {
    document.querySelector("#custom-cursor").classList.remove("cursor--active");
    document.querySelector(".text p").textContent = "";
    document
        .querySelector(".custom-cursor__link")
        .classList.remove("custom-cursor__link--active");
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
