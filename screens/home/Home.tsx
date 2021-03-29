import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/WeekComponent';
const Home = () => {
  const daysOfWeek = new Array('mo', 'tu', 'we', 'th', 'fr', 'sa', 'su');
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();

  const [activeDay, setActiveDay] = useState('th');

  const handleClick = (selectedDay: string) => {
    setActiveDay(selectedDay);
    // console.log(selectedDay);
  };

  return (
    <View style={container.homeContainer}>
      <Text style={[textStyles.normal]}>Your weekly overview</Text>

      <WeekComponent handleClick={handleClick} activeDay={activeDay}/>
      {/* <Image
        source={{
          uri: 'https://spoonacular.com/recipeImages/637876-312x231.jpg',
        }}
        style={{ width: 250, height: 250, borderRadius: 200 }}
      /> */}

    </View>
  );
};

export default Home;
