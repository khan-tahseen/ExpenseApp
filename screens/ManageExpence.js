import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function ManageExpence({route, navigation}) {
  const editedExpenceId = route.params?.expenceId;
  const isEditing = !!editedExpenceId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expence' : 'Add Expence'
    })
  }, [navigation, isEditing])

  return (
    <View>
      <Text>ManageExpence</Text>
    </View>
  )
}