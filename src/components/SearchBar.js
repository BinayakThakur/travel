import { Button, Container, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { useContext } from 'react';
import {Link,useHistory} from 'react-router-dom';
import LabTabs from "../Console/TabPanel";
import { DataContext } from '../datacontext';
import Slide from "./Slide";
const Search =()=>{
    let history=useHistory();
    const{isLogged}=useContext(DataContext);
    const search=()=>{
        if(isLogged){
            return(<>
              <LabTabs></LabTabs>
    </>)
        }
        else{
            return(
                <>
                <Slide></Slide>
              
                </>
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