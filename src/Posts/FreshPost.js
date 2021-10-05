import { Divider, Paper } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../datacontext";

const FreshPost = ()=>{
    const{freshData}=useContext(DataContext);
    
    return(<>
    {freshData.map((post)=>{
        <Paper>
            <Divider/>
            {post.place}
            <Divider/>
            {post.comments}

        </Paper>

    })}
    
    </>)
}
export default FreshPost;