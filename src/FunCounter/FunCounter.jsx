import React, { useState } from "react"

function FunCounter(props){
    const [count,setcount] =useState(0);

    const increment= ()=>{
       console.log("inc" )
       setcount (count+props.inc)
    }
    const decrement =()=>{
         console.log("dec")
         if(count>0){
            setcount (count-props.inc)
         }
         
    }
return(
   
    <div >
        <button className="btn btn-danger" onClick={()=>increment()} 
        >+{props.inc}</button>
        <label className="p-4">{count}</label>
        <button className="btn btn-success"onClick={()=>decrement()}>
            -{props.inc}</button>

    </div>
)

}

export default FunCounter