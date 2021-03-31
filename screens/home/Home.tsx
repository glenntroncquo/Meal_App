import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/WeekComponent';
import { ImageCarouselComponent } from '../../components/ImageCarouselComponent';
import { OptionsComponent } from '../../components/Home/OptionsComponent';
const Home = () => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');

  const date = new Date();
  const day = date.getDay();
  const dayOfMonth = date.getDate();

  const [dayIndex, setDayIndex] = useState(day-1);

  const handleClick = (selectedDay: number) => {
    setDayIndex(selectedDay);
  };

  return (
    <View style={container.homeContainer}>
      <Text style={[textStyles.normal]}>Your weekly overview</Text>

      <WeekComponent handleClick={handleClick} dayIndex={dayIndex} dayOfMonth={dayOfMonth}/>

      <Text style={[textStyles.semiBold, {marginTop:28, marginBottom:8}]}>Afternoon</Text>

      <ImageCarouselComponent
        activeDay={daysOfWeek[dayIndex]}
        dayIndex={dayIndex}
      />

      <OptionsComponent/>
    </View>
  );
};

export default Home;
