import { useContext } from "react";
import { DataContext } from "../datacontext";

const DataCheck=()=>{
    const { MyImages }=useContext(DataContext);

    console.log(MyImages);
    return(<>
        useContext is working
    </>);
}
export default DataCheck;