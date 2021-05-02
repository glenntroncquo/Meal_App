import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import firebase from '../../utils/firebase';
import colors from '../../styles/colors';
import { textStyles, textInputStyle } from '../../styles/generics';
import { CustomButton } from '../../components/Login/CustomButton';

export const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isFocusedEmail, setFocusEmail] = useState(false);
  const [isFocusedPassword, setFocusPassword] = useState(false);

  const [email, setEmail] = useState('testuser@gmail.com');
  const [password, setPassword] = useState('admin123456');

  const setDb = async () => {
    firebase
      .database()
      .ref('/users' + 'thetten')
      .set({
        gmail: 'thetten',
      });
  };

  const handleLogin = async () => {

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        await navigation.replace('BottomNavigator');
        // await setDb();
      })
      .catch(() => {
        console.log('Foute login');
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 120 }}>
      <Image
        source={require('../../assets/logo-meal.png')}
        style={{ height: 128, width: 128, marginBottom: 16 }}
      />

      <Text
        style={[
          textStyles.header,
          { color: colors.normalGreen, marginBottom: 32 },
        ]}
      >
        Meal App
      </Text>

      <TextInput
        placeholder='johndoe@gmail.com'
        style={isFocusedEmail ? textInputStyle.active : textInputStyle.normal}
        onFocus={() => setFocusEmail(true)}
        onBlur={() => setFocusEmail(false)}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder='Password'
        style={
          isFocusedPassword ? textInputStyle.active : textInputStyle.normal
        }
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        onChangeText={setPassword}
        secureTextEntry={true}
      />


      <CustomButton name='Login' customfunction={handleLogin} />

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          width: Dimensions.get('screen').width - 64,
          justifyContent: 'center',
          margin: 'auto',
          marginTop: 32,
        }}
        onPress={() => navigation.navigate('Sign up')}
      >
        <Text>Don't have an account yet? </Text>
        <Text style={{ color: colors.darkGreen }}>Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};
