/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ContainerInterface } from '../../interfaces/ContainerInterface/ContainerInterface';
import contenedores from '../../models/Containers/containers';
import ContainersInfo from '../../models/Containers/containers'

interface Props extends NativeStackScreenProps<any, any> {}

const Component = () => {
  const [containers, setContainers] = useState();
  
  const getContainers = () => {
    const contenedores = ContainersInfo?.map((contenedor, index)=>{
      console.log(contenedor.destino)
    });
  };

  return (

    <View>
      <Text></Text>
    </View>
  );
};

export default Component;
