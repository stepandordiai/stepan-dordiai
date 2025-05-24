import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import AnimateElements from "../../utils/AnimateElements";
import "./Skill.scss";

type SkillProps = {
	skill: {
		icon: React.ReactNode;
		name: any;
	};
};

function Skill({ skill }: SkillProps) {
	AnimateElements(".skill-container", "revealSkillContainer 1s forwards");
	return (
		<div
			onMouseEnter={() => makeCursorActive(skill.name)}
			onMouseLeave={makeCursorNormal}
			className="skill-container"
		>
			<div className="skill">{skill.icon}</div>
		</div>
	);
}

export default Skill;
