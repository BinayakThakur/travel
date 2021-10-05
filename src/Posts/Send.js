import { Button, TextField, Toolbar } from "@mui/material";
import MyPost from "./MyPost";

const Send = () =>{
    return (<>
    
        <Toolbar>
            <TextField fullWidth label="Enter heading" variant="standard"></TextField>
        </Toolbar>
        <Toolbar>
            <TextField fullWidth label="Enter post" className="mt-3" multiline variant="standard"></TextField>
        </Toolbar>
        <Toolbar className="mt-4 mb-4">
            <Button variant="outlined">send</Button>  <Button variant="outlined" className="ms-3">save</Button>
        </Toolbar>
        <MyPost></MyPost>
    </>)
}
export default Send;