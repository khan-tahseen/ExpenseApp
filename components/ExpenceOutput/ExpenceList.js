import { View, Text, FlatList } from 'react-native';
import React from 'react';

export default function ExpenceList({ expences }) {
  const renderExpenceItem = (itemData) => {
    return <Text>{itemData.item.description}</Text>;
  };

  return (
    <FlatList
      data={expences}
      renderItem={renderExpenceItem}
      keyExtractor={(item) => item.id}
    />
  );
}
