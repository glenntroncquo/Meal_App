import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/Home/WeekComponent';
import { ImageComponent } from '../../components/Home/ImageComponent';
import { RandomImageComponent } from '../../components/Home/RandomImageComponent';

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

      <ImageComponent dayIndex={dayIndex} navigation={navigation} />
      <Text style={[textStyles.semiBold, { marginBottom: 16 }]}>
        Random Meals
      </Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <RandomImageComponent navigation={navigation} />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
