import React, { Component } from 'react';

class MonsterForm extends Component {
    /* 
    State
    ------
    Box for Data
    Shared w/ other children Via props

    Props
    ------
    Passed to component
    NOT SAVED


    */
    
    // handleSubmit = (event)=>{
    //     event.preventDefault(); // stop reloading DOC when submit
    //     // console.log('handling submit');
    //     let newMonster = this.state.newMonster; // get values from inside state.newMonster which is change from input
    
    //     this.setState({ // add the inputs into monsterList array
    //       monsterList: [
    //         ...this.state.monsterList, // spread // does not work no monsterList in this state
    //         newMonster
    //       ]
    //     })
    
    //     this.setState({ // reset input
    //       newMonster : {
    //         name: '',
    //         rate: 0
    //       }
    //     })
    //   }
    //   handleNameChange = (event)=>{
    //     this.setState({
    //       newMonster : {
    //         ...this.state.newMonster, // spread
    //         name : event.target.value
    //       }
    //     })
    //   }
    //   handleRateChange = (event)=>{
    //     this.setState({
    //       newMonster : {
    //         ...this.state.newMonster, // spread
    //         rate : event.target.value
    //       }
    //     })
    //   }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.props.newMonster.name} placeholder='Monster Name' onChange={this.handleNameChange} />
                    <input type='number' value={this.props.newMonster.rate} placeholder='Scariness Rating' onChange={this.handleRateChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default MonsterForm;