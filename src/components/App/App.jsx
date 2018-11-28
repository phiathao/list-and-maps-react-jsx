import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    monsterList : ['Mike Rozdowski', 'werewolf', 'Count Chocula']
  }
  render() {
    let listItemHtml = [];
    for (let i =0; i<this.state.monsterList.length; i++){
      listItemHtml.push(<li>{this.state.monsterList[i]}</li>);
    }
    return (
      <div>
        <p>Lets get a list on the DOM</p>
        {/* if there is only this.state.monsterList it will shove all of them together */}
        {/* {this.state.monsterList} */}
        {/* {JSON.stringify(this.state.monsterList)}  */}
        {listItemHtml}
      </div>
    );
  }
}

export default App;
