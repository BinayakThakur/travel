import { Button, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../datacontext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Grid } from "@mui/material"
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router";

const HotPost = ()=>{
    
    
    
    const {setComments} = useContext(DataContext);
    const {myComments} = useContext(DataContext);
    const comment=(e)=>{
        setComments(e);
        
    }


    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {hotData}=useContext(DataContext);  
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
                if(hotData!=undefined){
         
                    hotData.map(
                        (e)=>{
                            rows.push(
                                <div>
                                <Paper  style={{background:"whitesmoke"}} className="gradient-background mt-4" elevation={7}>
                                    <Toolbar><Typography Typography variant="h5" style={{fontFamily:"Hind Siliguri"}}>{e.place} by {e.author}</Typography></Toolbar>
                                    <Divider/>
                                    <Typography  style={{fontFamily:"Hind Siliguri"}} className="mt-4 mb-4">{e.comments}</Typography>   
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
                                <Button onClick={()=>{setDis(e.postID)}} ><ThumbDownIcon/></Button>
                                
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