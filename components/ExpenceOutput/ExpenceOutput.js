import { View } from 'react-native';
import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenceSummary from './ExpenceSummary';

export default function ExpenceOutput() {
  return (
    <View>
      <ExpenceSummary />
      <ExpenceList />
    </View>
  );
}
