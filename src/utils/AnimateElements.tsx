import { useEffect } from "react";

// FIXME: Is it okay to use these names (className, animation) for parameters?
function AnimateElements(
	className: string,
	animation: string,
	time: number = 100
) {
	const revealElements = () => {
		const elements = document.querySelectorAll(
			className
		) as NodeListOf<HTMLElement> | null;

		elements?.forEach((element, index) => {
			// FIXME: setTimeout or setInterval?
			setTimeout(() => {
				element.style.animation = animation;
			}, time * index);
		});
	};

	useEffect(() => {
		const loading = document.querySelector(".loading") as HTMLDivElement | null;

		// I check if preload is active (if it is i wait until it ends (duration 3 sec))
		if (!loading) return;
		if (loading.style.display === "initial") {
			loading.addEventListener("animationend", () => {
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
