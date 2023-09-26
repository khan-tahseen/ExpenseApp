import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import ManageExpence from './screens/ManageExpence';
import RecentExpence from './screens/RecentExpence';
import AllExpences from './screens/AllExpences';
import { GlobalStyles } from './constants/styles';
import IconButton from './UI/IconButton';
import ExpencesContextProvider from './store/expences-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenceOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTintColor: 'white',
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpence');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpences"
        component={RecentExpence}
        options={{
          title: 'Recent Expences',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpences"
        component={AllExpences}
        options={{
          title: 'All Expences',
          tabBarLabel: 'All Expences',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <ExpencesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="ExpenceOverview"
              component={ExpenceOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpence"
              component={ManageExpence}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpencesContextProvider>
    </React.Fragment>
  );
}
