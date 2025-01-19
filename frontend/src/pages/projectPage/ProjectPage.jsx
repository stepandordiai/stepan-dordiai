import portfolioData from "../../data/portfolioData";
import { useParams, NavLink } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { id } = useParams();
    const project = portfolioData[id];
    const {
        title,
        titleDesc,
        liveSite,
        githubRepo,
        projectVideo,
        projectImg,
        videoNone,
        imgNone,
        liveSiteNone,
        qrIcon,
    } = project;

    const img = document.createElement("img");

    function showQr() {
        img.src = qrIcon;
        img.classList.add("project-page__qr-img");
        document.querySelector(".project-page__qr").append(img);
    }

    function removeQr() {
        img.remove();
    }

    return (
        <section className="project-page">
            <NavLink className="project-page__back-btn" to="/portfolio">
                Back
            </NavLink>
            <video
                className={`project-page__video ${videoNone}`}
                autoPlay={true}
                loop={true}
                playsInline={true}
            >
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img
                className={`project-page__img ${imgNone}`}
                src={projectImg}
                alt={title}
            />
            <div className="project-page__info">
                <div className="project-page__qr">
                    <span onMouseEnter={showQr} onMouseLeave={removeQr}>
                        QR-Code <i className="fa-solid fa-qrcode"></i>
                    </span>
                </div>
                <div className="project-page__links">
                    <a className={liveSiteNone} href={liveSite} target="_blank">
                        Live Site{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a href={githubRepo} target="_blank">
                        GitHub Repo <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <p className="project-page__title-desc">{titleDesc}</p>
                    <p className="project-page__title">{title}</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
