import { useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import { MAIN_URL } from "../libs/contsnts";
import { useEffect } from "react";
import "../styles/JobDetails.css"

const JobDetails = () => {

    const {id} = useParams()
    const {detail , loading , run} = useAsync(MAIN_URL + "/" + id)

    useEffect(()=>{
        run()
    },[])

    if(loading){
        return <div>Loading...</div>
    }

    return (<>
        <div className="details">
            <img src={detail.logo} alt="" />
            <div className="texts">
                <h1>{detail.company}</h1>
                <h2>{detail.position}</h2>
                <h3>{detail.level}</h3>
                <h4>{detail.role}</h4>
                <h4>{detail.location}</h4>
                <div>{detail.languages.map((item , index) => (
                    <span className="langs" key={index}>{item}</span>
                ))}</div>
                <div className="btn_area">
                    <button className="btn btn-dark">Send Resume</button>
                </div>
            </div>
        </div>
    </>);
}
 
export default JobDetails;