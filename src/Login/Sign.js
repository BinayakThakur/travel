import { Autocomplete, Button, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import ButtonBases from "../components/Cards";
import ComboBox from "./Secret";
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
    

    
    const signform={
        user : '',
        password:'',
        confirm:'',
        dob:'',
        answer:''
    }
    const signSubmit = (e)=>{
        console.log(e);
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
                  onChange={handleChange} value={values.confirm}
                
                  style={{width:"80%"}}
                 /><br/>
                <TextField
                className="mt-4"
                id="dob"
                onChange={handleChange} value={values.dob}
                variant="standard"
                label="Birthday"
                type="date"
                defaultValue="2000-12-31"
                sx={{ width: "78%" }}
                InputLabelProps={{
                shrink: true,
                }}
                />
                 <center>
                <Autocomplete
                    className="mt-4"
                    disablePortal
                    className="ms-3 mt-3"
                    id="question"
                    onChange={handleChange}
                    options={top100Films}
                    sx={{ width: "80%" }}
                    renderInput={(params) => <TextField {...params} label="Choose secret question"  variant="standard"/>}
                />
                </center>
                <TextField 
                  className="mt-2 ms-3"
                  variant="standard"
                  id="answer"
                  label="Answer"
                  type="text"
                  fullWidth
                  onChange={handleChange} value={values.answer}
                 
                  style={{width:"80%"}}
                 /><br/>
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
      
        </Paper>
        <ButtonBases></ButtonBases>  
        
    </Container>)
}
export default Sign;