import React, { useEffect, useRef, useState } from "react";
function Hooks (){
const [bike,setbike]= useState("rx100")
const [count,setcount]= useState(0)
const [show,setshow]= useState(true)
const inputElement =useRef()
useEffect(()=>{
  setTimeout (()=>{
    inputElement.current.focus();
  },3000)
},[])

const changeBike =(clr="ns200")=>{
    console.log("color updated")
   setbike(clr)
}
const inputFocus =()=>{
    // inputElement.current.focus();
}
    return(
        <div>
            <h2>my fav bike is {bike} </h2>
            <h2>my counter {count} </h2>
            <button onClick={()=>changeBike("royalenfeild")}>change bike to royalenfeild</button>
            <button onClick={()=>changeBike()}>change bike to ns200</button>
            <button onClick={()=>setbike("ktm")}>change bike to ktm</button>
            <button onClick={()=>setcount(count+1)}>count</button>
            {show && <HeaderRemove/> }
            <button onClick={()=>setshow(false)}>remove</button>
            <div>
                <input type="text" className="mt-4"ref={inputElement}/>
                <button onClick={inputFocus}>focus</button>
            </div>
             </div>
    )
}
function HeaderRemove (){
   useEffect (()=>{
    // return(()=>{
    //     alert("heading will be removed")
    // })
   }  )
    return(
        <h3>hello</h3>
    )}
export default Hooks;