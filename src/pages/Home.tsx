import "../styles/Home.css"
import useAsync from "../hooks/useAsync";
import { useEffect, useState } from "react";
import { Poster } from "../interfaces/details";
import Job from "../components/Job";
import { MAIN_URL } from "../libs/contsnts";

const Home = () => {

    const {data , loading , run} = useAsync(MAIN_URL)
    const [search , setSearch] = useState<Poster[]>([])

    useEffect(()=>{
        run()
    },[])

    useEffect(()=>{
        setSearch(data)
    },[data])

    if(loading){
        return <div>Loading..</div>
    }
    return (<>
        <div className="search">
            <input type="search" placeholder="Search.." className="form-control" onChange={e => {
                setSearch(data.filter(item => item.position.toLowerCase().includes(e.target.value.toLowerCase())))
            }}/>
        </div>
        <div className="home">
        {search?.map((item : Poster , index : number) => (
            <Job item={item} key={index}/>
        ))}
        </div>
    </>)
    
}
 
export default Home;