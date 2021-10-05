import { Button, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { Formik } from "formik";
import Autocomplete from '@mui/material/Autocomplete';


import ButtonBases from "../components/Cards";
import ComboBox from "./Secret";
import {Link} from 'react-router-dom';
import Things from "../components/Things";
const top100Films = [
    {label:"Who was your superhero?"},
    {label:"Which place you were born?"},
    {label:"Which is your favourite movie?"},
    {label:"Which is your favourite holiday destination?"},
  ];
const Forgot =()=>{
    const secret={
        email:'',
        answer:''
    }
    const secretSubmit=(e)=>{
        console.log(e);
    }
    return(
             
        <>
    
        <Container>
        

       
        <Paper style={{background:"whitesmoke",height:"300px"}} class="mt-3">
        <Formik initialValues={secret} onSubmit={secretSubmit}>
            {
                    (
                        {
                            values,handleSubmit,handleChange
                        }
                    )=>(
                        <form onSubmit={handleSubmit}>
        <TextField  onChange={handleChange} className="mt-4 ms-3" fullWidth id="email" label="Enter Email" variant="standard" style={{width:"80%"}}/><br/>
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
          className="mt-3 ms-3"
          variant="standard"
          id="answer"
          label="Enter Answer"
          fullWidth
          autoComplete="current-password"
          style={{width:"80%"}}
          onChange={handleChange}
         /><br/>
         <Button variant="contained" type="submit" className="mt-3">
             Reset Password 
         </Button>
        </form>
                    )

            }
        
        </Formik>
        </Paper>
        <ButtonBases></ButtonBases>
        </Container>
         </>

    );
}
export default Forgot;