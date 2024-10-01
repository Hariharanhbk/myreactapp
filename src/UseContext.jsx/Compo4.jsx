import { useContext } from "react";
import { UserContext } from "react-router-dom";


function Compo4 (){
    
const name = useContext(UserContext);
    return(
        <h1> my name is {name}</h1>     
    )
    }
    
    export default Compo4;