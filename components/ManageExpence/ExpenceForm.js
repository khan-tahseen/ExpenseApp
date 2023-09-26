import { StyleSheet, View } from 'react-native';
import React from 'react';
import Input from './Input';

export default function ExpenceForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <View style={styles.inputRow}>
        <Input
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          label={'Date'}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
