import '../../index.css'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='about'>
                <div className='container'>
                    <h2>Hello World</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About