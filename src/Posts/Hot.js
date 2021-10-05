import { useContext, useEffect } from "react";
import { DataContext } from "../datacontext";

const Hot = () =>{
    const {hotData} =useContext(DataContext);
    const {setHot}=useContext(DataContext);
    useEffect(
        ()=>{
         fetch("https://react-rest-spring.herokuapp.com/getPackRefresh")
        .then(response => response.json())
        .then(data => setHot(data))
        .catch((err)=>console.log(err));
         
        }
    ,[setHot])
        console.log(hotData);
return (<>

    

    </>)
}
export default Hot;