import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenceSummary({ expences, periodName }) {
  const expenceSum = expences.reduce((sum, expence) => {
    return sum + expence.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenceSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  sum: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
