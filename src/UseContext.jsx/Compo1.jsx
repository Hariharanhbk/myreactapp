import { createContext, useState } from "react";
import Compo2 from "./Compo2";
 export const UserContext = createContext();
function Compo1 (){
    const [name,setName]=useState("hari");
return(
    
    <UserContext.Provider value={name}>
<Compo2></Compo2>
    </UserContext.Provider>
)
}

export default Compo1;