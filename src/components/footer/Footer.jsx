import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<p className="copyright">
				&copy; 2024 - <span>{new Date().getFullYear()}</span> STEPAN DORDIAI
			</p>
		</footer>
	);
}

export default Footer;
