import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ButtonBases from "./Cards";
import Things from "./Things";


const Destination = () => {
    const [mydata,setData] = useState(<Typography variant="subtitle1" color="InfoText">Dynomix is an optimising suite that allows you to choose a destination and optimise the cost of the trip based on a variety of factors such as activities,best seasons and many more.</Typography>)
    const{isLogged}=useContext(DataContext);
    useEffect(() => {
        if(isLogged){setData(<Things></Things>);}
    },[isLogged])



const {ID} =useContext(DataContext);
const {MyImages}=useContext(DataContext);
const [title,setTitle]=useState("Dynomix");
const [myimage,setImage]=useState("You plan your trips we will optize it ");
const [about,setAbout]=useState("We will optimize the trips for you , you just have to select the destination, how and where leave it to us.");
useEffect(() => {
    setHead();

});
const {setHeading}=useContext(DataContext);


const setHead=()=>{
    MyImages.forEach(e=>{
        if(e.id==ID){
            
            setTitle(e.title);
            setImage(e.url);
            setAbout(e.about);
            if(isLogged){setHeading(e.title)}
        }
    });
}

return(<>
<Container>

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="stretch"
>
<Grid item>
<Paper style={{background:"purple",color:"white"}} className="mt-2">
    <h3>{title.toUpperCase()}</h3>
    
    </Paper>
</Grid>
<Grid item>
<Paper  className="mt-2"style={{color:"black",background:"whitesmoke"}} >
{mydata}
    <br/>
    <div className="mt-3 mb-3">{about}</div>
   
    <br/>
</Paper>
</Grid>

</Grid>
<ButtonBases></ButtonBases>
</Container>
</>)
}
export default Destination;