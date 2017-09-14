import React, { Component } from 'react';
import Lesson from './Lesson';

class ListA extends Component {
    constructor(props) {
        super(props)
        
    }

    render () {
        return(

            <li>
            <span>{this.props.onset.uid}</span>
            <span>{this.props.onset.gotGold}</span>
            <span>{this.props.onset.gotSilver}</span>
            <span>{this.props.onset.gotCopper}</span>
            <span>{this.props.onset.giftCount}</span>
            <span>{this.props.onset.avatar}</span>
            <span>{this.props.onset.username}</span>
            <span>{this.props.onset.upLiveCode}</span>
            <span>{this.props.onset.gender}</span>
            <span>{this.props.onset.grade}</span>
            <span>{this.props.onset.countryCode}</span>
            </li>
        )
    }

}

export default ListA;



