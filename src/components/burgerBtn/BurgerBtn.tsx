import { useEffect } from "react";
import { isTouchDevice } from "../../utils/isTouchDevice";
import "./BurgerBtn.scss";

function BurgerBtn() {
	useEffect(() => {
		const burgerBtnContainer = document.querySelector(
			".burger-btn__container"
		) as HTMLDivElement;
		const burgerBtn = document.querySelector(".burger-btn") as HTMLDivElement;
		const menuCurtain = document.querySelector(
			".menu-curtain"
		) as HTMLDivElement;

		function toggleBurgerBtn() {
			if (!isTouchDevice() || !burgerBtn || !menuCurtain) return;

			burgerBtn.classList.toggle("burger-btn--active");
			menuCurtain.classList.toggle("menu-curtain--active");
		}

		burgerBtnContainer.addEventListener("click", toggleBurgerBtn);

		return () => {
			burgerBtnContainer.removeEventListener("click", toggleBurgerBtn);
		};
	}, []);

	return (
		<div className="burger-btn__container">
			<p className="burger-btn__title">MENU</p>
			<div className="burger-btn"></div>
		</div>
	);
}

export default BurgerBtn;
