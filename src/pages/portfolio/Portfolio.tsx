import { Helmet } from "react-helmet-async";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import ProjectInterface from "../../types/Project";
import { useEffect, useState } from "react";
import "./Portfolio.scss";

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_API_KEY: string;
}

// TODO: learn this
declare global {
	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}

function Portfolio() {
	const [portfolio, setPortfolio] = useState<ProjectInterface[]>([]);

	useEffect(() => {
		async function getPortfolioData() {
			const res = await fetch(import.meta.env.VITE_API_URL, {
				headers: {
					"X-SILO-KEY": import.meta.env.VITE_API_KEY,
					"Content-Type": "application/json",
				},
			});

			if (!res.ok) throw new Error("Network res was not ok");

			const portfolioData = await res.json();
			setPortfolio(portfolioData);
		}

		// TODO: learn this
		getPortfolioData().catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Helmet>
				<title>PORTFOLIO | STEPAN DORDIAI</title>
			</Helmet>
			<main className="portfolio js-portfolio">
				{portfolio
					.filter((project) => project.isFeatured)
					.map((project, index) => {
						return <Project key={project.id} project={project} index={index} />;
					})}
				<a
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					className="portfolio__link project"
					href="https://heeeyooo.studio/en/work"
					target="_blank"
				>
					More projects
				</a>
			</main>
			<ScrollBtn className=".js-portfolio" />
		</>
	);
}

export default Portfolio;
