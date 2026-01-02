import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<p className="copyright">
				&copy; 2024-{new Date().getFullYear()} STEPAN DORDIAI
			</p>
		</footer>
	);
}

export default Footer;
