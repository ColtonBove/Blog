import '../App.css';
import Form from './Helpers/Form';

function Contact() {
    return(
        <footer id="Contact" className="page-footer">
            <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center contact">

                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <p className="get-in-touch oswald">Get In Touch</p>

                    <div className="container d-flex align-items-center justify-content-center mb-5 mt-2">
                        <a href="https://www.linkedin.com/in/colton-bove-49130a167/">
                            <img className="social-media mx-3" src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"></img>
                        </a>
                        <a href="https://github.com/ColtonBove">
                            <img className="social-media mx-3" src="https://static.wixstatic.com/media/e1ac25_de8824a662694469ad3fb6f37ae85a5f~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/e1ac25_de8824a662694469ad3fb6f37ae85a5f~mv2.webp"></img>
                        </a>
                        <a href="mailto:80bovec@gmail.com">
                            <img className="social-media mx-3" src="https://static.wixstatic.com/media/e1ac25_d545eaa364b141f5a66ac81d8b19c336~mv2_d_2048_2048_s_2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/e1ac25_d545eaa364b141f5a66ac81d8b19c336~mv2_d_2048_2048_s_2.webp"></img>
                        </a>
                    </div>
                </div>


                <div className="container d-flex justify-content-center form-container">
                    <p className="mx-5 my-3 oswald fill-out-form">Fill out the form to ask me anything...</p>
                    <Form></Form>
                </div>
            </div>
        </footer>
    )
}

export default Contact;