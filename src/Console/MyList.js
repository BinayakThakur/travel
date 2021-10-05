import { TextField, Toolbar } from "@mui/material";
import { Formik } from "formik";
import { useContext } from "react";
import { DataContext } from "../datacontext";

const MyList = ()=>{
    const { list }=useContext(DataContext);
    
    const {setRows}=useContext(DataContext);
    let rows = [];
    const {myChanges}=useContext(DataContext);
    const {setChanges}=useContext(DataContext);
    const {finChanges}=useContext(DataContext);
    const {setFinal}=useContext(DataContext);
    
    function changes(e){
        var val=e.split("($$$$)!)(*(!#*(!&#)(@()@(()!DJD");
        let fin=myChanges;
        fin[val[1]-1]=val[0].replace(/,/g, '');
        setChanges(fin);
    }
    
    for (var i = 0; i < list; i++) {
        
        rows.push(<Toolbar><TextField  key={i} label="Enter to-do" onChange={(evt) => { changes(evt.target.value+"($$$$)!)(*(!#*(!&#)(@()@(()!DJD"+i)}}  variant="standard" fullWidth></TextField></Toolbar>);
        
    }
  
    return (<>
    {rows}

    
    </>);
}
export default MyList;