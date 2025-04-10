import { makeCursorActive, makeCursorNormal } from "../../utils/cursorState";
import AnimateElements from "../../utils/AnimateElements";
import "./Skill.scss";

function Skill({ icon, name }) {
    AnimateElements(".skill-container", "revealSkillContainer 1s forwards");
    return (
        <div
            onMouseEnter={() => makeCursorActive(name)}
            onMouseLeave={makeCursorNormal}
            className="skill-container"
        >
            {icon.map((element, index) => {
                return (
                    <div className="skill" key={index}>
                        {element}
                    </div>
                );
            })}
        </div>
    );
}

export default Skill;
