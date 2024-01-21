import "../styles/Job.css"
import { Poster } from "../interfaces/details";
import { useNavigate } from "react-router-dom";

type Props = {
    item : Poster
}

const Job = ({item} : Props) => {

    const navigate = useNavigate()

    return (<>
        <div className="job">
            <img className="logo" src={item.logo} alt="" />
            <div className="texts">
                <h4>{item.position}</h4>
                <h5>{item.company}</h5>
                <h6>{item.level}</h6>
                <p>{item.role} </p>
                <button className="btn btn-dark" onClick={()=>{
                    navigate("/"+item.id)
                }} >Show Details</button>
            </div>
        </div>
    </>);
}
 
export default Job;