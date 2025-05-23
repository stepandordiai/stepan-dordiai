import { Helmet } from "react-helmet";
import AnimateElements from "../../utils/AnimateElements";
import { interactCursor, removeInteractCursor } from "../../utils/cursorState";
import TextLine from "../../components/textLine/TextLine";
import { useEffect } from "react";
import "./Contact.scss";

function Contact() {
	AnimateElements(".text-line", "revealTextLine 1s forwards");

	useEffect(() => {
		const contactLinks = document.querySelectorAll(
			".contact__link"
		) as NodeListOf<HTMLAnchorElement> | null;

		contactLinks?.forEach((link) => {
			link.addEventListener("mouseenter", interactCursor);
			link.addEventListener("mouseleave", removeInteractCursor);
			link.addEventListener("mousedown", removeInteractCursor);
			link.addEventListener("mouseup", interactCursor);
		});

		return () => {
			contactLinks?.forEach((link) => {
				link.removeEventListener("mouseenter", interactCursor);
				link.removeEventListener("mouseleave", removeInteractCursor);
				link.removeEventListener("mousedown", removeInteractCursor);
				link.removeEventListener("mouseup", interactCursor);
			});
		};
	}, []);

	return (
		<>
			<Helmet>
				<title>CONTACT | STEPAN DORDIAI</title>
			</Helmet>
			<div className="contact">
				<div className="contact-list">
					<TextLine>
						<a className="contact__link" href="mailto:stepandordiai@gmail.com">
							stepandordiai@gmail.com
						</a>
					</TextLine>
					<TextLine>
						<a className="contact__link" href="tel:+420722001016">
							+420 722 001 016
						</a>
					</TextLine>
				</div>
				<div className="contact-list">
					<TextLine>
						<a
							className="contact__link"
							href="https://github.com/stepandordiai"
							target="_blank"
						>
							GitHub
						</a>
					</TextLine>
					<TextLine>
						<a
							className="contact__link"
							href="https://www.linkedin.com/in/stepandordiai"
							target="_blank"
						>
							LinkedIn
						</a>
					</TextLine>
					<TextLine>
						<a
							className="contact__link"
							href="https://t.me/heeeyooo"
							target="_blank"
						>
							Telegram
						</a>
					</TextLine>
					<TextLine>
						<a
							className="contact__link"
							href="https://www.instagram.com/heeeyooo_"
							target="_blank"
						>
							Instagram
						</a>
					</TextLine>
					<TextLine>
						<a
							className="contact__link"
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
