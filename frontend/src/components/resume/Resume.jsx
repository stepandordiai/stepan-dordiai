import resume from "../../pdf/stepan-dordiai-cv-v2.2.1.pdf";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Resume.scss";

const Resume = () => {
    return (
        <a
            onMouseEnter={interactCursor}
            onMouseLeave={removeInteractCursor}
            onMouseDown={removeInteractCursor}
            onMouseUp={interactCursor}
            className="resume__link"
            href={resume}
            target="_blank"
        >
            RESUME
        </a>
    );
};

export default Resume;
