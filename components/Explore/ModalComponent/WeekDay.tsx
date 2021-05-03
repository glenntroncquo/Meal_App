import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { textStyles } from '../../../styles/generics';

export const WeekDay: React.FC<{
  dayIndex: number;
  handleDay: Function;
  name: string;
}> = ({ dayIndex, handleDay, name }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleDay(dayIndex);
      }}
    >
      <Text style={[textStyles.semi, { textAlign: 'center', marginBottom: 8 }]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
