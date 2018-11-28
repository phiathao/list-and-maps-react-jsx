import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    monsterList: [
      {
        name: 'Mike Rozdowski',
        rate: 3
      },
      {
        name: 'werewolf',
        rate: 5
      },
      {
        name: 'Count Chocula',
        rate: 2
      }
    ]
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
    let listItemHtml = this.state.monsterList.map((monster, i) => <li key={i}>{monster.name} scariness rating {monster.rate}</li>);
    // map second property that can be access = i
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
