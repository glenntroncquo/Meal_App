import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { TextInput } from 'react-native-gesture-handler';

import { CustomButton } from '../../components/Login/CustomButton';
import colors from '../../styles/colors';
import { textInputStyle, textStyles } from '../../styles/generics';
import { LoginStyle } from '../../styles/LoginStylesheet/LoginStyle';

import firebase from '../../utils/firebase';

export const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');

  const handlePress = () => {
    if (password !== confirmation) setError('Wachtwoorden komen niet overeen');
    else {
      setError('');
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          if (error.code.includes('auth/weak-password')) {
            setError('Please enter a stronger password');
          } else if (error.code.includes('auth/email-already-in-use')) {
            setError('Email in already in use');
          } else {
            setError('Unable to register. Please try again');
          }
        });
    }
  };

  return (
    <View style={LoginStyle.container}>
      <View style={{ marginTop: -68 }}>
        <Image
          source={require('../../assets/logo-meal.png')}
          style={[LoginStyle.image]}
        />

        <Text
          style={[
            textStyles.header,
            { color: colors.normalGreen, marginBottom: 32 },
          ]}
        >
          Meal App
        </Text>
      </View>
      <TextInput
        placeholder='johndoe@gmail.com'
        style={textInputStyle.normal}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='password'
        style={textInputStyle.normal}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder='confirm password'
        style={textInputStyle.normal}
        onChangeText={setConfirmation}
      />
      <Text style={LoginStyle.error}>{error}</Text>

      <CustomButton name='Sign up' customfunction={handlePress} />
    </View>
  );
};
