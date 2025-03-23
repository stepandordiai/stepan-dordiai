import AnimateElements from "../../utils/AnimateElements";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Project.scss";

function Project({
    id,
    title,
    production,
    index,
    projectVideo,
    projectVideoPoster,
}) {
    AnimateElements(".project", "revealProject 1s forwards");

    useEffect(() => {
        const projectVideos = document.querySelectorAll(".js-project__video");

        document.querySelectorAll(".js-project").forEach((project, index) => {
            // I load videos in order to show them on mobile devices
            projectVideos[index].load();

            // Mouse listener
            project.addEventListener("mouseenter", () => {
                projectVideos[index].play();
            });

            project.addEventListener("mouseleave", () => {
                projectVideos[index].pause();
                projectVideos[index].currentTime = 0;
            });

            // Touch listener
            project.addEventListener("touchstart", () => {
                projectVideos[index].play();
            });
        });
    }, []);

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
                    {production && (
                        <p className="project__production">{production}</p>
                    )}
                </div>
                <video
                    className="project__video js-project__video"
                    loop
                    muted
                    poster={projectVideoPoster}
                    playsInline
                >
                    <source src={projectVideo} type="video/mp4" />
                    Your browser does not support the video tag. Please try
                    viewing this page in a modern browser.
                </video>
            </div>
        </div>
    );
}

export default Project;
