import React from 'react'
import './Resources.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

const Resources = () => {
    const data = [
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
            img: "https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://logowik.com/content/uploads/images/nodejs.jpg",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://git-scm.com/images/logos/1color-orange-lightbg@2x.png",
        },
        {
            name: "Docker",
            des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/1200px-AmazonWebservices_Logo.svg.png",
        }
    ];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const colors = [
        "#F1C40F",
        "#4B088A",
        "#8181F7",
        "#FE2EF7",
        "#585858",
        "#800000",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#001CCE",
        "#00C79F",
        "#FFBB24",
        "#FF1042",
        "#FF1042",
      ];

  return (
    <div className="container resources-section">

            <div className='section-title'>
                <h5>Resources</h5>
                <spam className='line'></spam>
            </div>
            
            <div className='resources-slider'>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <Fade left>
                    <div className="content-slider-main">

                        <div className='content-slider' key={index} style={{backgroundColor:colors[index]}}>
                            <img src={item.img} alt='image' className='center-image' />
                            <p>{item.des}</p>
                            <p>{item.name}</p>
                        </div>
                    </div>
                    </Fade>

                ))}
            </Slider>
        </div>

    </div>        
  )
}

export default Resources