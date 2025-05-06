import { Helmet } from "react-helmet";
import React from "react";
import AnimateElements from "../../utils/AnimateElements";
import TextLine from "../../components/textLine/TextLine";
import "./About.scss";

function About() {
	AnimateElements(".text-line", "revealTextLine 1s forwards", 50);

	return (
		<>
			<Helmet>
				<title>ABOUT | STEPAN DORDIAI</title>
			</Helmet>
			<div className="about">
				{`Self-taught Web Developer with more than 2 years of diverse experience in designing and building responsive web pages and applications. Constantly seeking for new challenges and opportunities that will expand my skill set`
					.split(" ")
					.map((word, index) => {
						return (
							<React.Fragment key={index}>
								<TextLine>{word}</TextLine>
								<span> </span>
							</React.Fragment>
						);
					})}
			</div>
		</>
	);
}

export default About;
