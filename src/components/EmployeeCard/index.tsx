import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EmployeeInterface } from '../../interfaces/EmployeesInterface/EmployeesInterface';

interface Props{
    empleado: EmployeeInterface
}

const Component = (props: Props) => {
    const {empleado} = props;
    const {nombre, num_trabajador, edad, foto} = empleado;

    const image = foto == "Regina" ? require('../../assets/Regina.jpeg') : null 
    || foto == "Alejandra" ? require('../../assets/Alejandra.jpeg') : null
    || foto == "Joshua" ? require('../../assets/Joshua.jpeg') : null
    || foto == "Javier" ? require('../../assets/Javier.jpeg') : null
    || foto == "Oskar" ? require('../../assets/Oskar.jpg') : null;

    return (
        <View style={styles.Container}>
            <View style={styles.InfoText}>
                <Text style={styles.Text}>Nombre: {nombre}</Text>
                <Text style={styles.Text}>No. Trabajador: {num_trabajador}</Text>
                <Text style={styles.Text}>Edad: {edad}</Text>
            </View>
            <View style={styles.ImgI}>
                <Image
                    style={styles.containerImg}
                    source={image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        width: "98%",
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        paddingRight: 0,
        justifyContent: 'space-between'
    },
    containerImg:{
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    InfoText:{
        justifyContent: 'center',
        width: "70%",
        paddingLeft: 20,
    },
    Text:{
        fontSize: 15,
        fontWeight: '500',
    },
    ImgI:{
        width: "30%"
    }
});
export default Component;