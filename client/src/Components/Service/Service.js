import React ,{useState}from 'react'
import './Service.css'
import Zoom from "react-reveal/Zoom";

const Service = () => {
    const data = [
        {
            name: "Web Development",
        },
        {
            name: "Mobile App Development",
        },
        {
            name: "UI/UX Design",
        },
        {
            name: "Digital Marketing",
        },
        {
            name: "Web Development",
        },
        {
            name: "Mobile App Development",
        },
        {
            name: "UI/UX Design",
        },
        {
            name: "Digital Marketing",
        },
        {
            name: "Web Development",
        },
        {
            name: "Mobile App Development",
        },
        {
            name: "UI/UX Design",
        },
        {
            name: "Digital Marketing",
        },
        {
            name: "Web Development",
        },
        {
            name: "Mobile App Development",
        },
        {
            name: "UI/UX Design",
        }
    ]

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
    const [load, setLoad] = useState(6)
    const loadMore=()=>{
      setLoad((prev)=>prev+3)
    }
    return (
        <div className='container techstack-section'>
            <div className='section-title'>
                <h5>Services</h5>
                <spam className='line'></spam>
            </div>

            <div className='row'>
                {data.slice(0, load).map((item, index) => (
                    <Zoom top>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className={index === 0 ? 'tech-content-marked tech-content' : 'tech-content'}>
                            <spam className='tech-number' style={{ backgroundColor: colors[index] }}>{index + 1}</spam>
                            <p>{item.name}</p>
                        </div>

                    </div>
                    </Zoom>
                ))}
            </div>
            {load >= data.length ? null : (<spam className='load-more' onClick={loadMore}>load more</spam>)}

        </div>
    )
}

export default Service