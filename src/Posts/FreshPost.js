import { Button, Divider, Paper, Snackbar, TextField, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Grid } from "@mui/material"
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router";
import SendIcon from '@mui/icons-material/Send';
const FreshPost = ()=>{

    

   
    
    const [postComment,setComment]=useState("Click to see comment");
    const comment=(e)=>{
        setComment(e);
       
    }



    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {freshData}=useContext(DataContext);  
    const [val,setVal]=useState(undefined);
    var rows=[]
    
    function setLike(e){
        fetch("https://react-rest-spring.herokuapp.com/like?postID="+e)
        .then( enqueueSnackbar('Liked',{
            variant:"success",
            autoHideDuration: 1500,
        }))
        .catch((err)=>console.log(err))
       
    }
    function setDis(e){
        fetch("https://react-rest-spring.herokuapp.com/dislike?postID="+e)
        .then( enqueueSnackbar('Disliked',{
            variant:"error",
            autoHideDuration: 1500,
        }))
        .catch((err)=>console.log(err))
    }
    useEffect(

        ()=>{
            if(val==undefined){
                if(freshData!=undefined){
                
                    freshData.map(
                        (e)=>{
                            rows.push(
                                <div>
                                <Paper style={{background:"whitesmoke"}} className="mt-4" elevation={7}>
                                    <Toolbar><Typography variant="h5" style={{fontFamily:"Hind Siliguri"}}>{e.place}</Typography></Toolbar>
                                    <Divider/>
                                    <Typography style={{fontFamily:"Hind Siliguri"}} className="mt-4 mb-4">{e.comments}</Typography>   
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