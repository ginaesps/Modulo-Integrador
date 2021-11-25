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
        margin: 10,
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
        backgroundColor: "#277da1",
        padding: 6,
    },
    Texto:{
        color: "#fff",
    }
});
export default Component;