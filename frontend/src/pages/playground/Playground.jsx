import { Helmet } from "react-helmet";
// import axios from "axios";
import projects from "./../../data/pgData.json";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Playground.scss";

const Playground = () => {
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     const awaiting = document.createElement("p");
    //     awaiting.classList.add("awaiting");
    //     awaiting.textContent =
    //         "Loading data...(it may take some time (30-60sec) due the inactivity of the server (like 30min), after it loads immediately)";
    //     document.querySelector(".js-pg-section").appendChild(awaiting);
    //     let isError = false;
    //     axios
    //         .get("https://stepan-dordiai-backend.onrender.com")
    //         .then((projects) => setProjects(projects.data))
    //         .catch((error) => {
    //             // TODO: Write custom error
    //             awaiting.textContent = error.message;
    //             awaiting.style.animation = "none";
    //             isError = true;
    //         })
    //         .finally(() => {
    //             if (!isError) {
    //                 awaiting.remove();
    //             } else {
    //                 isError = false;
    //                 return;
    //             }
    //         });
    // }, []);

    AnimateElements(
        ".pg-project",
        "revealPgProject 1s forwards",
        100,
        projects
    );

    return (
        <>
            <section className="pg js-pg">
                <Helmet>
                    <title>PLAYGROUND</title>
                </Helmet>
                {projects
                    // MongoDB shuffle my json objects so i use sort() method to sort objects by id
                    // I use sort method to show pg-project in order from new to old
                    .map(
                        (
                            { title, liveSite, githubRepo, telegramBot },
                            index
                        ) => {
                            return (
                                <div className="pg-project" key={index}>
                                    <p className="pg-project__number">
                                        {index + 1 < 10
                                            ? `00${index + 1}`
                                            : `0${index + 1}`}
                                    </p>
                                    <div className="pg-project__right-side">
                                        <div>
                                            <p className="pg-project__title">
                                                {title}
                                            </p>
                                            <ul className="pg-project__links">
                                                <li>
                                                    <a
                                                        onMouseEnter={
                                                            interactCursor
                                                        }
                                                        onMouseLeave={
                                                            removeInteractCursor
                                                        }
                                                        onMouseDown={
                                                            removeInteractCursor
                                                        }
                                                        onMouseUp={
                                                            interactCursor
                                                        }
                                                        href={liveSite}
                                                        target="_blank"
                                                        title="Live Site"
                                                    >
                                                        Live{" "}
                                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        onMouseEnter={
                                                            interactCursor
                                                        }
                                                        onMouseLeave={
                                                            removeInteractCursor
                                                        }
                                                        onMouseDown={
                                                            removeInteractCursor
                                                        }
                                                        onMouseUp={
                                                            interactCursor
                                                        }
                                                        href={githubRepo}
                                                        target="_blank"
                                                        title="GitHub Repo"
                                                    >
                                                        GitHub{" "}
                                                        <i className="fa-brands fa-github"></i>
                                                    </a>
                                                </li>
                                                {telegramBot && (
                                                    <li>
                                                        <a
                                                            onMouseEnter={
                                                                interactCursor
                                                            }
                                                            onMouseLeave={
                                                                removeInteractCursor
                                                            }
                                                            onMouseDown={
                                                                removeInteractCursor
                                                            }
                                                            onMouseUp={
                                                                interactCursor
                                                            }
                                                            href={telegramBot}
                                                            target="_blank"
                                                            title="Telegram Bot"
                                                        >
                                                            Telegram{" "}
                                                            <i className="fa-brands fa-telegram"></i>
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )
                    .reverse()}
            </section>
            <ScrollBtn className={".js-pg"} />
        </>
    );
};

export default Playground;
