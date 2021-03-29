import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { calendarStyle, container, textStyles } from '../../styles/generics';

import WeekComponent from '../../components/WeekComponent';
const Home = () => {

    return(

        <View style={container.basicContainer}>

            <Text style={textStyles.normal}>
                Your weekly overview
            </Text>
            
            <WeekComponent/>


        <Image source={{uri: 'https://spoonacular.com/recipeImages/637876-312x231.jpg'}} style={{width: 250, height:250}}/>

        </View>
    );
}

export default Home;