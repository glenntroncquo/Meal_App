import React, { useState, version } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import colors from '../../styles/colors';
import { textStyles, textInputStyle, buttonStyle } from '../../styles/generics';


export const Login: React.FC = () => {
  const [isFocusedEmail, setFocusEmail] = useState(false);
  const [isFocusedPassword, setFocusPassword] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 120 }}>
      <Image
        source={require('../../assets/logo-meal.png')}
        style={{ height: 128, width: 128, marginBottom: 16 }}
      />

      <Text style={[textStyles.header, { color: colors.normalGreen, marginBottom: 32 }]}>
        Meal App
      </Text>

      <TextInput
        placeholder='johndoe@gmail.com'
        style={isFocusedEmail ? textInputStyle.active : textInputStyle.normal}
        onFocus={() => setFocusEmail(true)}
        onBlur={() => setFocusEmail(false)}
      />
      <TextInput
        placeholder='Password'
        style={
          isFocusedPassword ? textInputStyle.active : textInputStyle.normal
        }
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        secureTextEntry={true}
      />

      {/* <TouchableOpacity>
          <Text>
              Forgot password??
          </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={buttonStyle.login}>
        <Text style={{ color: '#FFFF' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          width: Dimensions.get('screen').width - 64,
          justifyContent: 'center',
          margin: 'auto',
          marginTop: 32,
        }}
      >
        <Text>Don't have an account yet? </Text>
        <Text style={{color:colors.darkGreen}}>Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};
