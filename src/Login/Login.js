import { Button, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";

import {Link,useHistory} from 'react-router-dom';
import Things from "../components/Things";
import Console from "../Console/console";
import { DataContext } from "../datacontext";
import axios from "axios";
const Login =()=>{
    
    const [data,setData]=useState(false);
    const{setLogged}=useContext(DataContext);
    const{isLogged}=useContext(DataContext);
    const signform={
        user : '',
        password:''
    }
    let history = useHistory();
    const Login = props => {
        history.push("/console");
      
        }
    const signSubmit = async(e)=>{
      axios.get("http://localhost:8080/get?user="+e.user+"&password="+e.password).then((response)=>{
         if(response.data.cutefish==true){
            setLogged(true);
            Login();
        }
     });
    
       
    }
    const login=()=>{
        return (
            <>
            <Formik initialValues={signform} onSubmit={signSubmit}>

            { ({
                values,handleSubmit,handleChange
            })=>(
                <form onSubmit={handleSubmit}>
                <TextField className="mt-4 ms-3" fullWidth id="user" label="Enter ID" variant="standard" style={{width:"80%"}} onChange={handleChange} value={values.user}/><br/>
                <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange} value={values.password}
                  autoComplete="current-password"
                  style={{width:"80%"}}
                 /><br/>
                 <Button variant="contained" className="mt-3" type="submit">
                     Login
                 </Button>
                 <Link to="/forgot"><Button  variant="contained" className="mt-3 ms-2" type="button">
                     Forgot password
                 </Button></Link>
                 
                 </form>
    
            ) }

            </Formik>
                        
                         </>
        );
    }
    const [content,setContent]=useState(login());
    return(<Container>
        
        <Paper style={{width:"100%",height:"250px",background:"whitesmoke"}} class="mt-3"> 
        
        {content}
        <Divider style={{width:"0%"}} className="mb-5"/>
      
        </Paper>
     
        
    </Container>)
}
export default Login;