import React, { useState, version } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { textStyles } from '../../../styles/generics';
import { WeekDay } from './WeekDay';

export const WeekChoice: React.FC<{ handleDay: Function }> = ({
  handleDay,
}) => {
  return (
    <View>
      <Text style={[textStyles.semi, { marginBottom: 16 }]}>
        Select day to add meal
      </Text>
      <WeekDay handleDay={handleDay} name='Monday' dayIndex={0} />
      <WeekDay handleDay={handleDay} name='Tuesday' dayIndex={1} />
      <WeekDay handleDay={handleDay} name='Wednesday' dayIndex={2} />
      <WeekDay handleDay={handleDay} name='Thursday' dayIndex={3} />
      <WeekDay handleDay={handleDay} name='Friday' dayIndex={4} />
      <WeekDay handleDay={handleDay} name='Saturday' dayIndex={5} />
      <WeekDay handleDay={handleDay} name='Sunday' dayIndex={6} />
    </View>
  );
};
