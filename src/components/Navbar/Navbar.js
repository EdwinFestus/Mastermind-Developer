import '../../index.css'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav class="navigation">
            <div class="nav-cont">
                <div class="brand">Mastermind Dev</div>
                <ul class="nav-list">
                    <li><a href="/" class="active"><FontAwesomeIcon icon={faHome} className='icn' /> Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about">More</a></li>
            </ul>
            <a href="/contact" className="btn"><FontAwesomeIcon icon={faPhone}/>  Contact</a>
        </div>
        </nav >
    )
}

export default Navbar;