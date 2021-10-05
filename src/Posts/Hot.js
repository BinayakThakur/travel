import { useEffect } from "react";

const Hot = () =>{

    useEffect(
        ()=>{
          fetch("https://react-rest-spring.herokuapp.com/getPack").then((response)=>{
              response.json()
          }).then((response)=>{
              console.log(response);
          }).catch((error)=>{
              console.log(error)
          })  
        }
    )

return (<>

    

    </>)
}
export default Hot;