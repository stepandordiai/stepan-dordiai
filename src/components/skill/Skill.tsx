import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import AnimateElements from "../../utils/AnimateElements";
import "./Skill.scss";

type SkillProps = {
	skill: {
		icon: string;
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
			<img src={skill.icon} alt={skill.name + "logo"} />
		</div>
	);
}

export default Skill;
