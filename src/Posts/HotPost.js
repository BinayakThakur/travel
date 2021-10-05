import { Divider, Paper } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../datacontext";

const HotPost = ()=>{
    const{hotData}=useContext(DataContext);
    
    return(<>
    {hotData.map((post)=>{
        <Paper>
            <Divider/>
            {post.place}
            <Divider/>
            {post.comments}

        </Paper>

    })}
    
    </>)
}
export default HotPost;