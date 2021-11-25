import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
        tabBarActiveTintColor: '#fca311',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Containers"
        component={ContainerScreen}
        options={{
          tabBarLabel: 'Containers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Employees"
        component={EmployeesScreen}
        options={{
          tabBarLabel: 'Employees',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Component;