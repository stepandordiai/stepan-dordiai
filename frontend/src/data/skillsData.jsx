import { v4 as uuidv4 } from "uuid";
import tsIcon from "/images/ts-icon.svg";
import mongodbIcon from "/images/mongodb-icon.svg";

// I'm using uuid external library for unique id

const skillsData = [
    {
        id: uuidv4(),
        name: "Python",
        icon: [<i className="fa-brands fa-python"></i>],
    },
    {
        id: uuidv4(),
        name: "HTML",
        icon: [<i className="fa-brands fa-html5"></i>],
    },
    {
        id: uuidv4(),
        name: "CSS",
        icon: [<i className="fa-brands fa-css3-alt"></i>],
    },
    {
        id: uuidv4(),
        name: "JavaScript",
        icon: [<i className="fa-brands fa-square-js"></i>],
    },
    {
        id: uuidv4(),
        name: "Git",
        icon: [<i className="fa-brands fa-git-alt"></i>],
    },
    {
        id: uuidv4(),
        name: "Github",
        icon: [<i className="fa-brands fa-github"></i>],
    },
    {
        id: uuidv4(),
        name: "SASS",
        icon: [<i className="fa-brands fa-sass"></i>],
    },
    {
        id: uuidv4(),
        name: "Figma",
        icon: [<i className="fa-brands fa-figma"></i>],
    },
    {
        id: uuidv4(),
        name: "React.js",
        icon: [<i className="fa-brands fa-react"></i>],
    },
    {
        id: uuidv4(),
        name: "Bootstrap",
        icon: [<i className="fa-brands fa-bootstrap"></i>],
    },
    {
        id: uuidv4(),
        name: "TypeScript",
        icon: [<img className="img-icon" src={tsIcon} alt="TypeScript" />],
    },
    {
        id: uuidv4(),
        name: "Mongo DB",
        icon: [<img className="img-icon" src={mongodbIcon} alt="Mongo DB" />],
    },
    {
        id: uuidv4(),
        name: "Express",
        icon: [<p className="text-icon">ex</p>],
    },
    {
        id: uuidv4(),
        name: "Node.js",
        icon: [<i className="fa-brands fa-node"></i>],
    },
];

export default skillsData;
