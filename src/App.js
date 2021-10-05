import {  createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import { BrowserRouter as Routers, Route } from "react-router-dom";

import ButtonAppBar from './components/Bar';
import myHome from './components/myHome';
import Login from './Login/Login'
import DataCheck from './components/dataCheck';
import { DataProvider } from './datacontext';
import Destination from './components/Destination';
import Forgot from './Login/Forgot';
import Sign from './Login/Sign';
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
      
        <Routers>
        <ButtonAppBar/>
      
        <Route path="/home" component={myHome}/>
        <Route path="/login" component={Login}/>
        <Route path="/destination" component={Destination}/>
        <Route path="/forgot" component={Forgot}></Route>
        <Route path="/sign" component={Sign}></Route>
        <Route path="/console" component={Console}></Route>
        </Routers>
      
    </ThemeProvider>
    </DataProvider>
    </div>
  );
}

export default App;
