import React from "react";
import './css/Component1.css'
import styled from "styled-components";

const MYSTYLE = styled.h3`
color:red

`

class Component1 extends React.Component{
render(){
    return(
        <div>
            <h3 style={{color:"black",backgroundColor:"white"}}>hello this is class component</h3>
            <MYSTYLE>hello this is styled </MYSTYLE>
        </div>
    );
}
}






export default Component1;