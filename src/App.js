import {  AppBar, createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import { BrowserRouter as Routers, Route } from "react-router-dom";

import ButtonAppBar from './components/Bar';
import Login from './Login/Login'

import { DataProvider } from './datacontext';
import { SnackbarProvider } from 'notistack';
import Forgot from './Login/Forgot';
import Sign from './Login/Sign';
import MyHome from './components/myHome';
import Console from './Console/console';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#f4f8fd',
      paper: 'cadetblue',
    },
  },}
);
function App() {
  return (
   
    <div className="App">
    <DataProvider>
    
    <ThemeProvider  theme={darkTheme}>  
    <SnackbarProvider>
        
        <Routers>
        <ButtonAppBar/>
        <Route path="/home" component={MyHome}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgot" component={Forgot}></Route>
        <Route path="/sign" component={Sign}></Route>
        <Route path="/console" component={Console}></Route>
        </Routers>
        </SnackbarProvider>
    </ThemeProvider>
   
    </DataProvider>
    </div>
  );
}

export default App;
