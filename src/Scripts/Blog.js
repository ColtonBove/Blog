import '../App.css';
import {
    Link
  } from "react-router-dom";
import smol from "../Assets/Blogpics/swolesmol.jpeg"
import dinner from "../Assets/Blogpics/dinner.jpg"
import starten from "../Assets/Blogpics/starten.jpg"

function Blog() {
    return(
        <div id="Blog" className="container-fluid d-flex flex-column justify-content-center align-items-center py-5 blog-container">
            <div className="container d-flex flex-column align-items-center mb-5 blog-info">
                <div className="container d-flex flex-column">
                    <span><h1 className="spaced-title">Blog</h1></span>
                    <hr></hr>
                    <p className="main-title">What I have to say...</p>
                    <p>It's no secret  -tech students definitely aren't known for their communication skills. I can't say I'll
                    "write" any wrongs on that front with this blog, but I think writing is an invaluable life skill to have in any discipline.
                     I hope you can find these posts insightful, interesting, enjoyable, or humorous at the very least!
                    </p>
                    <Link to="/BlogArchive" className="blog-link">Check out all blog posts here</Link>
                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center featured-container">
                <div className="container d-flex flex-column post-container">
                    <h1>The Arctic Code Vault?</h1>
                    <p className="blog-paragraph">
                        "...With Covid-19 and the global pandemic still in full swing it might feel like the world is ending, but imagine a scenario 
                        in which a global catastrophe were to actually occur. This is essentially a situation in which Github imagined, and is 
                        one of the reasons they decided to create the “Arctic Code Vault.” 
                    </p>
                    <p className="blog-paragraph">
                        Github’s Arctic Code Vault is a “data repository preserved in the Arctic World Archive, a long-term archival facility 
                        250 meters deep in the permafrost of an Arctic mountain.” The archive is actually inside of a decommissioned coal mine 
                        close to the North Pole, and is intended to last for hundreds of years to come.
                    </p>
                    <p className="blog-paragraph">
                        If you think this sounds a bit crazy, you’re not alone. However, Github isn’t the first to store data inside of a repository 
                        in the arctic permafrost. As mentioned before, Github paired with the AWA (Arctic World Archive) in order to make the Arctic 
                        Code Vault a possibility. The AWA is an organization founded in 2017 that “holds an impressive collection of valuable digital 
                        artefacts and irreplaceable information from around the world.” The AWA already stores things like manuscripts from the 
                        Vatican Library, various scientific breakthroughs, and masterpieces from artists like Rembrandt and Munch. Their mission is to 
                        store data in “the safest location on Earth,” a place capable of withstanding both natural and man-made disasters." 
                    </p>
                    <Link to="/Posts/arcticvault" className="blog-link">Read the whole post here</Link>
                </div>
                <div className="container d-flex flex-column justify-content-center mt-4">
                    <h1 className="other-posts">Other Posts</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-end align-items-end pr-0">
                                <Link to="/Posts/productivity">
                                    <img className="bubble bubble-medium" src={starten}></img>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/Posts/cooking">
                                    <img className="bubble bubble-big" src={dinner}></img>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col pt-3 pl-0 d-flex">
                                <Link to="/Posts/theidealbody">
                                    <img className="bubble bubble-small" src={smol}></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;