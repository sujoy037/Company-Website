import React from 'react'
import './Solution.css'
import Zoom from "react-reveal/Zoom";

const Solution = () => {

  const data = [
    {
      id: 1,
      img: "/assets/about.jpg" ,
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 2,
      img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 3,
      img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 4,
      img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 5,
      img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },

    {
      id: 6,
      img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      title: "Work process of our team",
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
    },
  ];
  return (
    <div className="container solution">

      <div className="section-title">
        <h5>Solutions</h5>
        <span className="line"></span>
      </div>

      <div className='row'>
        {data.map((item,index)=>(
          <Zoom>
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div className="image-details" key={index}> 
          <img src={item.img} alt='image_content' style={{width:"auto",
          height:"250px"}}/>
          </div>
          <div className="image-content">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
           
        </div>
        </Zoom>
        ))}
        
      </div>

    </div>  
  )
}

export default Solution