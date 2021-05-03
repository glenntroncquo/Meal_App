import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { CustomButton } from '../../components/Login/CustomButton';

import firebase from '../../utils/firebase';

export const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstName] = useState('');
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
            console.log(firebase.auth().currentUser);
          } else {
            setError('Unable to register. Please try again');
          }
        });
    }
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ marginBottom: 16 }}>Welkom op de login pagina</Text>
      <TextInput placeholder='Naam' onChangeText={setName} />
      <TextInput placeholder='Voornaam' onChangeText={setFirstName} />
      <TextInput placeholder='Email' onChangeText={setEmail} />
      <TextInput placeholder='Wachtwoord' onChangeText={setPassword} />
      <TextInput
        placeholder='Herhaal wachtwoord'
        onChangeText={setConfirmation}
      />
      <Text>{error}</Text>

      <CustomButton name='Sign up' customfunction={handlePress} />
    </View>
  );
};
