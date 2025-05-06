import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import TextLine from "../../components/textLine/TextLine";
import "./Contact.scss";

function Contact() {
	AnimateElements(".text-line", "revealTextLine 1s forwards");

	return (
		<>
			<Helmet>
				<title>CONTACT | STEPAN DORDIAI</title>
			</Helmet>
			<div className="contact">
				<div className="contact-list">
					<TextLine>
						<a
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							href="mailto:stepandordiai@gmail.com"
						>
							stepandordiai@gmail.com
						</a>
					</TextLine>
					<TextLine>
						<a
							onMouseEnter={interactCursor}
							onMouseLeave={removeInteractCursor}
							onMouseDown={removeInteractCursor}
							onMouseUp={interactCursor}
							href="tel:+420722001016"
						>
							+420 722 001 016
						</a>
					</TextLine>
				</div>
				<div className="contact-list">
					<TextLine>
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
					</TextLine>
					<TextLine>
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
					</TextLine>
					<TextLine>
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
					</TextLine>
					<TextLine>
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
					</TextLine>
					<TextLine>
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
					</TextLine>
				</div>
			</div>
		</>
	);
}

export default Contact;
