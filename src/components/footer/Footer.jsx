import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">
                &copy; 2024 - <span>{new Date().getFullYear()}</span> STEPAN
                DORDIAI
            </p>
            <p className="privacy">ALL RIGHTS RESERVED</p>
        </footer>
    );
}

export default Footer;
