import { createContext, useState } from "react";
import { images } from "./components/Data";


export const DataContext = createContext();

export const DataProvider = props =>{
    const[time,setTime]=useState(new Date().toLocaleString());
    const[finChanges,setFinal]=useState(undefined);
    const[myChanges,setChanges]=useState([]);
    const[row,setRows]=useState([]);
    const[list,setList]=useState(0);
    const[isLogged,setLogged]=useState(true);
    const[ID,setID]=useState("XXXX");
    const[MyImages,setImages]=useState(images);
    const[heading,setHeading]=useState("");
    const[revChange,setRev]=useState(undefined);
    return (
        <DataContext.Provider value={{MyImages,setImages,ID,setID,isLogged,setLogged,list,setList,row,setRows,myChanges,setChanges,setFinal,finChanges,revChange,setRev,heading,setHeading}}>
            {props.children}
        </DataContext.Provider>
    )
}