import { Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';
import Things from '../components/Things';
import { DataContext } from '../datacontext';
import Fav from './Fav';
import Screen from './Screen';
const Console = ()=>{
    const {finChanges}=useContext(DataContext);
    const {setFinal}=useContext(DataContext);
    const{revChange}=useContext(DataContext);
    const{setRev}=useContext(DataContext);
   
  
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