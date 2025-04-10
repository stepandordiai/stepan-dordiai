import { Helmet } from "react-helmet";
import skillsData from "./../../data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.scss";

function Skills() {
    return (
        <>
            <Helmet>
                <title>SKILLS | STEPAN DORDIAI</title>
            </Helmet>
            <section className="skills js-skills">
                <div className="skills-grid">
                    {skillsData.map((skill) => {
                        return (
                            <Skill
                                key={skill.id}
                                icon={skill.icon}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
            </section>
            <ScrollBtn className={".js-skills"} />
        </>
    );
}

export default Skills;
