import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';

export default function ExpenceForm() {
  const [inputValue, setInputValue] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const { amount, date, description } = inputValue;

  function inputChangeHandler(inputIdentifer, enteredValue) {
    setInputValue((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifer]: enteredValue,
      };
    });
  }

  return (
    <View>
      <View style={styles.inputRow}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: amount,
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: description,
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
