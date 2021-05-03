import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

  // const get = async () => {

  //   // await AsyncStorage.setItem('test', 'nigger');
  //   value = await AsyncStorage.getItem('test');
  //   console.log(value)

  // };
  // get();

  const checkWeek = async () => {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil(
      ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    );

    // const value = await AsyncStorage.getItem('week');
    // console.log(value)
  };

  checkWeek();

  return (
    <ScrollView
      style={container.homeContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[textStyles.normal]}>Your weekly overview</Text>

      <WeekComponent
        handleClick={handleClick}
        dayIndex={dayIndex}
        dayOfMonth={dayOfMonth}
      />

      <ImageComponent activeDay={daysOfWeek[dayIndex]} dayIndex={dayIndex} navigation={navigation}/>
      <Text style={[textStyles.semiBold, { marginBottom: 16 }]}>Explore</Text>
      <OptionsComponent />
      <OptionsComponent />
    </ScrollView>
  );
};

export default Home;
