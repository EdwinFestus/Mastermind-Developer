import './More.css'
import '../../index.css'
import imgMore from "../../img/erpnext-hero-compressed.png"

const More = () => {
    return (
        <div className="more">
            <div className="container content">
                <div className="left">
                    <div className="steps">
                        <h2 className="heading">01</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil provident ut ea
                            nemo ullam vero saepe hic at. Et atque </p>
                    </div>

                    <div className="steps">
                        <h2 className="heading">02</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil provident ut ea
                            nemo ullam vero saepe hic at. Et atque </p>
                    </div>

                    <div class="steps">
                        <h2 className="heading">03</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil provident ut ea
                            nemo ullam vero saepe hic at. Et atque </p>
                    </div>

                    <div className="steps">
                        <h2 className="heading">04</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nihil provident ut ea
                            nemo ullam vero saepe hic at. Et atque </p>
                    </div>
                </div>

                <div className="right">
                    <img src={imgMore} alt="img" className="img" />
                </div>
            </div>
        </div>
    )
}

export default More;