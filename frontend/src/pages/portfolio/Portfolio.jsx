import { Helmet } from "react-helmet";
import portfolioData from "../../data/portfolioData";
import Project from "../../components/project/Project";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Portfolio.scss";

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>PORTFOLIO | STEPAN DORDIAI</title>
            </Helmet>
            <section className="portfolio js-portfolio">
                {portfolioData
                    .map((project, index) => {
                        return (
                            <Project
                                key={project.id}
                                id={project.id}
                                title={project.title}
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
