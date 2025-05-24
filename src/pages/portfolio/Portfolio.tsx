import { Helmet } from "react-helmet";
import portfolioData from "../../data/portfolio-data.json";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Portfolio.scss";

function Portfolio() {
	return (
		<>
			<Helmet>
				<title>PORTFOLIO | STEPAN DORDIAI</title>
			</Helmet>
			<div className="portfolio js-portfolio">
				{[...portfolioData].reverse().map((project, index) => {
					return <Project key={project.id} project={project} index={index} />;
				})}
			</div>
			<ScrollBtn className={".js-portfolio"} />
		</>
	);
}

export default Portfolio;
