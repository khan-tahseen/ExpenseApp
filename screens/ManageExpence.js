import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constants/styles';

export default function ManageExpence({ route, navigation }) {
  const editedExpenceId = route.params?.expenceId;
  const isEditing = !!editedExpenceId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expence' : 'Add Expence',
    });
  }, [navigation, isEditing]);

  function deleteExpenceHandler() {}

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            size={34}
            onPress={deleteExpenceHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  deleteContainer: {
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    marginTop: 16,
    paddingTop: 8,
    alignItems: 'center',
  },
});
