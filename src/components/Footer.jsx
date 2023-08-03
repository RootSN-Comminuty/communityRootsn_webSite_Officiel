import { Link } from "react-router-dom"
// import Logo from '../images/logo.png'
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"




const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        {/* <img src={Logo} alt="Footer Logo" /> */}
                        <h3>#rootSN<span>Community</span></h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus voluptatem laborum quis repellendus architecto,
                        ducimus libero, tempora consequuntur reprehenderit omnis accusamus.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><BsInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">A Propos</Link>
                    <Link to="/event">Evenements</Link>
                    <Link to="/blocs">Blog</Link>
                    <Link to="/ministers">Ministres</Link>
                    <Link to="/gallery">Galerie</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">A Propos</Link>
                    <Link to="/s">Evenements</Link>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Ministres</Link>
                    <Link to="/s">Galerie</Link>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/contact">Contacter-Nous</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>&copy; Copyright #rootSNCommunity. Tous droits réservés</small>
            </div>
        </footer>
    )
}

export default Footer