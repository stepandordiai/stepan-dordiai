import { Helmet } from "react-helmet";
import portfolioData from "../../data/portfolio-data.json";
import { useParams, NavLink } from "react-router-dom";
import { interactCursor } from "../../utils/cursorState";
import { removeInteractCursor } from "../../utils/cursorState";
import "./ProjectPage.scss";

const ProjectPage = () => {
	const { id } = useParams();

	const project = portfolioData.filter((project) => {
		return project.id === id;
	});

	const { title, titleDesc, liveSite, githubRepo, projectVideo } = project[0];

	return (
		<>
			<Helmet>
				<title>{title} | STEPAN DORDIAI</title>
			</Helmet>
			<div className="project-page">
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
				<div className="project-page__details">
					<div className="project-page__links">
						{liveSite && (
							<a
								onMouseOver={interactCursor}
								onMouseLeave={removeInteractCursor}
								onMouseDown={removeInteractCursor}
								onMouseUp={interactCursor}
								href={liveSite}
								target="_blank"
							>
								Live Site
							</a>
						)}
						{githubRepo && (
							<a
								onMouseOver={interactCursor}
								onMouseLeave={removeInteractCursor}
								onMouseDown={removeInteractCursor}
								onMouseUp={interactCursor}
								href={githubRepo}
								target="_blank"
							>
								GitHub Repo
							</a>
						)}
					</div>
					<div>
						<p className="project-page__title-desc">{titleDesc}</p>
						<p className="project-page__title">{title}</p>
					</div>
				</div>
				{projectVideo && (
					<video
						className={"project-page__video"}
						autoPlay={true}
						loop={true}
						playsInline={true}
						muted={true}
					>
						<source src={projectVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
			</div>
		</>
	);
};

export default ProjectPage;
