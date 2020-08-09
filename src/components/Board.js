import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.square[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }
  render() {
    var status;
    if(this.props.checkWinner(this.props.square)){
      //console.log(document.querySelectorAll('button'));
      document.querySelectorAll('button').forEach((curr)=>{
        if(!curr.className){
          curr.className+="no-hover";
        }
      })
      status=`Winner is ${this.props.checkWinner(this.props.square).winner}`;
    }
    else if (this.props.player) {
      status = `Player turn: X`;
    } else {
      status = `Player turn: O`;
    }
    return (
      <div className="board">
        <h2>{status}</h2>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <i className="fas fa-undo"></i>
      </div>
    );
  }
}

export default Board;
