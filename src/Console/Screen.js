import { Card, Paper, Typography } from "@mui/material";
import { typography } from "@mui/system";
import { useContext } from "react";
import Things from "../components/Things";
import { DataContext } from "../datacontext";
import LabTabs from "./TabPanel";


const Screen = ()=>{
    
    const {loggedUser} = useContext(DataContext);
    
    return (<>
    
        <Paper className="mt-4">
        <Card>
        <iframe width="100%" height="900"  src="https://projects.icij.org/investigations/pandora-papers/power-players/en/?region=asia" frameborder="0" allowfullscreen></iframe>
        
        </Card>
        
        </Paper>
     
    
    
    </>)
}
export default Screen;