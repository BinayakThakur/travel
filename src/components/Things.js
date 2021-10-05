import { Button, Toolbar } from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../datacontext";

const Things=()=>{
    const history = useHistory();
    function changeHeading(){
        history.push("/console");
    }
    
    return (
        <>
        
        <Button variant="outlined" className="mt-3 ms-3 mb-2" onClick={changeHeading}>Todo</Button>
        <Button variant="outlined" className="mt-3 ms-3 mb-2">Favourite</Button>
  
        
        
        </>

    );
}
export default Things;