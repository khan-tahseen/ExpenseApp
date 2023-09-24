import { View } from 'react-native';
import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenceSummary from './ExpenceSummary';

const DUMMY_EXPENCE = [
  {
    id: 'e1',
    description: 'A pair of Jeans',
    amount: 12.78,
    date: new Date('2022-10-14'),
  },
  {
    id: 'e2',
    description: 'A pair of Shirt',
    amount: 8.99,
    date: new Date('2021-10-17'),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 15.66,
    date: new Date('2022-9-12'),
  },
];

export default function ExpenceOutput({ expences, expencePeriod }) {
  return (
    <View>
      <ExpenceSummary expences={DUMMY_EXPENCE} periodName={expencePeriod} />
      <ExpenceList expences={DUMMY_EXPENCE} />
    </View>
  );
}
