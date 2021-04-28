import React from 'react';
import { Image, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../styles/colors';

interface Props {
  uri: string;
  name: string;
  id: number;
}

export const ResultComponent: React.FC<Props> = ({ uri, name, id }) => {
  const handlePress = (id: number) => {
    console.log(id);
    // navigation.navigate('MealDetail');
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        marginTop: 32,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'center',
        height: 72,
        padding: 16,
      }}
      onPress={() => handlePress(id)}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 64, height: 64, borderRadius: 50, marginRight: 16 }}
      />
      <Text style={{ fontSize: 16, color: 'black' }}>
        {name.substring(0, 25)}
      </Text>

      <AntDesign
        name='right'
        size={24}
        color={colors.darkGreen}
        style={{ paddingTop: 3, marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  );
};