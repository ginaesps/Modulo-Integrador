import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ContainerInterface } from '../../interfaces/ContainerInterface/ContainerInterface';

interface Props{
    contenedor: ContainerInterface
    onClick: (contenedor: ContainerInterface) => void;
}

const Component = (props: Props) => {
    const {contenedor, onClick} = props;
    const {tipo, numero, origen, destino, img} = contenedor;

    return (
        <TouchableOpacity onPress={() => onClick(contenedor)}>
            <View style={styles.Container}>
                <Image
                    style={styles.containerImg}
                    source={{uri: img}}
                />
                <Text>Tipo: {tipo}</Text>
                <Text>#: {numero}</Text>
                <Text>Origen: {origen}</Text>
                <Text>Destino: {destino}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container:{
        borderColor: '#e20c79',
        borderBottomWidth: 0.5,
        width: "100%",
        alignItems: 'center',
        margin: 5,
    },
    containerImg:{
        width: 120,
        height: 90,
    }
});
export default Component;