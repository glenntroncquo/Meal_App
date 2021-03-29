import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { calendarStyle } from '../styles/generics';

const WeekComponent: React.FC = () => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  console.log(day,month)
  

  const [activeDay, setActiveDay] = useState('th');

  const handleClick = (selectedDay: string) => {
    setActiveDay(selectedDay);
  };

  const arrDays = daysOfWeek.map((day: string) => {
      return (
        <TouchableOpacity
          key={day}
          style={day === activeDay ? calendarStyle.activeDay : calendarStyle.inactiveDay}
          activeOpacity={0.7}
          onPress={() => handleClick(day)}
          >
          <Text style={{ color: day === activeDay ? 'white' : 'gray', fontSize: 16 }}>{day}</Text>
          <Text style={{ color: day === activeDay ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>14</Text>
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
      }}
    >
      {arrDays}
    </View>
  );
};

export default WeekComponent;
