import { View, Text } from 'react-native';
import React from 'react';

export default function ExpenceSummary({ expences, periodName }) {
  const expenceSum = expences.reduce((sum, expence) => {
    return sum + expence.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>`${expenceSum.toFixed(2)}`</Text>
    </View>
  );
}
