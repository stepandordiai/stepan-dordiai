import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import TextLine from "../../components/textLine/TextLine";
import "./About.scss";

function About() {
    AnimateElements(".text-line", "revealTextLine 1s forwards", 50);

    return (
        <>
            <Helmet>
                <title>ABOUT</title>
            </Helmet>
            <section className="about">
                {`Self-taught Web developer with more than 2 years of diverse experience in designing and building responsive web pages and applications. Constantly seeking for new challenges and opportunities that will expand my skill set`
                    .split(` `)
                    .map((word, index) => {
                        return (
                            <TextLine key={index}>
                                <p style={{ marginLeft: "5px" }}>{word}</p>
                            </TextLine>
                        );
                    })}
            </section>
        </>
    );
}

export default About;
