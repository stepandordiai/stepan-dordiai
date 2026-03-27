import { Helmet } from "react-helmet-async";
import { useParams, NavLink } from "react-router-dom";
import { interactCursor } from "../../utils/cursorState";
import { removeInteractCursor } from "../../utils/cursorState";
import Home from "../home/Home";
import ProjectInterface from "../../types/Project";
import { useQuery } from "@tanstack/react-query";
import getPortfolio from "../../lib/api/portfolio";
import "./ProjectPage.scss";

const ProjectPage = () => {
	const { id } = useParams();

	const { data, isLoading, isError } = useQuery<ProjectInterface[]>({
		queryKey: ["portfolio"],
		queryFn: getPortfolio,
	});

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Smth went wrong</p>;

	const project = (data ?? []).find((project) => project.id === id);

	if (!project) {
		// FIXME:
		return <Home />;
		// throw new Error(`Project with id ${id} not found`);
	}

	return (
		<>
			<Helmet>
				<title>{project.name} | STEPAN DORDIAI</title>
			</Helmet>
			<main className="project-page">
				<NavLink
					onMouseEnter={interactCursor}
					onMouseLeave={removeInteractCursor}
					onMouseDown={removeInteractCursor}
					onMouseUp={interactCursor}
					onClick={removeInteractCursor}
					className="project-page__back-btn"
					to="/portfolio"
				>
					Back
				</NavLink>
				<img
					className="project-page__img"
					src={project.img[0]}
					alt={project.name}
				/>
				<p className="project-page__title">{project.name}</p>
				<div>
					<span className="project-page__desc-title">Overview</span>
					<p className="project-page__desc">{project.desc}</p>
				</div>
				<div className="project-page__details">
					<div className="project-page__link-container">
						<div className="work-link__dot"></div>
						<a
							onMouseOver={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							href={project.siteUrl}
							target="_blank"
						>
							Live Site
						</a>
					</div>
				</div>
			</main>
		</>
	);
};

export default ProjectPage;
