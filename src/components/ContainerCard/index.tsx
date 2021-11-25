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
                <View style={styles.ImgView}>
                    <Image
                        style={styles.containerImg}
                        source={{uri: img}}
                    />
                    </View>
                <View style={styles.InfoContainer}>
                    <Text style={styles.Texto}>Tipo: {tipo}</Text>
                    <Text style={styles.Texto}>#: {numero}</Text>
                    <Text style={styles.Texto}>Origen: {origen}</Text>
                    <Text style={styles.Texto}>Destino: {destino}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#F7ECCE",
        borderRadius: 20,
        margin: 5,
    },
    ImgView:{
        alignItems:'center',
        width: "40%",
        backgroundColor: "#fff"
    },
    containerImg:{
        width: 120,
        height: 90,
    },
    InfoContainer:{
        width: "60%",
        paddingLeft: "5%",
        padding: 6,
    },
    Texto:{
        fontWeight: '500',
        color: "#000",
    }
});
export default Component;