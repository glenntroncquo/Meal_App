import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import firebase from '../../utils/firebase';
import colors from '../../styles/colors';
import { textStyles, textInputStyle } from '../../styles/generics';
import { CustomButton } from '../../components/Login/CustomButton';
import { LoginStyle } from '../../styles/LoginStylesheet/LoginStyle';

export const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isFocusedEmail, setFocusEmail] = useState(false);
  const [isFocusedPassword, setFocusPassword] = useState(false);

  const [email, setEmail] = useState<string>('testuser@gmail.com');
  const [password, setPassword] = useState<string>('admin123456');

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleLogin: Function = async () => {
    setErrorMsg('');
    setButtonDisabled(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setButtonDisabled(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <View style={LoginStyle.container}>
      <Image
        source={require('../../assets/logo-meal.png')}
        style={LoginStyle.image}
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
      <Text
        style={LoginStyle.error}
      >
        {errorMsg ? errorMsg : null}
      </Text>

      <CustomButton
        name='Login'
        customfunction={handleLogin}
        disabled={buttonDisabled}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={LoginStyle.signup}
        onPress={() => navigation.navigate('Sign up')}
      >
        <Text>Don't have an account yet? </Text>
        <Text style={{ color: colors.darkGreen }}>Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};
