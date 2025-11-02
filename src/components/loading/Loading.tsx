import { useEffect } from "react";
import "./Loading.scss";

function Loading() {
	// FIXME:
	useEffect(() => {
		const loading = document.querySelector(
			".loading"
		) as HTMLParagraphElement | null;

		loading?.addEventListener(
			"animationend",
			() => (loading.style.display = "none")
		);

		return () => {
			loading?.removeEventListener(
				"animationend",
				() => (loading.style.display = "none")
			);
		};
	}, []);

	return (
		// I wrote inline style to check display in order to start animate elements
		<p className="loading" style={{ display: "initial" }}>
			STEPAN DORDIAI <span>Portfolio</span>
		</p>
	);
}

export default Loading;
