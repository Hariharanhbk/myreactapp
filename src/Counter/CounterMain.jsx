import React from "react";
import Counter from "./Counter";

class CounterMain extends React.Component {
  constructor() {
    super();
    this.state = {
      countAll: 0,
    };
  }
  incrementALL =(incValue)=>{
    this.setState({
        countAll:this.state.countAll+incValue 
    })
  }
  decrementALL =(incValue)=>{
    if(this.state.countAll>0){
      this.setState({
        countAll:this.state.countAll-incValue 
    })
    }
  }
  reset = ()=>{
    this.setState({
        countAll:0
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Counter</h1>
        <Counter inc={1} incrementALL={this.incrementALL} 
        decrementALL={this.decrementALL}></Counter>
        <Counter inc={10}incrementALL={this.incrementALL}
         decrementALL={this.decrementALL}></Counter>
        <Counter inc={100}incrementALL={this.incrementALL}
        decrementALL={this.decrementALL}></Counter>
        <h3 className="count-All">{this.state.countAll}</h3>
        <button className="btn btn-warning"onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default CounterMain;
