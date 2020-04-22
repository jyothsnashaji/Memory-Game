import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Titles, sources } from "./Titles";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.state = {
      highest: 0,
      score: 0,
      clicked: [],
    };
  }
  gameOver() {
    this.setState({
      score: 0,
      clicked: [],
    });
  }
  handleOnClick(val) {
    let clicked = this.state.clicked;
    if (clicked.includes(val)) {
      alert("YOU LOST!!");
      this.gameOver();
    } else {
      if (clicked.length + 1 === sources.length) {
        alert("YOU WON!!");
        this.gameOver();
      } else
        this.setState({
          highest:
            clicked.length + 1 > this.state.highest
              ? clicked.length + 1
              : this.state.highest,
          score: this.state.score + 1,
          clicked: clicked.concat([val]),
        });
    }
  }
  render() {
    return (
      <div>
        <div>
          <div className="navbar">
            <button onClick={this.gameOver}>NEW GAME</button><br></br>
            <h3>SCORE: {this.state.score} 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
            HIGHEST: {this.state.highest}</h3>
          </div>
        </div>
        <Titles onClick={this.handleOnClick} />
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
