import { v4 as uuidv4 } from "uuid";
import tsIcon from "/images/ts-icon.svg";
import mongodbIcon from "/images/mongodb-icon.svg";
import nextIcon from "/images/nextjs-svgrepo-com.svg";

// I'm using uuid external library for unique id

const skillsData = [
	{
		id: uuidv4(),
		name: "Python",
		type: "backend",
		icon: [<i className="fa-brands fa-python"></i>],
	},
	{
		id: uuidv4(),
		name: "HTML",
		type: "frontend",
		icon: [<i className="fa-brands fa-html5"></i>],
	},
	{
		id: uuidv4(),
		name: "CSS",
		type: "frontend",

		icon: [<i className="fa-brands fa-css3-alt"></i>],
	},
	{
		id: uuidv4(),
		name: "JavaScript",
		type: "backend",
		icon: [<i className="fa-brands fa-square-js"></i>],
	},
	{
		id: uuidv4(),
		name: "Git",
		type: "other",
		icon: [<i className="fa-brands fa-git-alt"></i>],
	},
	{
		id: uuidv4(),
		name: "Github",
		type: "other",
		icon: [<i className="fa-brands fa-github"></i>],
	},
	{
		id: uuidv4(),
		name: "SASS",
		type: "frontend",
		icon: [<i className="fa-brands fa-sass"></i>],
	},
	{
		id: uuidv4(),
		name: "Figma",
		type: "design",
		icon: [<i className="fa-brands fa-figma"></i>],
	},
	{
		id: uuidv4(),
		name: "React.js",
		type: "frontend",
		icon: [<i className="fa-brands fa-react"></i>],
	},
	{
		id: uuidv4(),
		name: "Bootstrap",
		type: "frontend",
		icon: [<i className="fa-brands fa-bootstrap"></i>],
	},
	{
		id: uuidv4(),
		name: "TypeScript",
		type: "backend",
		icon: [<img className="img-icon" src={tsIcon} alt="TypeScript" />],
	},
	{
		id: uuidv4(),
		name: "Mongo DB",
		type: "backend",
		icon: [<img className="img-icon" src={mongodbIcon} alt="Mongo DB" />],
	},
	{
		id: uuidv4(),
		name: "Express",
		type: "backend",
		icon: [<p className="text-icon">ex</p>],
	},
	{
		id: uuidv4(),
		name: "Node.js",
		type: "backend",
		icon: [<i className="fa-brands fa-node"></i>],
	},
	{
		id: uuidv4(),
		name: "Next.js",
		type: "frontend",
		icon: [<img className="img-icon" src={nextIcon} alt="Next.js" />],
	},
];

export default skillsData;
