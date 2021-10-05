import { Divider, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { DataContext } from "../datacontext";

const FreshPost = ()=>{
    const{freshData}=useContext(DataContext);
    const [val,setVal]=useState(undefined);  
    useEffect(
        ()=>{if(val==undefined){if(freshData!=undefined){setVal(

            freshData.map((post)=>{
                <Paper>
                    <Divider/>
                    {post.place}
                    <Divider/>
                    {post.comments}
        
                </Paper>
        
            })


        )}}}
    )
    return(<>
        {val}
    
    </>)
}
export default FreshPost;