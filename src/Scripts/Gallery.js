import '../App.css';
import cat from "../Assets/Gallery/cat.jpeg"
import grouphike from "../Assets/Gallery/grouphike.jpeg"
import halloween from "../Assets/Gallery/halloween.jpeg"
import kilns from "../Assets/Gallery/kilns.jpeg"
import rhinos from "../Assets/Gallery/rhinos.jpeg"
import smiz from "../Assets/Gallery/smiz.jpeg"
import sunset from "../Assets/Gallery/sunset.jpeg"

function Gallery() {
    return(
        <div id="Gallery">
            <div className="container-fluid d-flex flex-column gallery-base px-5 py-5">
                <h1 className="gallery-text">Gallery</h1>
                <hr className="gallery-text-2"></hr>
                <p className="gallery-text-2">I'm nowhere close to being a good photographer, but I've neglected to take pictures throughout a lot of my high school and college
                    times. Looking back, I wish I had more pictures to supplement the memories I've made, but it's never too late to start. These are 
                    a few of the pictures I've taken recently to go along with the good memories they aimed to capture. I hope you find some enjoyment
                    in them as well!
                </p>
            </div>
            <div className="container-fluid m-0 d-flex justify-content-center align-items-center py-5 grid-container">
                <h1 className=" px-2 vertical-text">Photo Gallery</h1>
                <div className="gallery-grid m-0">
                    <div id="holder" className="picture-holder gallery-item">
                        <img id="picture" className="gallery-item" src={sunset}></img>
                        <p id="text" className="picture-text oswald">High Rocks 12/11/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-item">
                        <img id="picture" className="gallery-item" src={cat}></img>
                        <p id="text" className="picture-text oswald">Bethlehem 11/16/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-item">
                        <img id="picture" className="gallery-item" src={smiz}></img>
                        <p id="text" className="picture-text oswald">Panther Hollow 10/03/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-tall">
                        <img id="picture" className="gallery-tall" src={kilns}></img>
                        <p id="text" className="picture-text oswald">Coplay Kilns 12/12/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-long">
                        <img id="picture" className="gallery-long" src={grouphike}></img>
                        <p id="text" className="picture-text oswald">High Rocks 12/11/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-item halloween">
                        <img id="picture" className="gallery-item" src={halloween}></img>
                        <p id="text" className="picture-text oswald">Pittsburgh 10/23/20</p>
                    </div>
                    <div id="holder" className="picture-holder gallery-item rhinos">
                        <img id="picture" className="gallery-item rhinos" src={rhinos}></img>
                        <p id="text" className="picture-text oswald rhinos">Allegheny Observatory 10/24/20</p>
                    </div>
                </div>
                <h1 className="px-2 vertical-text vertical-text-right">Photo Gallery</h1>
            </div>
        </div>
    )
}

export default Gallery;