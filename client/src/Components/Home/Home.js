import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Home = () => {
    return (
        <Fade left>
            <div className='container-fluid home'>
                <div className='container home-content'>
                    <h1>
                        <Typewriter
                            options={{
                                strings: [
                                    "Web Development",
                                    "Mobile App Development",
                                    "UI/UX Design",
                                    "Product Marketing",
                                    "Digital Marketing",
                                    "Customer Service",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 5,
                            }}
                        />
                    </h1>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </p>
                    <span className="view-details-home-button">View Details</span>
                </div>
            </div>
        </Fade>
    )
}

export default Home