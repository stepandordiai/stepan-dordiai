import "./TextLine.scss";

const TextLine = (props) => {
	return (
		<div className="text-line-container">
			<div className="text-line">{props.children}</div>
		</div>
	);
};

export default TextLine;
