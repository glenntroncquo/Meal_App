import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';

import colors from '../../styles/colors';
import { textStyles } from '../../styles/generics';
import { LoginStyle } from '../../styles/LoginStylesheet/LoginStyle';
import { CustomButton } from '../../components/Login/CustomButton';

import firebase, { auth } from '../../utils/firebase';

const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleSignOut = () => {
    firebase.auth().signOut();
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

      <CustomButton name='Logout' customfunction={handleSignOut} />
    </View>
  );
};

export default Profile;
