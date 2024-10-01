import React from "react";
import "./Counter.css"
import PropTypes from 'prop-types';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        };
    }
     increment =()=>{
          console.log("inc");
        //   this.setState({
        //        count:this.state.count+this.props.inc
        //   })
          this.props.incrementALL(this.props.inc);
     }
     decrement =()=>{
        console.log("dec")
        
            // this.setState({
            //     count:this.state.count-this.props.inc
            // })
            this.props.decrementALL(this.props.inc);
    }
render(){
    return(
        <div className="Counter-outer">
            <button className="btn btn-danger" 
            onClick={this.decrement}>-{this.props.inc}</button>
            {/* <label className="p-4">{this.state.count}</label> */}
            <button className="btn btn-success" 
            onClick={this.increment}>+{this.props.inc}</button>
          
        </div>
    )
}
}
export default Counter
Counter.defaultProps={
inc:1
}
Counter.propTypes = {
    inc: PropTypes.number,
    }