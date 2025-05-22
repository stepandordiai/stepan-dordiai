import { useEffect } from "react";
import { isTouchDevice } from "../../utils/isTouchDevice";
import "./CustomCursor.scss";

const CustomCursor = () => {
	// i use useeffect to handle the condition once when load page
	useEffect(() => {
		const customCursor = document.querySelector(
			"#custom-cursor"
		) as HTMLDivElement | null;

		if (customCursor) {
			if (!isTouchDevice()) {
				customCursor.style.display = "flex";
			} else {
				customCursor.style.display = "none";
			}
		}

		document.addEventListener("mouseover", () => {
			if (customCursor) {
				if (!isTouchDevice()) {
					customCursor.style.display = "flex";
				} else {
					customCursor.style.display = "none";
				}
			}
		});

		// Hide cursor when mouse goes out of web page area

		document.addEventListener("mouseout", () => {
			if (customCursor) {
				if (!isTouchDevice()) {
					customCursor.style.display = "none";
				} else {
					customCursor.style.display = "none";
				}
			}
		});

		// position for custom cursor
		document.addEventListener("mousemove", (event) => {
			if (customCursor) {
				let mouseX = event.clientX;
				let mouseY = event.clientY;
				customCursor.style.left = mouseX + "px";
				customCursor.style.top = mouseY + "px";
			}
		});
	}, []);

	return (
		<div id="custom-cursor">
			<div className="text">
				<p></p>
			</div>
		</div>
	);
};

export default CustomCursor;
