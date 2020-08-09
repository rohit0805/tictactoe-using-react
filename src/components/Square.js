import React, { Component } from "react";

class Square extends Component {
  handleButton=(e)=>{
    if(!e.target.className)
      e.target.className+="no-hover";
    this.props.onClick();
  }
  render() {
    return (
      <div className="square">
        <button onClick={(e)=>{this.handleButton(e)}}>{this.props.value}</button>
      </div>
    );
  }
}

export default Square;
