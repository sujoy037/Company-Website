import React from 'react'
import './About.css'
import about from "../../Image/about.jpg";
import { FcSlrBackSide,FcWorkflow} from "react-icons/fc";
import Fade from "react-reveal/Fade";


const About = () => {
    return (
        <div className='className="container about-section'>

            <div className='row'>
            <Fade left>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className="about-image">
                        <img src={about} alt="about_image" />
                    </div>
                </div>
            </Fade>    


                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <Fade right>
                    <div className='about-details'>
                        <div className='about-title'>
                            <h5>About</h5>
                            <span className="line"></span>
                        </div>
                        <p>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </p>

                        <div className="card-design">
                        <div className="about-list-item">
                          <div className="about-details-icon">
                            <p>
                              <FcSlrBackSide size={50} />
                            </p>
                          </div>
                          <div>
                            <h6>Vission</h6>
                            <p>
                              It is a long established fact that a reader will be
                              distracted by the readable content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-design">
                        <div className="about-list-item">
                          <div className="about-details-icon">
                            <p>
                              <FcWorkflow size={50} />
                            </p>
                          </div>
                          <div>
                            <h6>Mission</h6>
                            <p>
                              It is a long established fact that a reader will be
                              distracted by the readable content.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}

export default About