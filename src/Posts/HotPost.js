import { Divider, Paper, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Grid } from "@mui/material"
const HotPost = ()=>{
    const {hotData}=useContext(DataContext);  
    const [val,setVal]=useState(undefined);
    var rows=[]
    useEffect(

        ()=>{
            if(val==undefined){
                if(hotData!=undefined){
                    console.log(hotData);
                    hotData.map(
                        (e)=>{
                            rows.push(
                                <div>
                                <Paper  style={{background:"whitesmoke"}} className="gradient-background mt-4" elevation={7}>
                                    <Toolbar><Typography variant="h6">{e.place}</Typography></Toolbar>
                                    <Divider/>
                                    <Typography variant="overline">{e.comments}</Typography>   
                                    <Divider/>
                                    <Grid 
                                  container
                                  direction="row"
                                  justifyContent="flex-end"
                                  alignItems="center"

                                
                                >
                                    <Grid item>
                                        <Toolbar>
                                <ThumbUpIcon  /><ThumbDownIcon className="ms-2" /><AddCommentIcon  className="ms-4"></AddCommentIcon>
                                </Toolbar>
                                    </Grid>
                                </Grid>
                                </Paper>
                                <Divider/>
                            
                                </div>
                                

                            )
                        }
                    );
                    setVal(rows);   
                }
            }
        }

    );


    return(<>
        {val}
        
    </>)
}
export default HotPost;