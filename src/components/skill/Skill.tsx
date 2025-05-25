import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import AnimateElements from "../../utils/AnimateElements";
import "./Skill.scss";

type SkillProps = {
	skill: {
		icon: React.ReactNode;
		name: string;
	};
};

function Skill({ skill }: SkillProps) {
	AnimateElements(".skill-container", "revealSkillContainer 1s forwards");
	return (
		<div
			onMouseEnter={() => makeCursorActive("assda")}
			onMouseLeave={makeCursorNormal}
			className="skill-container"
		>
			<div className="skill">{skill.icon}</div>
		</div>
	);
}

export default Skill;
