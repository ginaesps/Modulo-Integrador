/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContainerDetailScreen from '../../screens/ContainerDetailScreen';
import ContainerScreen from '../../screens/ContainerScreen';
import EmployeesScreen from '../../screens/EmployeesScreen';
import LoginScreen from '../../screens/LoginScreen';
import SplashScreen from '../../screens/SplashScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const Component = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Container" component={ContainerScreen} />
      <Stack.Screen name="ContainerDetail" component={ContainerDetailScreen} />
      <Stack.Screen name="Employees" component={EmployeesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default Component;
