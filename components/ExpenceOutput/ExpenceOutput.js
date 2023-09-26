import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenceSummary from './ExpenceSummary';
import { GlobalStyles } from '../../constants/styles';
import { DUMMY_EXPENCE } from '../../store/expences-context';


export default function ExpenceOutput({ expences, expencePeriod }) {
  return (
    <View style={styles.container}>
      <ExpenceSummary expences={DUMMY_EXPENCE} periodName={expencePeriod} />
      <ExpenceList expences={DUMMY_EXPENCE} />
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
