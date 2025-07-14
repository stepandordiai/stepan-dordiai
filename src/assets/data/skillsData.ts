import { v4 as uuidv4 } from "uuid";

interface SkillsData {
	id: string;
	name: string;
	type: string;
	icon: string;
}

// I'm using uuid external library for unique id
const skillsData: SkillsData[] = [
	{
		id: uuidv4(),
		name: "Python",
		type: "backend",
		icon: "/skill-icons/python.svg",
	},
	{
		id: uuidv4(),
		name: "HTML",
		type: "frontend",
		icon: "/skill-icons/html.svg",
	},
	{
		id: uuidv4(),
		name: "CSS",
		type: "frontend",
		icon: "/skill-icons/css.svg",
	},
	{
		id: uuidv4(),
		name: "JavaScript",
		type: "backend",
		icon: "/skill-icons/java-script.svg",
	},
	{
		id: uuidv4(),
		name: "Git",
		type: "other",
		icon: "/skill-icons/git.svg",
	},
	{
		id: uuidv4(),
		name: "GitHub",
		type: "other",
		icon: "/skill-icons/git-hub.svg",
	},
	{
		id: uuidv4(),
		name: "SASS",
		type: "frontend",
		icon: "/skill-icons/sass.svg",
	},
	{
		id: uuidv4(),
		name: "Figma",
		type: "design",
		icon: "/skill-icons/figma.svg",
	},
	{
		id: uuidv4(),
		name: "React.js",
		type: "frontend",
		icon: "/skill-icons/react.svg",
	},
	{
		id: uuidv4(),
		name: "Bootstrap",
		type: "frontend",
		icon: "/skill-icons/bootstrap.svg",
	},
	{
		id: uuidv4(),
		name: "TypeScript",
		type: "backend",
		icon: "/skill-icons/type-script.svg",
	},
	{
		id: uuidv4(),
		name: "MongoDB",
		type: "database",
		icon: "/skill-icons/mongodb.svg",
	},
	{
		id: uuidv4(),
		name: "Express.js",
		type: "backend",
		icon: "/skill-icons/express-js.svg",
	},
	{
		id: uuidv4(),
		name: "Node.js",
		type: "backend",
		icon: "/skill-icons/node-js.svg",
	},
	{
		id: uuidv4(),
		name: "Next.js",
		type: "frontend",
		icon: "/skill-icons/next-js.svg",
	},
];

export default skillsData;
