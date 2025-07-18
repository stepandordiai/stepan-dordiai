import { Helmet } from "react-helmet-async";
import skillsData from "../../assets/data/skillsData";
import Skill from "../../components/skill/Skill";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import "./Skills.scss";

function Skills() {
	return (
		<>
			<Helmet>
				<title>SKILLS | STEPAN DORDIAI</title>
			</Helmet>
			<div className="skills js-skills">
				<p className="skills__title">Front-end</p>
				<div className="skills-grid">
					{skillsData
						.filter((skill) => skill.type === "frontend")
						.reverse()
						.map((skill) => {
							return <Skill key={skill.id} skill={skill} />;
						})}
				</div>
				<p className="skills__title">Back-end</p>
				<div className="skills-grid">
					{skillsData
						.filter((skill) => skill.type === "backend")
						.reverse()
						.map((skill) => {
							return <Skill key={skill.id} skill={skill} />;
						})}
				</div>
				<p className="skills__title">Database</p>
				<div className="skills-grid">
					{skillsData
						.filter((skill) => skill.type === "database")
						.reverse()
						.map((skill) => {
							return <Skill key={skill.id} skill={skill} />;
						})}
				</div>
				<p className="skills__title">Design</p>
				<div className="skills-grid">
					{skillsData
						.filter((skill) => skill.type === "design")
						.reverse()
						.map((skill) => {
							return <Skill key={skill.id} skill={skill} />;
						})}
				</div>
				<p className="skills__title">Other</p>
				<div className="skills-grid">
					{skillsData
						.filter((skill) => skill.type === "other")
						.reverse()
						.map((skill) => {
							return <Skill key={skill.id} skill={skill} />;
						})}
				</div>
			</div>
			<ScrollBtn className={".js-skills"} />
		</>
	);
}

export default Skills;
