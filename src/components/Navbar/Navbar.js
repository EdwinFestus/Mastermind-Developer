import '../../index.css'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav class="navigation">
            <div class="nav-cont">
                <div class="brand">Mastermind Dev</div>
                <ul class="nav-list">
                    <li><Link to="/" class="active"><FontAwesomeIcon icon={faHome} className='icn' /> Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">More</Link></li>
            </ul>
            <Link to="/contact" className="btn"><FontAwesomeIcon icon={faPhone}/>  Contact</Link>
        </div>
        </nav >
    )
}

export default Navbar;