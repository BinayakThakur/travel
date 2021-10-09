import { Paper, Typography } from "@mui/material";
import { typography } from "@mui/system";
import { useContext } from "react";
import { DataContext } from "../datacontext";
import LabTabs from "./TabPanel";


const Screen = ()=>{
    
    const {loggedUser} = useContext(DataContext);
    
    return (<>
    
        <Paper className="mt-4">
        <Typography variant="subtitle1">Welcome : {loggedUser}</Typography>
        </Paper>
    
    
    </>)
}
export default Screen;