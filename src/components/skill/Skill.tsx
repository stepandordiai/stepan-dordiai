import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import AnimateElements from "../../utils/AnimateElements";
import "./Skill.scss";

type SkillProps = {
	skill: {
		name: string;
	};
};

function Skill({ skill }: SkillProps) {
	AnimateElements(".skill", "revealSkill 1s forwards");
	return (
		<div
			onMouseEnter={() => makeCursorActive(skill.name)}
			onMouseLeave={makeCursorNormal}
			className="skill"
		>
			<span>{skill.name}</span>
		</div>
	);
}

export default Skill;
