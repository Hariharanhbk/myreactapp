import React, { useState } from "react";
import FunCounter from "./FunCounter";

function MainFunCounter (){
const [countAll,setcountAll] = useState(0);

const incrementALL =()=>{
   setcountAll (countAll+1)
}
return(
    <div className="App">
         <FunCounter inc={1} incrementALL={incrementALL}/>
         <FunCounter inc={10} incrementALL={incrementALL}/>
         <FunCounter inc={100} incrementALL={incrementALL}/>
         <button>{countAll}</button>
    </div>
)
}
export default MainFunCounter;