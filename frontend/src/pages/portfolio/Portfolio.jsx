import { Helmet } from "react-helmet";
import portfolioData from "../../data/portfolioData";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Portfolio.scss";

function Portfolio() {
    return (
        <>
            <section className="portfolio js-portfolio">
                <Helmet>
                    <title>PORTFOLIO</title>
                </Helmet>
                {portfolioData
                    .map((project, index) => {
                        return (
                            <Project
                                key={project.id}
                                title={project.title}
                                production={project.production}
                                id={project.id}
                                index={index}
                                projectVideo={project.projectVideo}
                                projectVideoPoster={project.projectVideoPoster}
                            />
                        );
                    })
                    .reverse()}
            </section>
            <ScrollBtn className={".js-portfolio"} />
        </>
    );
}

export default Portfolio;
