import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase, { auth } from '../../utils/firebase';

import WeekComponent from '../../components/Home/WeekComponent';
import { ImageComponent } from '../../components/Home/ImageComponent';
import { OptionsComponent } from '../../components/Home/OptionsComponent';
import { week } from '../../utils/week';
import { RandomComponent } from '../../components/Home/RandomComponent';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');

  const date = new Date();
  const day = date.getDay();
  const dayOfMonth = date.getDate();

  const [dayIndex, setDayIndex] = useState(() => (day === 0 ? 6 : day - 1));

  const handleClick = (selectedDay: number) => {
    setDayIndex(selectedDay);
  };

  useEffect(() => {
    let week;
    firebase
      .database()
      .ref('/user/' + auth.currentUser?.uid + '/week')
      .on('value', (snapshot) => {
        week = snapshot;
      });
      // console.log(week);

    // AsyncStorage.setItem('calendar', JSON.stringify(week));
  }, []);

  const checkWeek = async () => {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    let week = Math.ceil(
      ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    );
  };

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

      <ImageComponent
        dayIndex={dayIndex}
        navigation={navigation}
      />
      <Text style={[textStyles.semiBold, { marginBottom: 16 }]}>Random Meals</Text>

      <RandomComponent navigation={navigation}/>
    </ScrollView>
  );
};

export default Home;
