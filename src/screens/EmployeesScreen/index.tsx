/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import EmployeeCard from '../../components/EmployeeCard';
import { EmployeeInterface } from '../../interfaces/EmployeesInterface/EmployeesInterface';
import EmployeesInfo from '../../models/Employees/employees';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const onSelectedEmployee = (employee: EmployeeInterface) =>{
    navigation.navigate('EmployeeDetail', employee)
  }

  const renderEmployees = EmployeesInfo?.map((empleado, index)=>{
      return <EmployeeCard 
      key={`empleado-${index}`}
      empleado={empleado}
      />;
    });


  return (
      <ScrollView>{renderEmployees}</ScrollView>
  );
};

export default Component;
