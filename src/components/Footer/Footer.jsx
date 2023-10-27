import { HashLink } from "react-router-hash-link";
import './Footer.css';

const Footer = () => {

    return (
        <footer >
            <div className="footer-wrapper">
                <p>Copyright ©️ <span>Curate Interns</span> || All rights resserved</p>
                <ul>
                    <li><HashLink to='#about' smooth>About</HashLink></li>
                    <li><HashLink to='#whyus' smooth>Why Us?</HashLink></li>
                    <li><HashLink to='#contact' smooth>Contact</HashLink></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;