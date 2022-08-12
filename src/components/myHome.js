import { Container, Divider, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import Search from "./SearchBar";


const MyHome =()=>{
  
    const{setLogged}=useContext(DataContext);
    const{setLoggedUser}=useContext(DataContext);
    const checkLogin=()=>{
      const mydata=sessionStorage.getItem("user");

     
      setLogged(mydata);
    }
    checkLogin();
    const [mydata,setData] = useState(<Typography variant="subtitle1" color="InfoText">Interview Questions</Typography>)
    const{isLogged}=useContext(DataContext);
    useEffect(() => {
        if(isLogged){setData(<></>);}
    },[isLogged])
   
    return (
<Container>
<div className="mt-3">
    <Divider></Divider>
    </div>

    <Search></Search>
    <Paper style={{background:"whitesmoke"}}>
    {mydata}
    
    <div className="mt-3">
    <Divider></Divider>
    </div>
    </Paper>
  
    <div className="mt-3">
    <Divider></Divider>
    </div>
   
   
</Container>

    );
}
export default MyHome;