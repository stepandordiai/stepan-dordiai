import "./TextLine.scss";

type TextLineProps = {
	children: React.ReactNode;
};

const TextLine = ({ children }: TextLineProps) => {
	return (
		<div className="text-line-container">
			<div className="text-line">{children}</div>
		</div>
	);
};

export default TextLine;
