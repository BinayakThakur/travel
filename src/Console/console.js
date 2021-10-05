import { Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';
import { DataContext } from '../datacontext';
import Screen from './Screen';
const Console = ()=>{

  
    let history=useHistory();
    const{isLogged}=useContext(DataContext);
    const access=()=>{
        if(isLogged){
            return(<></>
            )
        }else{
            history.push("/home");
        }
    }
    
 return(<>
 <Container>
 <Screen></Screen>  
 </Container>
 
 
 </>)
}
export default Console;