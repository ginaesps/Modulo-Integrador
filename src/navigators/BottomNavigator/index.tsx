import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import ContainerScreen from '../../screens/ContainerScreen'
import EmployeesScreen from '../../screens/EmployeesScreen'
import SettingsScreen from '../../screens/SettingsScreen'

const Component = () => {
  return (
    <Tab.Navigator
      initialRouteName="Containers"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Containers"
        component={ContainerScreen}
      />

      <Tab.Screen
        name="Employees"
        component={EmployeesScreen}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default Component;