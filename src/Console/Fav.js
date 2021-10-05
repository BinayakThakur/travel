import { Button, Grid, Paper, TextField, Typography ,Divider, Checkbox} from "@mui/material";
import { maxHeight } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ThumbUp from '@mui/icons-material/ThumbUp'
import ThumbDown from '@mui/icons-material/ThumbDown'
import Package from "./Packages";

const Fav =()=>{
    const {finChanges} =useContext(DataContext);
    const [vals,setVal]=useState("");
    var rows = [];
    //useEffect(
    //  ()=>{
    //    if(finChanges!=undefined){
    //   setVal(finChanges.map((image) => (
    //          <Grid item className="mt-3">
    //         <div  className="ms-2 mt-2">
    //          <table class="table table-dark">
      //        <thead>
        //        <th scope="col" className="table-info"> <Typography variant="h6">{image.place}</Typography> </th>
          //    </thead>
            //  <tbody>
              //<tr><th scope="row" className="table-success"><Typography>{image.author}</Typography></th></tr>
    //          <tbody>
      //        <tbody>
        //      {image.comments.map(e=>{rows.push(<tr><th scope="row"><Typography variant="overline">{e}</Typography></th></tr>)})}{rows}{rows.splice(0,rows.length)}
          //    </tbody>
            //  </table>
              // <Button><ThumbUp></ThumbUp></Button><Button><ThumbDown></ThumbDown></Button>
                      
                              
                  
           //   </div >
               
           //   <Divider></Divider>
             
           //   </Grid>

           //  )))}
    //  },[setVal]
   // );

    return(<>
        <Typography variant="overline"></Typography>
        
        <Divider></Divider>
        <Grid 
        
        container
        direction="column-reverse"
        justifyContent="center"
        alignItems="stretch"
        
        >
          
        
        {vals}
        <Divider/>
       
        </Grid>
        
        <Divider className="mb-3 mt-3"></Divider>
        

</>)
}
export default Fav;