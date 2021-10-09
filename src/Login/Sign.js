import { Alert, Autocomplete, Button, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import {Link} from 'react-router-dom';
import Things from "../components/Things";
const top100Films = [
    {label:"Who was your superhero?"},
    {label:"Which place you were born?"},
    {label:"Which is your favourite movie?"},
    {label:"Which is your favourite holiday destination?"},
  ];

const Sign =()=>{
    const [update,setUpdate]=useState(<div></div>)

    
    const signform={
        user : '',
        password:'',
        date:''
    }
    const signSubmit = (e)=>{

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(e),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch("https://react-rest-spring.herokuapp.com" + '/mregister', reqOptions)
            .then(res => res.json() )
            .then( 
                setUpdate(<Alert severity="success" className="ms-4">Posted!</Alert>)
            )
            .catch(err => {
             
            })
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
                
                  style={{width:"80%"}}
                 />
                 <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="confirm"
                  label="confirm"
                  type="password"
                  fullWidth

                
                  style={{width:"80%"}}
                 /><br/>
                <TextField
                className="mt-4"
                id="date"
                onChange={handleChange} value={values.date}
                variant="standard"
                label="Birthday"
                type="date"
                defaultValue="2000-12-31"
                sx={{ width: "78%" }}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <br/>
                 <Button variant="contained" className="mt-3" type="submit">
                     Sign up
                 </Button>
                 
                 </form>
    
            ) }

            </Formik>
                        
                         </>
        );
    }
    const [content,setContent]=useState(login());
    return(<Container>
        
        <Paper style={{width:"100%",height:"440px",background:"whitesmoke"}} class="mt-3"> 
        
        {content}
        <Divider style={{width:"0%"}} className="mb-5"/>
        {update}
        </Paper>
        
        
    </Container>)
}
export default Sign;