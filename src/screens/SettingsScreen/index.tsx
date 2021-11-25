/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;
  const logOut = () => {
    navigation.navigate('Login');
  };
  return (
    <View style = {styles.Container}>
      <View style= {styles.TopBar}>
      <Text style = {styles.TopBarText}> Settings </Text>
      </View>
      <View>
      <Image
          style={styles.Img}
          source={{uri: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png'}}
        />
      <Text style = {styles.Textemail}>Email@</Text>
      <Text style = {styles.TextAccount}>My Account</Text>
      </View>
      <View style = {styles.Card}>
      <Text style = {styles.TextCard}>Email                                        <MaterialCommunityIcons name="chevron-right-circle" color={'black'} size={20}/> </Text>
      <Text style = {styles.TextCard}>Facebook                                 <MaterialCommunityIcons name="chevron-right-circle" color={'black'} size={20}/> </Text>
      <Text style = {styles.TextCard}>Change Password                    <MaterialCommunityIcons name="chevron-right-circle" color={'black'} size={20}/> </Text>
      </View>
      <Text style = {styles.Text}>About</Text>
      <View style = {styles.Card}>
      <Text style = {styles.TextCard}>Terms                                      <MaterialCommunityIcons name="chevron-double-right" color={'black'} size={20}/> </Text>
      <Text style = {styles.TextCard}>About Us                                 <MaterialCommunityIcons name="chevron-double-right" color={'black'} size={20}/> </Text>
      <Text style = {styles.TextCard}>Privacy                                    <MaterialCommunityIcons name="chevron-double-right" color={'black'} size={20}/> </Text>
      </View>
      <Text style = {styles.Text}> <MaterialCommunityIcons name="phone-in-talk" color={'black'} size={20}/> Contact</Text>
      <Text style = {styles.TextNoti}> <MaterialCommunityIcons name="bell-circle" color={'black'} size={20}/> Notifications</Text>
      <TouchableOpacity style = {styles.LoginBtn} onPress={logOut}>
        <Text style= {styles.TextButton}> Log Out </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    borderBottomWidth: 0.5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#277da1',
},
  TopBar:{
    alignItems: 'flex-start',
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
  Card:{
    backgroundColor: 'white',
    borderRadius: 14,
    width: '80%',
    height: '15%',
    padding: 20,
    marginVertical: -50,
  },
  Img:{
    borderRadius: 100,
    width: 100,
    height: 100,
    marginVertical: 20,
    marginLeft: -150,
  },
  TextCard:{
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    color: 'black',
  },
  Textemail:{
    alignContent: 'center',
    marginTop: -80,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  TextAccount:{
    marginVertical: 60,
    marginLeft: -100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  Text:{
    marginVertical: 60,
    marginLeft: -200,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  TextNoti:{
    marginVertical: -85,
    marginLeft: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  LoginBtn:{
    backgroundColor: '#fca311',
    padding: 10,
    borderRadius: 5,
    marginTop: 150,
  },
  TextButton:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Component;