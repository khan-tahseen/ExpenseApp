import { View } from 'react-native';
import React from 'react';
import Input from './Input';

export default function ExpenceForm() {
  function amountChangeHandler() {}

  return (
    <View>
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
      <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}
