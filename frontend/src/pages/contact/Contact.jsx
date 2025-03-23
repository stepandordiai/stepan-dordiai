import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import "./../../global/textLineReveal.scss";
import "./Contact.scss";

function Contact() {
    AnimateElements(".text-line", "revealTextLine 1s forwards");

    return (
        <>
            <Helmet>
                <title>CONTACT</title>
            </Helmet>
            <section className="contact">
                <div className="contact-list">
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="mailto:stepandordiai@gmail.com"
                            >
                                stepandordiai@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="tel:+420722001016"
                            >
                                +420 722 001 016
                            </a>
                        </div>
                    </div>
                    <div className="text-line-container">
                        <div className="text-line">
                            <a
                                onMouseEnter={interactCursor}
                                onMouseLeave={removeInteractCursor}
                                onMouseDown={removeInteractCursor}
                                onMouseUp={interactCursor}
                                href="tel:+380689852978"
                                className="contacts__tel"
                            >
                                +38 068 985 29 78
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-list">
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
                </div>
            </section>
        </>
    );
}

export default Contact;
