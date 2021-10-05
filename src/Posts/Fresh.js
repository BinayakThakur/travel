import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import FreshPost from "./FreshPost";


const Fresh = () =>{
  
    const {setFresh}=useContext(DataContext);
    useEffect(
        ()=>{
         fetch("https://react-rest-spring.herokuapp.com/getPack")
        .then(response => response.json())
        .then(data => setFresh(data))
        .catch((err)=>console.log(err))

        }   
        
    ,[setFresh])
    
    
    return (<>
    <FreshPost></FreshPost>

    </>)
}
export default Fresh;