import { Helmet } from "react-helmet";
import portfolioData from "./../../data/portfolioData.json";
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
				{portfolioData
					.map((project, index) => {
						return (
							<Project
								key={project.id}
								index={index}
								id={project.id}
								title={project.title}
								date={project.date}
								projectImg={project.projectImg}
							/>
						);
					})
					.reverse()}
			</div>
			<ScrollBtn className={".js-portfolio"} />
		</>
	);
}

export default Portfolio;
