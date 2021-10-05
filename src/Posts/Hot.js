import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import HotPost from "./HotPost";

const Hot = () =>{
    const {hotData} =useContext(DataContext);
    const {setHot}=useContext(DataContext);
    const [val,setVal]=useState("");
 

    useEffect(
        ()=>{
         fetch("https://react-rest-spring.herokuapp.com/getPackRefresh")
        .then(response => response.json())
        .then(data => setHot(data))
        .catch((err)=>console.log(err));
         
          if(val==""){if(hotData!=undefined){setVal(hotData)}}
        }
    ,[setHot,setVal])

    
 
       
return (<>

    {val}

    </>)
}
export default Hot;