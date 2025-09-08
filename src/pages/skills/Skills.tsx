import { Helmet } from "react-helmet-async";
import skillsData from "../../assets/data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import React from "react";
import "./Skills.scss";

function Skills() {
	const uniqueSkillTypes = [...new Set(skillsData.map((skill) => skill.type))];

	return (
		<>
			<Helmet>
				<title>SKILLS | STEPAN DORDIAI</title>
			</Helmet>
			<div className="skills js-skills">
				{uniqueSkillTypes.map((skillType) => {
					return (
						<React.Fragment key={skillType}>
							<p className="skills__title">{skillType}</p>
							<div className="skills-grid">
								{skillsData
									.filter((skill) => skill.type === skillType)
									.map((skill) => {
										return <Skill key={skill.id} skill={skill} />;
									})}
							</div>
						</React.Fragment>
					);
				})}
			</div>
			<ScrollBtn className={".js-skills"} />
		</>
	);
}

export default Skills;
