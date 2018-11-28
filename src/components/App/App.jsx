import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    monsterList : ['Mike Rozdowski', 'werewolf', 'Count Chocula']
  }
  render() {
    // let listItemHtml = [];
    // for (let i =0; i<this.state.monsterList.length; i++){
    //   listItemHtml.push(<li>{this.state.monsterList[i]}</li>);
    // }
    // this.state.monsterList.forEach( function (monster){
    //   listItemHtml.push(<li>{monster}</li>);
    // });
    // let listItemHtml = this.state.monsterList.map(function(monster){
    //   return <li>{monster}</li>
    // });
    let listItemHtml = this.state.monsterList.map(monster => <li>{monster}</li>);
    // returning a new array, not changing existing array
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
