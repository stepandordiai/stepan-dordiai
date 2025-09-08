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
		name: "HTML",
		type: "Front-end",
		icon: "/skill-icons/html.svg",
	},
	{
		id: uuidv4(),
		name: "CSS",
		type: "Front-end",
		icon: "/skill-icons/css.svg",
	},
	{
		id: uuidv4(),
		name: "JavaScript",
		type: "Back-end",
		icon: "/skill-icons/java-script.svg",
	},
	{
		id: uuidv4(),
		name: "Git",
		type: "Other",
		icon: "/skill-icons/git.svg",
	},
	{
		id: uuidv4(),
		name: "GitHub",
		type: "Other",
		icon: "/skill-icons/git-hub.svg",
	},
	{
		id: uuidv4(),
		name: "SASS",
		type: "Front-end",
		icon: "/skill-icons/sass.svg",
	},
	{
		id: uuidv4(),
		name: "Figma",
		type: "Design",
		icon: "/skill-icons/figma.svg",
	},
	{
		id: uuidv4(),
		name: "React.js",
		type: "Front-end",
		icon: "/skill-icons/react.svg",
	},
	{
		id: uuidv4(),
		name: "Bootstrap",
		type: "Front-end",
		icon: "/skill-icons/bootstrap.svg",
	},
	{
		id: uuidv4(),
		name: "TypeScript",
		type: "Back-end",
		icon: "/skill-icons/type-script.svg",
	},
	{
		id: uuidv4(),
		name: "MongoDB",
		type: "Database",
		icon: "/skill-icons/mongodb.svg",
	},
	{
		id: uuidv4(),
		name: "Express.js",
		type: "Back-end",
		icon: "/skill-icons/express-js.svg",
	},
	{
		id: uuidv4(),
		name: "Node.js",
		type: "Back-end",
		icon: "/skill-icons/node-js.svg",
	},
	{
		id: uuidv4(),
		name: "Next.js",
		type: "Front-end",
		icon: "/skill-icons/next-js.svg",
	},
	{
		id: uuidv4(),
		name: "Python",
		type: "Back-end",
		icon: "/skill-icons/python.svg",
	},
];

export default skillsData;
