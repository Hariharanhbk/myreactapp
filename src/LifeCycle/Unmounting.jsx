import React from "react";

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      show: true,
    };
  }
   removeBtn=()=>{
    this.setState({
      show:false
    })
   }

  render() {
    return (
      <div>
        {this.state.show && <MyHeader color={this.state.color}></MyHeader>}
        <button onClick={this.removeBtn}>remove</button>
      </div>
    );
  }
  
}
class MyHeader extends React.Component{
  componentWillUnmount(){
    alert("will be removed")
  }
  render(){
    return(
    <h2>my fav color is {this.props.color}</h2>
  )}
    }

export default Unmounting;
