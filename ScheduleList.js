import React, {Component} from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native';

class ScheduleList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState( {events} );
    }
    render() {
        return (
            <FlatList
            data = { this.state.events }
            renderItem = { ({item}) => <Text>{item.title} {item.teacher} {item.time}</Text>}
            ></FlatList>
        );
    };
};

export default ScheduleList;