import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/Home/WeekComponent';
import { ImageComponent } from '../../components/Home/ImageComponent';
import { OptionsComponent } from '../../components/Home/OptionsComponent';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');

  const date = new Date();
  const day = date.getDay();
  const dayOfMonth = date.getDate();

  const [dayIndex, setDayIndex] = useState(() => (day === 0 ? 6 : day - 1));

  const handleClick = (selectedDay: number) => {
    setDayIndex(selectedDay);
  };
  
  return (
    <ScrollView style={container.homeContainer}
    showsVerticalScrollIndicator={false}
    >
      <Text style={[textStyles.normal]}>Your weekly overview</Text>

      <WeekComponent
        handleClick={handleClick}
        dayIndex={dayIndex}
        dayOfMonth={dayOfMonth}
      />

      <ImageComponent
        activeDay={daysOfWeek[dayIndex]}
        dayIndex={dayIndex}
      />
      <Text style={[textStyles.semiBold, { marginBottom: 16 }]}>Explore</Text>
      <OptionsComponent />
      <OptionsComponent />
    </ScrollView>
  );
};

export default Home;
