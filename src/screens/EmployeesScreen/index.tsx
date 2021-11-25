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
      <View style ={styles.Container}>
        <View style= {styles.TopBar}>
          <Text style = {styles.TopBarText}> Employees </Text>
        </View>
        <ScrollView>{renderEmployees}</ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#277da1',
  },
  TopBar:{
    width: '100%',
    backgroundColor: '#023047',
  },

  TopBarText:{
      fontSize: 25,
      fontWeight: '500',
      margin: 2,
      marginLeft: 5,
      color: '#fff',
      letterSpacing: 2,
  },
})
export default Component;
