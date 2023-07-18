import '../../index.css'
import './ErrorPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className="error-page">
                <div className="container">
                    <h1 className="error-heading">Error Page 404 :( </h1>
                    <p className="error-message">Sorry, this page does not exist, please check your url and try again</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;