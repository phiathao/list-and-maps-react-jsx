import React, { Component } from 'react';

class MonsterForm extends Component {

    state = {
        newMonster : {
          name : '',
          rate : 0
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault(); // stop reloading DOC when submit
        // console.log('handling submit');
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
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.newMonster.name} placeholder='Monster Name' onChange={this.handleNameChange} />
                    <input type='number' value={this.state.newMonster.rate} placeholder='Scariness Rating' onChange={this.handleRateChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default MonsterForm;