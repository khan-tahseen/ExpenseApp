import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenceSummary from './ExpenceSummary';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenceOutput({ expences, expencePeriod }) {
  return (
    <View style={styles.container}>
      <ExpenceSummary expences={expences} periodName={expencePeriod} />
      <ExpenceList expences={expences} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
