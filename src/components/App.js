import React, { Component } from "react";
import Board from "./Board";

function CheckWinner(squares) {
  const win_patch = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < 8; i++) {
    const [a, b, c] = win_patch[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner:squares[a],
        line:[a,b,c]
      }
    }
  }
  return null;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick = (i) => {
    const history=this.state.history;
    const squares = this.state.squares.slice();
    if (squares[i] || CheckWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    
    //undo button
    if(this.state.squares.length>0){
      document.querySelector('i').style.visibility="visible";
      document.querySelector('i').addEventListener('click',(e)=>{
        document.querySelectorAll('button').forEach((curr)=>{
          curr.className="";
        });
        this.setState({
          squares:Array(9).fill(null),
          xIsNext:true
        });
      });
    }
    else{
      document.querySelector('i').style.visibility="hidden";
    }
  };

  render() {
    return (
      <div className="game">
        <h1>TicTacToe</h1>
        <Board
          square={this.state.squares}
          onClick={this.handleClick}
          player={this.state.xIsNext}
          checkWinner={CheckWinner}
        />
      </div>
    );
  }
}

export default App;
