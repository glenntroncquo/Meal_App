import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Homestylesheet } from '../../styles/HomeStylesheet/Homestylesheet';

export const OptionsComponent: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
      }}
    >
      <Option iconName='food-croissant' searchTerm={'fastfood'} />
      <Option iconName='food-croissant' searchTerm={'fastfood'}/>
      <Option iconName='food-croissant' searchTerm={'fastfood'}/>
    </View>
  );
};

const Option: React.FC<{ iconName: any, searchTerm: string }> = ({ iconName, searchTerm }) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }}>
      <View
        style={Homestylesheet.optionStyle}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={40}
          color={colors.darkGreen}
        />
      </View>
      <Text style={{ color: colors.darkGreen, marginTop: 8 }}>fastfood</Text>
    </TouchableOpacity>
  );
};
