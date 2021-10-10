import { Button, TextField, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../datacontext";
import MyPost from "./MyPost";
import Alert from '@mui/material/Alert';

const Send = () =>{
    const [feed,setFeed]=useState("");
    const [Heading,setHeading]=useState("");
    const [Body,setBody]=useState("");
    function heading(e){
        setHeading(e);
    }
    function body(e){
        setBody(e);
    }
    const {loggedUser}=useContext(DataContext);
    function send(){
        fetch("https://react-rest-spring.herokuapp.com/post?place="+Heading+"&author="+{loggedUser}+"&comments="+Body+"&time="+(new Date().toLocaleString()))
        .then(setFeed(

            <Alert severity="success" className="ms-4">Posted!</Alert>

        ))
        .catch((err)=>console.log(err));
    }
    return (<>
    
        <Toolbar>
            <TextField fullWidth label="Enter heading" variant="standard" onChange={(evt)=>{heading(evt.target.value)}}></TextField>
        </Toolbar>
        <Toolbar>
            <TextField fullWidth label="Enter post" className="mt-3" multiline variant="standard" onChange={(evt)=>{body(evt.target.value)}}></TextField>
        </Toolbar>
        <Toolbar className="mt-4 mb-4">
            <Button variant="outlined" onClick={send}>send</Button >  <Button variant="outlined" className="ms-3" >save</Button>{feed}
        </Toolbar>
        <MyPost></MyPost>
    </>)
}
export default Send;