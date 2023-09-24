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

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenceOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTintColor: 'white',
      }}
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
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenceOverview"
            component={ExpenceOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpence" component={ManageExpence} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
