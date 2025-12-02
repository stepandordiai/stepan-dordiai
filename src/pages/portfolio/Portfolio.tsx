import { Helmet } from "react-helmet-async";
import portfolioData from "../../assets/data/portfolio-data.json";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Portfolio.scss";

function Portfolio() {
	return (
		<>
			<Helmet>
				<title>PORTFOLIO | STEPAN DORDIAI</title>
			</Helmet>
			<main className="portfolio js-portfolio">
				{[...portfolioData].reverse().map((project, index) => {
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
