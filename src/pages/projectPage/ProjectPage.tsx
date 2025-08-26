import { Helmet } from "react-helmet-async";
import portfolioData from "../../assets/data/portfolio-data.json";
import { useParams, NavLink } from "react-router-dom";
import { interactCursor } from "../../utils/cursorState";
import { removeInteractCursor } from "../../utils/cursorState";
import "./ProjectPage.scss";

const ProjectPage = () => {
	const { id } = useParams();

	const project = portfolioData.find((project) => project.id == id);

	// TODO:
	if (!project) {
		// Handle the case where no project is found
		throw new Error(`Project with id ${id} not found`);
		// Or return early, or show a message, depending on your use case
	}

	type ProjectType = {
		title: string;
		desc: string;
		titleDesc: string;
		liveSite: string;
		projectVideo?: string;
		projectImg: string;
	};

	const {
		title,
		desc,
		titleDesc,
		liveSite,
		projectVideo,
		projectImg,
	}: ProjectType = project;

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
				{projectVideo ? (
					<video
						className="project-page__video"
						autoPlay={true}
						loop={true}
						playsInline={true}
						muted={true}
					>
						<source src={projectVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				) : (
					<img className="project-page__img" src={projectImg} alt={title} />
				)}
				<div>
					<p className="project-page__title">{title}</p>
					<p className="project-page__title-desc">{titleDesc}</p>
				</div>
				<div>
					<span className="project-page__desc-title">Overview</span>
					<p className="project-page__desc">{desc}</p>
				</div>
				<div className="project-page__details">
					{liveSite && (
						<div className="project-page__link-container">
							<div className="work-link__dot"></div>
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
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
