import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./../../global/textLineReveal.scss";
import "./Contact.scss";

function Contact() {
    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <section className="contact">
            <Helmet>
                <title>CONTACT</title>
            </Helmet>
            <ul className="contacts">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                className="mail__link js-mail__link"
                                href="mailto:stepandordiai@gmail.com"
                            >
                                stepandordiai@gmail.com
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="tel:+420722001016"
                                className="tel__link js-tel__link"
                            >
                                +420 722 001 016
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="socials">
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="https://github.com/stepandordiai"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="https://www.linkedin.com/in/stepan-dordiai"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="https://t.me/heeeyooo"
                                target="_blank"
                            >
                                Telegram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="https://www.instagram.com/heeeyooo_"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="https://twitter.com/Heeeyooo_"
                                target="_blank"
                            >
                                X/Twitter
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
