import { Helmet } from "react-helmet-async";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import getPortfolioData from "../../lib/api";
import ProjectInterface from "../../types/Project";
import "./Portfolio.scss";

async function Portfolio() {
	const portfolio: ProjectInterface[] = await getPortfolioData();
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
