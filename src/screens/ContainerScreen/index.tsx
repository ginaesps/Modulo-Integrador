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
      <View style ={styles.Container}>
        <View style= {styles.TopBar}>
          <Text style = {styles.TopBarText}> Containers </Text>
        </View>
        <ScrollView>{renderContainers}</ScrollView>
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
