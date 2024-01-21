import { Poster, PosterDetails } from "../interfaces/details";
import { useState } from "react";
import { MAIN_URL } from "../libs/contsnts";

const useAsync = (url : string) => {
    
    const [data , setData] = useState<Poster[]>([])
    const [loading , setLoading] = useState<boolean>(true)
    const [detail , setDetail] = useState<PosterDetails>({
        company : "",
        logo : "",
        position : "",
        role : "",
        level : "",
        id : 0,
        languages : [],
        location : "",
        tools : [],
    })

    function run(){
        if(url === MAIN_URL){
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(()=> {
                setLoading(false)
                console.log("Error 404")
            })
        }else{
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDetail(data)
                setLoading(false)
            })
            .catch(()=>{
                setLoading(false)
                console.log("Error 404")
            })
        }
    }

    return {data , loading , run , detail}
    
}
 
export default useAsync;