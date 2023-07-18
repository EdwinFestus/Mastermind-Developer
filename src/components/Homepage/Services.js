import '../../index.css';
import './Services.css';
import img1 from '../../img/happyWorkers.jpg'
import img2 from '../../img/salesGrowth.jpg'

const Services = () => {
    return (
        <section className="services">
            <h2 className="header">Making the most out of our services</h2>
            <div className="container content">
                <div className="sidebar">
                    <h3 className="heading">How we do our Services</h3>
                    <ul className="lists">
                        <li className="text">Sketching the plan and Desining Mockups, Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum perspiciatis ex dolor quidem mollitia!</li>
                        <li className="text">Submiting Task as early as posible, Lorem ipsum dolor sit amet.</li>
                        {/* <li className="text">Completion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestiae.</li> */}
                    </ul>
                    <a href={'##'} className="btn">Find Out More <i className="fa fa-arrow-right ar"></i> </a>
                </div>
                <div className='side-two'>
                    <img src={img1} alt='img-1' className='img' />
                    <img src={img2} alt='img-2' className='img' />
                </div>
            </div>
        </section>
    );
}

export default Services;