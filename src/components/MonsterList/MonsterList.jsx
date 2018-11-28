import React, { Component } from 'react';

class MonsterList extends Component {
    render(){
        // console.log(this.props);
        let listItemHtml = this.props.monsterList.map((monster, i) => <li key={i}>{monster.name} scariness rating {monster.rate}</li>);
        return ( 
            listItemHtml
        );
    }
}

export default MonsterList;