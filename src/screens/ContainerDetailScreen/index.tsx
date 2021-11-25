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

        <View style={styles.TipeContainerView}>
          <Text style={styles.TipeContainerText}>Tipo de Contenedor:</Text>
          <Text style={styles.TipeContainerText}>{tipo}</Text>
        </View>
          <Image 
            style={styles.Img}
            source={{uri: img}}
          />
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoContainerTextTitle}>Num Contenedor: 
            <Text style={styles.InfoContainerText}> {numero}</Text>
          </Text>

          <Text style={styles.InfoContainerTextTitle}>Origen: 
            <Text style={styles.InfoContainerText}> {origen}</Text>
          </Text>

          <Text style={styles.InfoContainerTextTitle}>Destino: 
            <Text style={styles.InfoContainerText}> {destino}</Text>
          </Text>

          <Text style={styles.InfoContainerTextTitle}>Temperatura: 
            <Text style={styles.InfoContainerText}> {temperatura}</Text>
          </Text>

          <Text style={styles.InfoContainerTextTitle}>Estado: 
            <Text style={styles.InfoContainerText}> {estado}</Text>
          </Text>

          <Text style={styles.InfoContainerTextTitle}>Observaciones: </Text>
            <Text style={styles.InfoContainerText}>{observaciones}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Container:{
      width: "100%",
      height: "100%",
      alignItems: 'center',
      backgroundColor: '#277da1'
  },
  TopBar:{
    alignItems: 'center',
    width: "100%",
    backgroundColor: "#023047",
  },
  TopBarText:{
    fontSize: 25,
    fontWeight: "500",
    margin: 8,
    color: "#fff"
  },
  TipeContainerView:{
    width: "80%",
    margin: 10,
    alignItems: 'center',
    backgroundColor: "#273043",
    borderWidth: 2,
    padding: 8,
  },
  TipeContainerText:{
    fontSize: 20,
    color: "#fff"
  },
  Img:{
    width: "45%",
    height: "20%",
    margin: 5,
    marginBottom: 20,
  },
  InfoContainer:{
    width: "80%",
    backgroundColor: "#2f3e46",
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
  },
  InfoContainerText:{
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  InfoContainerTextTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#84a98c',
  },
});
export default Component;
