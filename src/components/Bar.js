import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Slide, Slider, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { DataContext } from '../datacontext';
import {useHistory} from 'react-router-dom';




export default function ButtonAppBar() {
 
  const{setLogged}=useContext(DataContext);
  let history=useHistory();
  const menu= ()=>{
    return (<>
    <Link to="/login"  underline="none" style={{ textDecoration: 'none' ,color:"white"}}><Button color="inherit">Login</Button></Link>
    <Link to="/sign"  underline="none" style={{ textDecoration: 'none' ,color:"white"}}><Button color="inherit">Sign up</Button></Link>
    </>)
  }
    const{isLogged}=useContext(DataContext);
    
    const[barMenu,setBarMenu]=React.useState(menu());
    const Logout=()=>{
      sessionStorage.removeItem("user", false);
      setLogged(false)
    }
    useEffect(() => {
      if(isLogged){
        setBarMenu(<>
        
       
        <Link to="/console"  underline="none" style={{ textDecoration: 'none' ,color:"white"}}><Button color="inherit">Console</Button></Link>
        <Button  style={{ textDecoration: 'none' ,color:"whitesmoke"}} onClick={Logout}>Log out</Button>
        </>)
      }
      else{
        setBarMenu(<>{menu()}</>)
       
        history.push("/home");
      }
    },[isLogged]);
    function HideOnScroll(props) {
        const { children } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
         
        });
    
        return (
            <Slide appear={false} direction="down" in={!trigger}>
              {children}
            </Slide>
          );
    }
      
    
  return (
    <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dynomix
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       
          </Typography>
   
         <Link to="/home"  underline="none" style={{ textDecoration: 'none' ,color:"white"}}><Button color="inherit">Home</Button></Link>
         {barMenu}
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </Box>
  );
}