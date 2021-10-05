import { Button, Container, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { useContext } from 'react';
import {Link,useHistory} from 'react-router-dom';
import { DataContext } from '../datacontext';
import Slide from "./Slide";
const Search =()=>{
    let history=useHistory();
    const{isLogged}=useContext(DataContext);
    const search=()=>{
        if(isLogged){
            return(<><Paper style={{height:"250px",color:"white",background:"whitesmoke"}} className="mt-3">
            <TextField variant="standard" fullWidth   className="mt-5" label="Take me to" style={{color:"White",width:"80%"}}></TextField>
            <Grid><Button className="mt-3" variant="contained">Let's Go</Button></Grid>
        </Paper></>)
        }
        else{
            return(
                <Slide></Slide>
            );
        }
    }
    return (
        <>
        
        {search()}
        </>
    );
}
export default Search;