import { Helmet } from "react-helmet-async";
import skills from "../../assets/data/skills.json";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Skills.scss";

const updatedSkills = skills.map((skill) => ({
	id: uuidv4(),
	name: skill.name,
	type: skill.type,
}));

function Skills() {
	const uniqueSkillTypes = [
		...new Set(updatedSkills.map((skill) => skill.type)),
	];

	return (
		<>
			<Helmet>
				<title>SKILLS | STEPAN DORDIAI</title>
			</Helmet>
			<main className="skills js-skills">
				{uniqueSkillTypes.map((skillType) => {
					return (
						<Fragment key={skillType}>
							<p className="skills__title">{skillType}</p>
							<div className="skills-grid">
								{updatedSkills
									.filter((skill) => skill.type === skillType)
									.map((skill) => {
										return <Skill key={skill.id} skill={skill} />;
									})}
							</div>
						</Fragment>
					);
				})}
			</main>
			<ScrollBtn className=".js-skills" />
		</>
	);
}

export default Skills;
