import React from "react";
class Updating extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
    };}
  changeColor = (clr) => {
    this.setState({
      color: clr,
    });
  };
  // static getDerivedStateFromProps(props,state){
  //     return{
  //     color: props.color
  //   }
  //   }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <h3>my fav color is {this.state.color}</h3>
        <h2 id="prevColor"></h2>
        <button onClick={() => this.changeColor("yellow")}>change</button>
      </div>
    );}
  getSnapshotBeforeUpdate(props, prestate) {
    document.getElementById(
      "prevColor"
    ).textContent = `previous color is ${prestate.color}`;
    return null;
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log("rendered");
    }, 3000);
  }
}
export default Updating;
