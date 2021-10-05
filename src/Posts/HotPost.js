import { Divider, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { DataContext } from "../datacontext";

const HotPost = ()=>{
    const{hotData}=useContext(DataContext);
    const [val,setVal]=useState(undefined);
    useEffect(
        ()=>{
            if(val==undefined){
                if(val==""){if(hotData!=undefined){setVal(
                    hotData.map((post)=>{
        <Paper>
            <Divider/>
            {post.place}
            <Divider/>
            {post.comments}

        </Paper>

    }))}}
            }
        },[setVal]
    )
    return(<>
        {val}
    
    </>)
}
export default HotPost;