import { TabPanel } from "@mui/lab";
import { Divider, Paper, Typography,TextField, Grid,Button, Autocomplete, Card } from "@mui/material";
import ButtonBases from "../components/Cards";
import Things from "../components/Things";
import Wiper from "./Answer";
import SwipeableTextMobileStepper from "./Answer";
import Fav from "./Fav";
import LabTabs from "./Questions";
import ColorTabs from "./Questions";

const Screen =()=>{
    return (<div>

<Paper style={{height:"120%",color:"black",background:"whitesmoke"}} className="mt-3">
       
        
       
   

        <div style={{width:"100%",height:"100%",overflowX:"scroll"}}>
           <LabTabs></LabTabs>
            <Divider></Divider>
        </div>
</Paper>



    </div>);
}
export default Screen;