import React from 'react';






export class Navbar extends React.Component{


    render(){
        return (<div>
            <button onClick={this.props.play}>{this.props.text}</button> 
            <div>
            Score: {this.props.score}
            Highest: {this.props.highest}
        </div>
        </div>);
    }
}