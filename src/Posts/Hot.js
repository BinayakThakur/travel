import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import HotPost from "./HotPost";

const Hot = () =>{

    const {setHot}=useContext(DataContext);
    
 

    useEffect(
        ()=>{
         fetch("https://iforum-backend.herokuapp.com/getPackRefresh")
        .then(response => response.json())
        .then(data => setHot(data))
        .catch((err)=>console.log(err));
         
        
        }
    ,[setHot])

    
 
       
return (<>

    <HotPost></HotPost>

    </>)
}
export default Hot;