import '../App.css';
import amsterdam from "../Assets/amsterdam.jpeg"

function About() {
    return(
        <div id="About" className="container-fluid d-flex m-0 px-0">
            <div className="container-fluid d-flex px-0 aboutme">
                <img className="amsterdam" src={amsterdam}></img>
                <div className="container d-flex flex-column m-5">
                    <h1 className="aboutme-text">About Me</h1>
                    <hr className="aboutme-border"></hr>
                    <h1 className="align-self-end">Past, Present, and Future</h1>
                    <div className="mt-3 about-text">
                        <p>
                            Growing up in Bethlehem I’ve always had easy access to a multitude of diverse environments and people. 
                            My earlier years were defined by my interests in Tang Soo Do and music. The former taught me about discipline and 
                            perseverance, while the latter fueled my creativity, and led the way to my first experiences as both a leader and teacher. 
                        </p>
                        <p>
                            After graduating High School, music brought me my first college experiences, as I joined the University 
                            of Pittsburgh’s “Varsity Marching Band.” I might’ve known how I wanted to spend my free time at college, but I found my path 
                            towards achieving a degree a lot less certain. Luckily, my freshman year I decided to roll the dice on my first 
                            computer science class.
                        </p>
                        <p>
                            I quickly found myself enamored by the seemingly endless possibilities of programming and computer science. While I've 
                            always found discovering the solution to a programming problem extremely satisfying, I became 
                            obsessed with the bigger picture of software development. The future is trending towards a world where tech is 
                            omnipresent, and I intend to follow it there every step of the way. Through my college education and variety of 
                            personal projects and readings, I try my best to continue to learn and develop my skills on a daily basis.
                        </p>
                        <p>
                            I believe that the foundation I’ve built throughout my life gives me a unique perspective in a field that is 
                            typically considered to be cold and unfeeling. Nobody can say for sure where they’re headed in the future, 
                            but I’m certain that I’ll continue to experiment and learn through my personal endeavors and professional experiences. 
                            There’s a place for creativity and colorful thinking somewhere between all the 1’s and 0’s, and I fully intend to make 
                            my home there.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;