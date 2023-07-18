
import '../../index.css'
import './Testimonial.css'
import cardImg1 from '../../img/pic 2.jpg'
import cardImg2 from '../../img/ppc.jpg'
import cardImg3 from '../../img/salesGrowth.jpg'


const Testimonial = () => {
    return (
        <div className="testimonials">
            <h2 class="heading">What People are Saying</h2>
            <div className='container content'>
                <div className="card active">
                    <img src={cardImg1} alt="first img" className="card-img" />
                    <div class="txt">
                        <h2 className="name">John Doe</h2>
                        <h2 className="profession">Web Developer</h2>
                        <p className="text"><span>"</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis a
                            nesciunt at dicta ipsum impedit et velit nobis officia incidunt. <span>"</span></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cardImg2} alt="secong img" className="card-img" />
                    <div class="txt">
                        <h2 className="name">Neo Johnson</h2>
                        <h2 className="profession">Founder of Ink.co</h2>
                        <p className="text"><span>"</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis a
                            nesciunt at dicta ipsum impedit et velit nobis officia incidunt. <span>"</span></p>
                    </div>
                </div>
                <div className="card">
                    <img src={cardImg3} alt="third img" className="card-img" />
                    <div class="txt">
                        <h2 className="name">Aitokhuehi Christiana</h2>
                        <h2 className="profession">Founder of ChiFroxen</h2>
                        <p className="text"><span>"</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis a
                            nesciunt at dicta ipsum impedit et velit nobis officia incidunt. <span>"</span></p>
                    </div>
                </div>
            </div>
            <div class="pagination">
                    <div class="dot active"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
        </div>
    )

}



export default Testimonial;