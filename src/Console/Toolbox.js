import { CalendarToday } from "@mui/icons-material";
import { Button, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../datacontext";

const Toolbox = ()=>{
    const { list }=useContext(DataContext);
    const { setList }=useContext(DataContext);
    const {rows}=useContext(DataContext);
    function add(){
        setList(list+1);
    }
    const {myChanges}=useContext(DataContext);
    const {setChanges}=useContext(DataContext);
    function remove(){
        if(list!=0){
            var changes=myChanges;
            changes.pop();
            setChanges(changes);
            setList(list-1);
        }
    }
    const[comment,setComment]=useState("");
    const {heading}=useContext(DataContext);
    

    
    const{time}=useContext(DataContext);

    function send(){

        if(comment==""){
            alert("Please add comments");
        }
        else if(myChanges.length<1){
            alert("Please enter to-do")
        } 
        else{
           console.log(time.toString());
           //fetch("localhost:8080?place="+heading+"&author="+comment+"&comments="+myChanges+"&time="+time).catch(console.log("Error"));
        }
    }

    function changeComment(e){
        setComment(e);
    }
    const {setHeading}=useContext(DataContext);
    function changeHead(e){
        setHeading(e)
    }
    return (<>
     
    <Typography variant="h5" align="left" className="ms-4 mb-2">{heading}</Typography><Toolbar><Button variant="outlined" className="ms-2" onClick={add}>Add</Button><Button variant="outlined" className="ms-2" onClick={remove}>Remove</Button><Button variant="outlined" className="ms-2" onClick={send}>Submit</Button></Toolbar>
    <Toolbar><TextField label="Change Heading"  fullWidth variant="standard" onChange={(evt)=>{changeHead(evt.target.value)}}></TextField></Toolbar>
    <Toolbar><TextField label="Enter Author" variant="standard" onChange={(evt)=>{changeComment(evt.target.value)}} fullWidth></TextField></Toolbar>
    
    
    </>)
}
export default Toolbox;