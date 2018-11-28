import React, { Component } from 'react';

class MonsterForm extends Component {
    /* DATA HAVE TO LIVE IN PARENT APP
    State
    ------
    Box for Data
    Shared w/ other children Via props

    Props
    ------
    Passed to component
    NOT SAVED

    */
    
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' value={this.props.newMonster.name} placeholder='Monster Name' onChange={this.props.handleNameChange} />
                    <input type='number' value={this.props.newMonster.rate} placeholder='Scariness Rating' onChange={this.props.handleRateChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default MonsterForm;