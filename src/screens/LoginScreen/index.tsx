import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const [email, ChangeEmail] = useState("");
  const [password, ChangePassword] = useState("");
  
  useEffect(() => {
    console.log(`Email => ${email}`);
    console.log(`Password => ${password}`);
  }, [email, password]);
  
  const validate = (email2) => {
      const expression = /(?!.\.{2})^([a-z\d!#$%&'+\-\/=?^`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))(([\t]\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

      return expression.test(String(email2).toLowerCase());
  };

  const doLogin = () => {
    console.log(validate(email))
    if (email.includes('@')&& email.includes('.com')){
     if(password.length>0)
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.TSNText}>Puerto de Manzanillo</Text>
      <Image 
        source={require('../../assets/PortManzanilloLogo.png')}
        style={styles.logo}
      />
        <View style={styles.FormContainer}>
          <View style={styles.Input}>
            <TextInput
              keyboardType="email-address"
              placeholder="user@example.com"
              placeholderTextColor="#edf6f9"
              secureTextEntry={true}
              style={styles.InputPadding}
              onChangeText={value => ChangeEmail(value)}
            />
          </View>
          <View style={styles.Input}>
            <TextInput
              keyboardType="numeric"
              placeholder="*********"
              placeholderTextColor="#edf6f9"
              secureTextEntry={true}
              style={styles.InputPadding}
              onChangeText={value => ChangePassword(value)}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.LoginBtn} onPress={doLogin}>
            <Text style={styles.LoginBtnText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: "#14213d",
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  TSNText:{
    color: "#fca311",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 2,
  },
  logo:{
    height: "20%",
    width: "50%",
  },
  FormContainer:{
    backgroundColor: "#023047",
    width:"80%",
    alignItems: 'center',
    padding: 5,
    margin: 10,
    marginTop: 20,
    borderColor: '#7c98b3',
    borderWidth: 3,
    borderRadius: 20,
  },
  Input:{
    width: "80%",
    borderColor: '#accbe1',
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
  },
  InputPadding:{
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff"
  },
  ForgotText:{
    color: '#277da1',
    fontSize: 15,
    margin: 2,
    marginBottom: 10,
  },
  LoginBtn:{
    backgroundColor: '#fca311',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  LoginBtnText:{
    fontSize: 20,
    fontWeight:"600",
    letterSpacing: 2,
  },
});

export default Component;