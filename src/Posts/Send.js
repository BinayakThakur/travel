import { Button, TextField, Toolbar } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../datacontext";
import MyPost from "./MyPost";

const Send = () =>{
    const [Heading,setHeading]=useState("");
    const [Body,setBody]=useState("");
    function heading(e){
        setHeading(e);
    }
    function body(e){
        setBody(e);
    }
    function send(){
        fetch()
        .catch((err)=>console.log(err))
    }
    return (<>
    
        <Toolbar>
            <TextField fullWidth label="Enter heading" variant="standard" onChange={(evt)=>{heading(evt.target.value)}}></TextField>
        </Toolbar>
        <Toolbar>
            <TextField fullWidth label="Enter post" className="mt-3" multiline variant="standard" onChange={(evt)=>{body(evt.target.value)}}></TextField>
        </Toolbar>
        <Toolbar className="mt-4 mb-4">
            <Button variant="outlined" onClick={send}>send</Button >  <Button variant="outlined" className="ms-3" >save</Button>
        </Toolbar>
        <MyPost></MyPost>
    </>)
}
export default Send;