import AnimateElements from "../../utils/AnimateElements";
import { NavLink } from "react-router-dom";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Project.scss";

type ProjectProps = {
	project: {
		id: string;
		title: string;
		date: string;
		projectImg: string;
	};
	index: number;
};

function Project({ project, index }: ProjectProps) {
	AnimateElements(".project", "revealProject 1s forwards");

	return (
		<div
			onMouseEnter={interactCursor}
			onMouseLeave={removeInteractCursor}
			onMouseDown={removeInteractCursor}
			onMouseUp={interactCursor}
			className="project js-project"
		>
			<NavLink
				onClick={removeInteractCursor}
				className="project__link"
				to={`/project-page/${project.id}`}
			></NavLink>
			<p className="project__number">
				{index + 1 < 10 ? `0${index + 1}` : index + 1}
			</p>
			<div className="project__right-side">
				<div className="project__info-container">
					<p className="project__title">{project.title}</p>
					<p className="project__date">{project.date}</p>
				</div>
				<img
					className="project__img"
					src={project.projectImg}
					alt={project.title}
					loading="lazy"
				/>
			</div>
		</div>
	);
}

export default Project;
