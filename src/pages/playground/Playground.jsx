import { Helmet } from "react-helmet";
// import axios from "axios";
import pgData from "./../../data/pgData.json";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
// import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
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

    AnimateElements(".pg-project", "revealPgProject 1s forwards");

    return (
        <>
            <Helmet>
                <title>PLAYGROUND | STEPAN DORDIAI</title>
            </Helmet>
            <section className="pg js-pg">
                {pgData
                    .map(({ title, liveSite }, index) => {
                        return (
                            <a
                                onMouseEnter={() =>
                                    makeCursorActive(title, liveSite)
                                }
                                onMouseLeave={makeCursorNormal}
                                className="pg-project"
                                href={liveSite}
                                target="_blank"
                                key={index}
                            >
                                <p className="pg-project__number">
                                    {index + 1 < 10
                                        ? `00${index + 1}`
                                        : `0${index + 1}`}
                                </p>
                                <p className="pg-project__title">{title}</p>
                            </a>
                        );
                    })
                    .reverse()}
            </section>
            <ScrollBtn className={".js-pg"} />
        </>
    );
};

export default Playground;
