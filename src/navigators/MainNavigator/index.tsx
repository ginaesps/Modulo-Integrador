/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContainerDetailScreen from '../../screens/ContainerDetailScreen';
import ContainerScreen from '../../screens/ContainerScreen';
import EmployeesScreen from '../../screens/EmployeesScreen';
import LoginScreen from '../../screens/LoginScreen';
import SplashScreen from '../../screens/SplashScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { ContainerInterface } from '../../interfaces/ContainerInterface/ContainerInterface';
import { EmployeeInterface } from '../../interfaces/EmployeesInterface/EmployeesInterface';
import EmployeeDetailScreen from '../../screens/EmployeeDetailScreen';

export type MainParams = {
  Splash: undefined,
  Login: undefined,
  Home: undefined,
  ContainerDetail: ContainerInterface;
  EmployeeDetail: EmployeeInterface;
}

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Container" component={ContainerScreen} />
      <Stack.Screen name="ContainerDetail" component={ContainerDetailScreen} />
      <Stack.Screen name="Employees" component={EmployeesScreen} />
      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default Component;
