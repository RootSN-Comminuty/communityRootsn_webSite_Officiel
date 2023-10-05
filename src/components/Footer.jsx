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
                        <a href="https://www.linkedin.com/company/93371847" target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
                        <a href="https://www.facebook.com/RootsnCommunity" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                        <a href="https://twitter.com/RootSNCommunity/" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
                        <a href="https://www.instagram.com/rootsncommunity_officiel/" target="_blank" rel="noreferrer noopener"><BsInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Liens Utiles</h4>
                    <Link to="/about">A Propos</Link>
                    <Link to="/evenements">Evenements</Link>
                    <Link to="/blogs">Blog</Link>
                    <Link to="/ministres">Ministres</Link>
                    <Link to="/galerie">Galerie</Link>
                    {/* <Link to="/contact">Contact</Link> */}
                </article>
                <article>
                    <h4>OCBRSN2023</h4>
                    <Link to="https://octobrecyber.communityrootsn.com" target="_blank">A Propos</Link>
                    <Link to="https://octobrecyber.communityrootsn.com" target="_blank">Speakers</Link>
                    <Link to="https://octobrecyber.communityrootsn.com" target="_blank">Blog</Link>
                    <Link to="https://octobrecyber.communityrootsn.com" target="_blank">Programme</Link>
                    <Link to="https://octobrecyber.communityrootsn.com" target="_blank">Contact</Link>
                </article>
                <article>
                    <h4>Nos Contacts</h4>
                    <Link to="/contact">Rejoigner-Nous</Link>
                    <Link to="/">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>&copy; Copyright, 2023 #rootSNCommunity. Tous droits réservés</small>
            </div>
        </footer>
    )
}

export default Footer