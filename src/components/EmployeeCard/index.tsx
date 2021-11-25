import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EmployeeInterface } from '../../interfaces/EmployeesInterface/EmployeesInterface';

interface Props{
    empleado: EmployeeInterface
}

const Component = (props: Props) => {
    const {empleado} = props;
    const {nombre, num_trabajador, edad, foto} = empleado;

    return (
        <View style={styles.Container}>
            <Image
                style={styles.containerImg}
                source={{uri: foto}}
            />
            <Text>Nombre: {nombre}</Text>
            <Text>#: {num_trabajador}</Text>
            <Text>Edad: {edad}</Text>
        </View>
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