
import '../../index.css'
import './Hero.css'
import img from '../../img/Admin-port.png'
import { Link } from 'react-router-dom'


const Hero = (props) => {
    return (
        <div className='hero'>
            <div className='container content'>
                <div className='left'>
                    <h1 className="heading">Introducing the new stack for fast development</h1>
                    <p className="sub-heading">A new way to grow your business, elevate your brand and grow your online presence
                        with Festus Edwin Femi.</p>
                    <div className="buttons">
                        <Link to="/" className="btn">Explore New</Link>
                        <Link to="/About" className="btn">Free Trial</Link>
                    </div>
                </div>
                <div className='right'>
                    <img src={img} className='img' alt='Admin pic' />
                </div>
            </div>
        </div>
    )
}

export default Hero;