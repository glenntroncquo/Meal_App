import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/WeekComponent';
import { ImageCarouselComponent } from '../../components/ImageCarouselComponent';
import { OptionsComponent } from '../../components/Home/OptionsComponent';
const Home = () => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();

  const [activeDay, setActiveDay] = useState('th');

  const handleClick = (selectedDay: string) => {
    setActiveDay(selectedDay);
  };

  return (
    <View style={container.homeContainer}>
      <Text style={[textStyles.normal]}>Your weekly overview</Text>

      <Text style={[textStyles.semiBold, {marginBottom:-6, marginTop:16}]}>Friday</Text>
      <WeekComponent handleClick={handleClick} activeDay={activeDay} />

      <Text style={[textStyles.semiBold, {marginTop:28, marginBottom:8}]}>Afternoon</Text>

      <ImageCarouselComponent
        activeDay={activeDay}
        dayIndex={daysOfWeek.indexOf(activeDay)}
      />

      <OptionsComponent/>
    </View>
  );
};

export default Home;
