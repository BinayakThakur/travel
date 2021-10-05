import { Button, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Grid } from "@mui/material"
const FreshPost = ()=>{
    const {freshData}=useContext(DataContext);  
    const [val,setVal]=useState(undefined);
    var rows=[]
    function setLike(e){
        fetch("https://react-rest-spring.herokuapp.com/like?postID="+e)
        .catch((err)=>console.log(err))
    }
    function setDis(e){
        fetch("https://react-rest-spring.herokuapp.com/dislike?postID="+e)
        .catch((err)=>console.log(err))
    }
    useEffect(

        ()=>{
            if(val==undefined){
                if(freshData!=undefined){
                    console.log(freshData);
                    freshData.map(
                        (e)=>{
                            rows.push(
                                <div>
                                <Paper style={{background:"whitesmoke"}} className="mt-4" elevation={7}>
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
                                <Button onClick={()=>{setLike(e.postID)}}><ThumbUpIcon/></Button>
                                <Button onClick={()=>{setDis(e.postID)}}><ThumbDownIcon/></Button>
                                <Button><AddCommentIcon/></Button>
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
export default FreshPost;