import React from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { buttonStyle } from '../../styles/generics';

interface Props {
  name: string;
  nav?: string;
  navigation?: any;
  customfunction?: Function;
}

export const CustomButton: React.FC<Props> = ({
  name,
  nav,
  navigation,
  customfunction,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        customfunction ? customfunction() : navigation.navigate(nav)
      }
      style={[buttonStyle.login]}
      activeOpacity={0.8}
    >
      <Text style={{ color: 'white', fontSize: 22 }}>{name}</Text>
    </TouchableOpacity>
  );
};
