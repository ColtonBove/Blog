import '../App.css';
import arctic from "../Assets/Blogpics/arctic.jpg"
import dinner from "../Assets/Blogpics/dinner.jpg"
import starten from "../Assets/Blogpics/starten.jpg"
import smol from "../Assets/Blogpics/swolesmol.jpeg"

import {
    Link
  } from "react-router-dom";

function Blogpage(){
    return(
        <div className="container-fluid py-5 px-0 blogpage">
            <h1 className="display-2 p-4 ml-5">Blog Archive</h1>

            <div className="container d-flex justify-content-end py-3 mr-3">
            `   <Link to="/Posts/theidealbody">
                    <div className="d-flex py-3 blog-post-container-even">
                        <div className="d-flex flex-column text-right mr-5">
                            <h2 className="seagreen">The ideal body?</h2>
                            <p className="blog-intro text-left link">I’m a 21 year old male. I’m 6 feet tall, and I weigh 160 pounds. Some might consider my age to be at or near my 
                                physical prime. At this point, I could be the “most attractive” I’ll ever be, but what does that really mean? To answer the
                                question, not much. Something that I always thought to be one of the coolest possibilities about the human body is that we
                                have the power to change it. Want to drop a few pounds? You can do that. Want to pack on some muscle? You can also 
                                do that. Change the color of your hair? Sure thing...
                            </p>
                        </div>
                        <img className="ml-3 blog-bubble" src={smol}></img>
                    </div>
                </Link>
            </div>

            <div className="container d-flex py-3">
                <Link to="/Posts/cooking">
                    <div className="d-flex py-3 blog-post-container-odd">
                        <img className="mr-3 blog-bubble" src={dinner}></img>
                        <div className="d-flex flex-column ml-5">
                            <h2 className="seagreen">Cooking, even if you're an idiot?</h2>
                            <p className="blog-intro text-left">Time to talk about food, something virtually everyone is a fan of. Even if you’re a picky eater or have dietary 
                                restrictions I’m sure there’s at least some type of food you can get excited about. What I find confusing is while 
                                seemingly everyone loves to eat, there aren’t nearly as many people who love to cook, or even really claim to “know” 
                                how to cook...
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="container d-flex justify-content-end py-3 mr-3">
                <Link to="/Posts/arcticvault">
                    <div className="d-flex py-3 blog-post-container-even">
                        <div className="d-flex flex-column text-right mr-5">
                            <h2 className="seagreen">The Arcitc Code Vault?</h2>
                            <p className="blog-intro text-left">Alright ladies and gentlemen, time for a post about tech. I’m currently a senior computer science student at the 
                                University of Pittsburgh, and akin to pretty much any other computer science student or professional software engineer,
                                I use a platform called Github. If you’re not familiar with Github, “Github is a code hosting platform for version 
                                control and collaboration. It lets you and others work together on projects from anywhere.” To simply put it...
                            </p>
                        </div>
                        <img className="ml-3 blog-bubble" src={arctic}></img>
                    </div>
                </Link>
            </div>

            <div className="container d-flex py-3">
                <Link to="/Posts/productivity">
                    <div className="d-flex py-3 blog-post-container-odd">
                        <img className="mr-3 blog-bubble" src={starten}></img>
                        <div className="d-flex flex-column ml-5">
                            <h2 className="seagreen">Another bs productivity hack?</h2>
                            <p className="blog-intro text-left">Well, 2020 is just about over, and what a year it’s been. However outrageous and unusual the year was, I’m sure there’ll be 
                                consistency in the tradition of the New Year’s resolution. If you’re not from America or another place that takes part in this 
                                tradition, or if you’ve just been living under a rock for awhile (admittedly not a terrible time to do so), the New Year’s 
                                resolution is essentially a tradition where someone picks some aspect of their life in which they hope to better themselves, 
                                and then proceeds to better themselves in said aspect for about 2 weeks before ditching it entirely...
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Blogpage;