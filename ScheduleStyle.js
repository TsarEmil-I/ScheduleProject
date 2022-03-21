import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function ScheduleStyle({scheduleStyle}) {
    return (
        <View style={styles.style}>
            <Text style={styles.title}>{scheduleStyle.period} </Text>
            <Text style={styles.title}>{scheduleStyle.title} </Text>
            <Text style={styles.title}>{scheduleStyle.teacher} </Text>
            <Text style={styles.title}>{scheduleStyle.time} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        backgroundColor: '#f29538',
        flex: 1,
        padding: 17,
        margin: 12,
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        borderRadius: 30,
        textAlign: "center",
    }

});