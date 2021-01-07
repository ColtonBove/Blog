import '../App.css';
import profile from "../Assets/profile-square.jpg"
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';


function Introduction() {
    let [isVisible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(()=>setVisible(true), 100);
    }, [])

    return(
        <div id="Introduction" className="jumbotron mb-0 p-0">
            <div className="container d-flex intro-container">
                <div className="container d-flex align-items-center pt-5">
                    <img className="my-5 mx-3 profile-image" src={profile}></img>
                    <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-1 mt-3 logos">
                        <a href="https://www.linkedin.com/in/colton-bove-49130a167/">
                            <img className="social-media-top my-4" src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp"></img>
                        </a>
                        <a href="https://github.com/ColtonBove">
                            <img className="social-media-top my-4" src="https://static.wixstatic.com/media/e1ac25_de8824a662694469ad3fb6f37ae85a5f~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/e1ac25_de8824a662694469ad3fb6f37ae85a5f~mv2.webp"></img>
                        </a>
                        <a href="mailto:80bovec@gmail.com">
                            <img className="social-media-top my-4" src="https://static.wixstatic.com/media/e1ac25_d545eaa364b141f5a66ac81d8b19c336~mv2_d_2048_2048_s_2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01/e1ac25_d545eaa364b141f5a66ac81d8b19c336~mv2_d_2048_2048_s_2.webp"></img>
                        </a>
                    </div>
                </div>
                <div className="container d-flex flex-column justify-content-end align-items-end mt-4">
                    <h1 className="display-4 font-weight-bold">Colton Bove</h1>
                    <CSSTransition in={isVisible} timeout={300} classNames="intro">
                        <p className="lead font-weight-bold font-italic seagreen transition">
                            <span className="mr-2">Software Developer...</span>
                            <span className="mx-2">Student...</span>
                            <span className="mx-2">Blogger?</span>
                        </p>
                    </CSSTransition>
                    <hr className="my-4 white"></hr>
                </div>
            </div>
        </div>
    )
}

export default Introduction;