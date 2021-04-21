import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const OptionsComponent: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'space-around', marginBottom:16}}>
      <Option iconName='food-croissant' />
      <Option iconName='food-croissant' />
      <Option iconName='food-croissant' />
    </View>
  );
};

interface OptionProps {}

const Option: React.FC<{ iconName: any }> = ({ iconName }) => {
  return (
    <TouchableOpacity style={{alignItems:'center'}}>
      <View
        style={{
          width: 70,
          height: 70,
          backgroundColor: colors.opacityGreen,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={40}
          color={colors.darkGreen}
        />
      </View>
        <Text style={{color: colors.darkGreen, marginTop:8}}>fastfood</Text>
    </TouchableOpacity>
  );
};
