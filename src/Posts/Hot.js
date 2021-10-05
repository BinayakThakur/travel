import { useEffect } from "react";

const Hot = () =>{

    useEffect(
        ()=>{
         fetch("https://react-rest-spring.herokuapp.com/getPack")
        .then(response => response.json())
        .then(data => console.log(data));
         
        }
    )

return (<>

    

    </>)
}
export default Hot;