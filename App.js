import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScheduleList from './ScheduleList';

export default function App() {
  return (
    <View style={styles.container}>
      <ScheduleList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8d0de',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
