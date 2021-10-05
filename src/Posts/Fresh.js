import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import FreshPost from "./FreshPost";


const Fresh = () =>{
       
    const {freshData} =useContext(DataContext);
    const {setFresh}=useContext(DataContext);
    useEffect(
        ()=>{
         fetch("https://react-rest-spring.herokuapp.com/getPack")
        .then(response => response.json())
        .then(data => setFresh(data))
        .catch((err)=>console.log(err))
         
        }
    ,[setFresh])
    
      
    const [val,setVal]=useState("");
    if(freshData!=undefined){setVal(freshData)}   
    return (<>
 
    {val}
    </>)
}
export default Fresh;