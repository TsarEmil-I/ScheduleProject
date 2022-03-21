import React, {Component} from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import ScheduleStyle from './ScheduleStyle';

class ScheduleList extends Component {
    state = {
        schedule: []
    }

    componentDidMount() {
        const events = require('./data.json').schedule;
        this.setState( {events} );
    }
    render() {
        return (
            <FlatList
            data = { this.state.events }
            renderItem = { ({item}) => <ScheduleStyle scheduleStyle = {item}/>}
            ></FlatList>
        );
    };
};

export default ScheduleList;
