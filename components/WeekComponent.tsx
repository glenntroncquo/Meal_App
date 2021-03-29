import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { calendarStyle } from '../styles/generics';

interface Props {
  activeDay: string,
  handleClick: Function
}

const WeekComponent: React.FC<Props> = ({activeDay, handleClick}) => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');


  const arrDays = daysOfWeek.map((day: string) => {
    // console.log(activeDay)
      return (
        <TouchableOpacity
          key={day}
          style={day === activeDay ? calendarStyle.activeDay : calendarStyle.inactiveDay}
          // style={calendarStyle.activeDay}
          activeOpacity={0.7}
          onPress={() => handleClick(day)}
          >
          <Text style={{ color: day === activeDay ? 'white' : 'gray', fontSize: 16 }}>{day}</Text>
          <Text style={{ color: day === activeDay ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>14</Text>
          {/* <Text style={{ color:'gray', fontSize: 16 }}>{day}</Text>
          <Text style={{ color:'black', fontSize: 16, fontWeight: 'bold' }}>14</Text> */}
        </TouchableOpacity>
      );
    }
  );

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 4,
        paddingLeft: 4,
        paddingTop: 8,
      }}
    >
      {arrDays}
    </View>
  );
};

export default WeekComponent;
