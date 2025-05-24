import { Helmet } from "react-helmet";
import pgData from "../../data/pg-data.json";
import AnimateElements from "../../utils/AnimateElements";
import ScrollBtn from "../../components/scrollBtn/ScrollBtn";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./Playground.scss";

const Playground = () => {
	AnimateElements(".pg-project", "revealPgProject 1s forwards");

	return (
		<>
			<Helmet>
				<title>PLAYGROUND | STEPAN DORDIAI</title>
			</Helmet>
			<div className="pg js-pg">
				{pgData
					.map(({ title, liveSite }, index) => {
						return (
							<a
								key={index}
								onMouseEnter={interactCursor}
								onMouseLeave={removeInteractCursor}
								onMouseDown={removeInteractCursor}
								onMouseUp={interactCursor}
								className="pg-project"
								href={liveSite}
								target="_blank"
							>
								<p className="pg-project__number">
									{index + 1 < 10 ? `00${index + 1}` : `0${index + 1}`}
								</p>
								<p className="pg-project__title">{title}</p>
							</a>
						);
					})
					.reverse()}
			</div>
			<ScrollBtn className={".js-pg"} />
		</>
	);
};

export default Playground;
