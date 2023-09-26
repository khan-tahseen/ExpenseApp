import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

export default function Input({ label, textInputConfig }) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 8,
    borderRadius: 8,
    fontSize: 14,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
