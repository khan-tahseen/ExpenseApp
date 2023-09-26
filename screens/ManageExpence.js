import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';

export default function ManageExpence({ route, navigation }) {
  const editedExpenceId = route.params?.expenceId;
  const isEditing = !!editedExpenceId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expence' : 'Add Expence',
    });
  }, [navigation, isEditing]);

  function cancleHandler() {}

  function confirmHandler() {}

  function deleteExpenceHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancleHandler}>
          Cancle
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    marginTop: 16,
    paddingTop: 8,
    alignItems: 'center',
  },
});
