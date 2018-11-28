import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../Header/Header.jsx';
import MonsterForm from './../MonsterForm/MonsterForm.jsx';
import MonsterList from './../MonsterList/MonsterList.jsx';

class App extends Component {
  state = {
      newMonster : {
        name : '',
        rate : 0
      },
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
  handleSubmit = (event)=>{
    event.preventDefault(); // stop reloading DOC when submit
    let newMonster = this.state.newMonster; // get values from inside state.newMonster which is change from input

    this.setState({ // add the inputs into monsterList array
      monsterList: [
        ...this.state.monsterList, // spread
        newMonster
      ]
    })

    this.setState({ // reset input
      newMonster : {
        name: '',
        rate: 0
      }
    })
  }
  handleNameChange = (event)=>{
    this.setState({
      newMonster : {
        ...this.state.newMonster, // spread
        name : event.target.value
      }
    })
  }
  handleRateChange = (event)=>{
    this.setState({
      newMonster : {
        ...this.state.newMonster, // spread
        rate : event.target.value
      }
    })
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
    // let listItemHtml = this.state.monsterList.map((monster, i) => <li key={i}>{monster.name} scariness rating {monster.rate}</li>);
    // map second property that can be access = i
    // returning a new array, not changing existing array
    return (
      <div>
        <Header />
        <p>Lets get a list on the DOM</p>
        <MonsterForm newMonster={this.state.newMonster} monsterList={this.state.monsterList} handleNameChange={this.handleNameChange} handleRateChange={this.handleRateChange} handleSubmit={this.handleSubmit}/>

        {/* if there is only this.state.monsterList it will shove all of them together */}
        {/* {this.state.monsterList} */}
        {/* {JSON.stringify(this.state.monsterList)}  */}

        {/* taco / monsterlist is data passing to MonsterList */}

        <pre>
          <p>{this.state.newMonster.name} scariness rating is {this.state.newMonster.rate}</p>
          {JSON.stringify(this.state.newMonster)}

          <MonsterList taco={1} monsterList={this.state.monsterList}/>

          {/* {listItemHtml} // removed from App.jsx */}
        </pre>
      </div>
    );
  }
}

export default App;
