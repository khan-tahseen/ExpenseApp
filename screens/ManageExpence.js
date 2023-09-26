import { View, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';
import { ExpencesContext } from '../store/expences-context';
import ExpenceForm from '../components/ManageExpence/ExpenceForm';

export default function ManageExpence({ route, navigation }) {
  const expencesCtx = useContext(ExpencesContext)
  const editedExpenceId = route.params?.expenceId;
  const isEditing = !!editedExpenceId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expence' : 'Add Expence',
    });
  }, [navigation, isEditing]);

  function cancleHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expencesCtx.updateExpence(editedExpenceId, {
        description: 'Update Expence Item!',
        amount: 12.88,
        date: new Date('2023-9-23')
      })
    } else {
      expencesCtx.addExpence({
        description: 'Add New Expence item',
        amount: 22,
        date: new Date('2023-9-25')
      });
    }
    navigation.goBack();
  }

  function deleteExpenceHandler() {
    expencesCtx.deleteExpence(editedExpenceId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenceForm />
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
    marginTop: 16
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
