/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MainParams } from '../../navigators/MainNavigator';

interface Props extends NativeStackScreenProps<MainParams, 'ContainerDetail'> {}

const Component = (props: Props) => {
  const { route: {params: container} } = props;

  const {tipo, img, numero, origen, destino, temperatura, estado, observaciones} = container;
  
  return (
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <Text style={styles.TopBarText}>Details</Text>
        </View>

        <View>
          <Text>Tipo de Contenedor:</Text>
          <Text>{tipo}</Text>
        </View>
        <Image 
          style={styles.containerImg }
          source={{uri: img}}
        />
        <View>
          <Text>Num Contenedor:{numero}</Text>

          <Text>Origen: {origen}</Text>

          <Text>Destino: {destino}</Text>

          <Text>Temperatura: {temperatura}</Text>

          <Text>Estado: {estado}</Text>

          <Text>Observaciones:</Text>
          <Text>{observaciones}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Container:{
      borderBottomWidth: 0.5,
      width: "100%",
      height: "100%",
      alignItems: 'center',
      backgroundColor: '#14213d'
  },
  containerImg:{
      width: 120,
      height: 90,
  },
  TopBar:{
    alignItems: 'flex-start',
    width: "100%",
    backgroundColor: "#023047",
  },
  TopBarText:{
    fontSize: 25,
    fontWeight: "500",
    margin: 2,
    marginLeft: 5,
    color: "#fff"
  }
});
export default Component;
