import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css'

class Board extends React.Component{
  constructor(props){
    super(props);
    // state es el objeto con las variabes por defecto y se cambian con setState
    this.state = {
      squares: Array(9).fill(null),
      isNextX: true,
      isFinishSquares: false
    }
  }// variables de estado

  renderSquares(i){
    return(
      <Square
        props={this.state.squares[i]}
      />
    );
  }

  render(){
    return(
      <div className="container-board">
        <div className="board-row">
          {this.renderSquares(0)}
          {this.renderSquares(1)}
          {this.renderSquares(2)}
        </div>
        <div className="board-row">
          {this.renderSquares(3)}
          {this.renderSquares(4)}
          {this.renderSquares(5)}
        </div>
        <div className="board-row">
          {this.renderSquares(6)}
          {this.renderSquares(7)}
          {this.renderSquares(8)}
        </div>
      </div>
    )
  }
}

function Square(props){
  return(
    <button className="square" value={props.value}>
      {props.value}
    </button>
  )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Board />);