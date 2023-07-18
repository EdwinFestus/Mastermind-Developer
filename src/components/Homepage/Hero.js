
import '../../index.css'
import './Hero.css'
import img from '../../img/Admin-port.png'


const Hero = (props) => {
    return (
        <div className='hero'>
            <div className='container content'>
                <div className='left'>
                    <h1 className="heading">Introducing the new stack for fast development</h1>
                    <p className="sub-heading">A new way to grow your business, elevate your brand and grow your online presence
                        with Festus Edwin Femi.</p>
                    <div className="buttons">
                        <a href="/" className="btn">Explore New</a>
                        <a href="/" className="btn">Free Trial</a>
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