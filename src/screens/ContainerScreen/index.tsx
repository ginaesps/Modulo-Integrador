/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ContainerCard from '../../components/ContainerCard';
import { ContainerInterface } from '../../interfaces/ContainerInterface/ContainerInterface';
import ContainersInfo from '../../models/Containers/containers'

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const onSelectedContainer = (container: ContainerInterface) =>{
    navigation.navigate('ContainerDetail', container)
  }

  const renderContainers = ContainersInfo?.map((contenedor, index)=>{
      return <ContainerCard 
      key={`contenedor-${index}`}
      contenedor={contenedor}
      onClick={onSelectedContainer}/>;
    });


  return (
      <ScrollView style={styles.Container}>{renderContainers}</ScrollView>
  );
};

const styles = StyleSheet.create({
  Container:{
    backgroundColor: "#14213d",
  }
})

export default Component;
