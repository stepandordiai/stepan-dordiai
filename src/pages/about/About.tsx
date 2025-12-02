import { Helmet } from "react-helmet-async";
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
			<main className="about">
				{`Self-taught Front-End Developer with over 2 years of experience designing and building interactive websites and applications using React, TypeScript, and Sass. Driven by a passion for problem-solving and innovative solutions, with a strong focus on creating intuitive, user-centric projects and meticulous attention to detail.`
					.split(" ")
					.map((word, index) => {
						return (
							<React.Fragment key={index}>
								<TextLine>{word}</TextLine>
								<span> </span>
							</React.Fragment>
						);
					})}
			</main>
		</>
	);
}

export default About;
