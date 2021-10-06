import { createContext, useState } from "react";
;


export const DataContext = createContext();

export const DataProvider = props =>{
    

    const[hotData,setHot]=useState(undefined);
    const[freshData,setFresh]=useState(undefined);






   const[myComments,setComments]=useState("Select post to see the comments");





    const[time,setTime]=useState(new Date().toLocaleString());
    const[finChanges,setFinal]=useState(undefined);
    const[myChanges,setChanges]=useState([]);
    const[row,setRows]=useState([]);
    const[list,setList]=useState(0);
    const[isLogged,setLogged]=useState(true);
    const[ID,setID]=useState("XXXX");
   
    const[heading,setHeading]=useState("");
    const[revChange,setRev]=useState(undefined);
    return (
        <DataContext.Provider value={{
            
            hotData,setHot,freshData,setFresh,myComments,setComments,
            ID,setID,isLogged,setLogged,list,setList,row,setRows,myChanges,setChanges,setFinal,finChanges,revChange,setRev,heading,setHeading}}>
            {props.children}
        </DataContext.Provider>
    )
}