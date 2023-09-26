import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenceSummary from './ExpenceSummary';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenceOutput({ expences,expencePeriod, fallbackText}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expences.length > 0) {
    content = <ExpenceList expences={expences} />;
  }
  return (
    <View style={styles.container}>
      <ExpenceSummary expences={expences} periodName={expencePeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
