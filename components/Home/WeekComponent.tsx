import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { textStyles } from '../../styles/generics';

import { Homestylesheet } from '../../styles/HomeStylesheet/Homestylesheet';

interface Props {
  dayIndex: number;
  dayOfMonth: number;
  handleClick: Function;
}

const WeekComponent: React.FC<Props> = ({ dayIndex, handleClick }) => {
  const today = new Date().getDay() - 1;
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');
  const daysOfWeek2 = new Array(
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  );

  const daysOfMonth = daysOfWeek.map((day: string, index: number) => {
    if (index < today)
      return new Date(
        new Date().setDate(new Date().getDate() - (today - index))
      );
    else if (index === today) return new Date();
    else if (index > today)
      return new Date(new Date().setDate(new Date().getDate() + index - today));
  });

  const arrDays = daysOfWeek.map((day: string, index: number) => {
    return (
      <TouchableOpacity
        key={day}
        style={
          day === daysOfWeek[dayIndex]
            ? Homestylesheet.activeDay
            : Homestylesheet.inactiveDay
        }
        activeOpacity={0.7}
        onPress={() => handleClick(daysOfWeek.indexOf(day))}
      >
        <Text
          style={{
            color: day === daysOfWeek[dayIndex] ? 'white' : 'gray',
            fontSize: 16,
          }}
        >
          {day}
        </Text>
        <Text
          style={{
            color: day === daysOfWeek[dayIndex] ? 'white' : 'black',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {daysOfMonth[index]?.getDate()}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <Text style={[textStyles.semiBold, { marginBottom: -6, marginTop: 32 }]}>
        {daysOfWeek2[dayIndex]}
      </Text>
      <View style={Homestylesheet.week}>{arrDays}</View>
    </View>
  );
};

export default WeekComponent;
