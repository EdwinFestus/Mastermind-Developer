import '../../index.css'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  { faCoffee } from '@fortawesome/free-solid-svg-icons'
import  { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container footer-content">
                <div class="left">
                    <ul class="items">
                        <h2 class="header">Navigation</h2>
                        <li class="list">
                            <a href="/" class="link">Home</a>
                        </li>
                        <li class="list">
                            <a href="/about" class="link">About</a>
                        </li>
                        <li class="list">
                            <a href="/services" class="link">Services</a>
                        </li>
                        <li class="list">
                            <a href="/contact" class="link">Contact</a>
                        </li>
                        <li class="list">
                            <a href="/Blog" class="link">Blog</a>
                        </li>
                    </ul>
                    <ul class="items">
                        <h2 class="header">Services</h2>
                        <li class="list">
                            <a href="/" class="link">Maketting & Ad Campeign</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Mentorship</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Online Course</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Investment</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Patnership</a>
                        </li>
                    </ul>
                    <ul class="items">
                        <h2 class="header">Support</h2>
                        <li class="list">
                            <a href="/" class="link">Telegram Channel</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Customer Care Service</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Faq</a>
                        </li>
                        <li class="list">
                            <a href="/" class="link">Donate</a>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <a href="/">
                        {/* <i class="fab fa-facebook fb"></i> */}
                        <FontAwesomeIcon icon={ faFacebook } className='fb'></FontAwesomeIcon>
                    </a>
                    <a href="/">
                        {/* <i class="fab fa-instagram in"></i> */}
                        <FontAwesomeIcon icon={ faInstagram  } className='in'></FontAwesomeIcon>
                    </a>
                    <a href="/">
                        {/* <i class="fab fa-linkedin ln"></i> */}
                        <FontAwesomeIcon icon={ faLinkedin } className='ln'></FontAwesomeIcon>
                    </a>
                    <a href="/">
                        {/* <i class="fab fa-twitter tw"></i> */}
                        <FontAwesomeIcon icon={ faTwitter } className='tw'></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <h2 class="copyright">All right reserved &copy;Mastermind Developer, 2023</h2>
        </div>
    )
}

export default Footer;