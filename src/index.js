import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar} from './Navbar';
import {Titles} from './Titles';
class Game extends React.Component{

  constructor(props){
    super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
    this.gameOver=this.gameOver.bind(this);
    this.state={
      highest:0,
      score:0,
      clicked:[]
    }
  }
  gameOver(){
    this.setState({
      score:0,
      clicked:[]
    })

  }
  handleOnClick(val){
    let clicked=this.state.clicked;
    if(clicked.includes(val)) 
    {
      this.gameOver();
    }
    else{
      this.setState({
        highest: clicked.length +1 >this.state.highest ? clicked.length+1 : this.state.highest,
        score:this.state.score+1,
        clicked:clicked.concat([val]),
      });
    }
  }
  render(){
    return( <div>
      <Navbar highest={this.state.highest} score={this.state.score} play={this.gameOver} text="Play Again"/>
      <Titles onClick={this.handleOnClick} />
    </div>);
  }
}
ReactDOM.render(<Game />,document.getElementById('root'));

