import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import resumeFile from "/pdf/stepan-dordiai-cv-v8.pdf";
import "./Resume.scss";

const Resume = () => {
	return (
		<a
			onMouseEnter={interactCursor}
			onMouseLeave={removeInteractCursor}
			onMouseDown={removeInteractCursor}
			onMouseUp={interactCursor}
			className="resume__link"
			href={resumeFile}
			target="_blank"
		>
			RESUME
		</a>
	);
};

export default Resume;
