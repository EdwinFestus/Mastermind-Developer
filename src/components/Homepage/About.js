import '../../index.css'
import './About.css'


const About = () => {
    return (
        <div className="about">
            <div className="container content">
                <h2 className="header">Using Scrum for Fast Delivery</h2>
                <div className="cards">
                    <div className="card">
                        <h2 className="heading">Register for a Package</h2>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti facilis fugit quo
                            placeat illum labore ab, veniam perspiciatis sed eveniet.</p>
                    </div>
                    <div className="card">
                        <h2 className="heading">Make your Payment</h2>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti facilis fugit quo
                            placeat illum labore ab, veniam perspiciatis sed eveniet.</p>
                    </div>
                    <div className="card">
                        <h2 className="heading">Build & Deploy</h2>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti facilis fugit quo
                            placeat illum labore ab, veniam perspiciatis sed eveniet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;