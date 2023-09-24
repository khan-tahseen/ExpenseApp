import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ExpenceItem from './ExpenceItem';

export default function ExpenceList({ expences }) {
  const renderExpenceItem = (itemData) => {
    return <ExpenceItem {...itemData.item} />
  };

  return (
    <FlatList
      data={expences}
      renderItem={renderExpenceItem}
      keyExtractor={(item) => item.id}
    />
  );
}
