import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<p className="copyright">
				&copy; {new Date().getFullYear()} STEPAN DORDIAI
			</p>
		</footer>
	);
}

export default Footer;
