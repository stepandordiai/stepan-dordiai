import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Project.scss";

function Project({ id, title, index, projectImg }) {
    AnimateElements(".project", "revealProject 1s forwards");

    return (
        <div
            className="project js-project"
            onMouseEnter={() => makeCursorActive(title)}
            onMouseLeave={makeCursorNormal}
        >
            <NavLink
                onClick={makeCursorNormal}
                className="project__link"
                to={`/project-page/${id}`}
            ></NavLink>
            <p className="project__number">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </p>
            <div className="right-side">
                <div>
                    <p className="project__title">{title}</p>
                </div>
                <img className="project__img" src={projectImg} alt={title} />
            </div>
        </div>
    );
}

export default Project;
