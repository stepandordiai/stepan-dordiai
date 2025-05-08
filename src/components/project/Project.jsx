import AnimateElements from "../../utils/AnimateElements";
import { NavLink } from "react-router-dom";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Project.scss";

function Project({ id, title, date, index, projectImg }) {
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
				to={`/project-page/${id}`}
			></NavLink>
			<p className="project__number">
				{index + 1 < 10 ? `0${index + 1}` : index + 1}
			</p>
			<div className="project__right-side">
				<div className="project__info-container">
					<p className="project__title">{title}</p>
					<p className="project__date">{date}</p>
				</div>
				<img
					className="project__img"
					src={projectImg}
					alt={title}
					loading="lazy"
				/>
			</div>
		</div>
	);
}

export default Project;
