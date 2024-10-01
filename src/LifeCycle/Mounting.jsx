import React from "react";

class Mounting extends React.Component{
 constructor (props){
    super(props);
    this.state ={
        color: "white"
    }
 }
  static getDerivedStateFromProps(props,state){
    return{
    color: props.color
  }
  }
 render(){
    return(
        <h3>my fav color is {this.state.color}</h3>
    )
 }
 componentDidMount(){
    setTimeout( ()=>{
    console.log("rendered")},
     3000
    );
 }
}
export default Mounting;