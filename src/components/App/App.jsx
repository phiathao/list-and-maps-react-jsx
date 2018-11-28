import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
    event.preventDefault();
    console.log('handling submit');
    let newMonster = this.state.newMonster;

    this.setState({
      monsterList: [
        ...this.state.monsterList,
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
    let listItemHtml = this.state.monsterList.map((monster, i) => <li key={i}>{monster.name} scariness rating {monster.rate}</li>);
    // map second property that can be access = i
    // returning a new array, not changing existing array
    return (
      <div>
        <p>Lets get a list on the DOM</p>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.newMonster.name} placeholder='Monster Name' onChange={this.handleNameChange} />
        <input type='number' value={this.state.newMonster.rate} placeholder='Scariness Rating' onChange={this.handleRateChange}/>
        <input type="submit"/>
        </form>
        {/* if there is only this.state.monsterList it will shove all of them together */}
        {/* {this.state.monsterList} */}
        {/* {JSON.stringify(this.state.monsterList)}  */}
        <pre>
          <p>{this.state.newMonster.name} scariness rating is {this.state.newMonster.rate}</p>
          {JSON.stringify(this.state.newMonster)}
          {listItemHtml}
        </pre>
      </div>
    );
  }
}

export default App;
