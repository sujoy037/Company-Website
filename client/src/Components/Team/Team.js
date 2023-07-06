import React from 'react'
import './Team.css'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Fade from 'react-reveal/Fade';

const Team = () => {
    const data = [
        {
          id: 1,
          name: "Jon Doe",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          name: "Muller",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          name: "Alexander",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 4,
          name: "Bechum",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          name: "Emily",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/1808785/pexels-photo-1808785.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          name: "Elizabeth",
          content:
            "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ];
  return (
    <div className="container team-members">

      <div className="section-title">
        <h5>Team Members</h5>
        <span className="line"></span>
      </div>
      
      <div className='row'>
        {data.map((item,index)=>(
          <Fade right>
            <div className='className="col-xl-4 col-lg-4 col-md-6 col-sm-12"'>
            <div className="card team-members-item">
              <img src={item.img} alt="team image" />
              <div className="team-info">
                <h6>{item.name}</h6>
                <p>{item.content}</p>
              </div>
              <span className="line-for-teammebers"></span>
              <div className="social-icons">
                <p>
                  <FaFacebookF size={25} />
                </p>
                <p>
                  <FaLinkedinIn size={25} />
                </p>
                <p>
                  <AiOutlineTwitter size={25} />
                </p>
              </div>
            </div>  

        </div>
        </Fade>

        ))}
        
      </div>
    </div>  
  )
}

export default Team