import React from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { LoginStyle } from '../../styles/LoginStylesheet/LoginStyle';

interface Props {
  name: string;
  customfunction: Function;
  disabled?: boolean;
}

export const CustomButton: React.FC<Props> = ({
  name,
  customfunction,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={() => (disabled ? null : customfunction())}
      style={LoginStyle.buttonLogin}
      activeOpacity={disabled ? 0.3 : 0.8}
    >
      <Text style={{ color: 'white', fontSize: 22 }}>{name}</Text>
    </TouchableOpacity>
  );
};
