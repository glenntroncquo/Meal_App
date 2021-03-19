import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { calendarStyle, container, textStyles } from '../../styles/generics';

import DayComponent from '../../components/DayComponent';

import colors from '../../styles/colors';
import WeekComponent from '../../components/WeekComponent';
const Home = () => {

    // let screenWidth = Dimensions.get('window').width;

  let objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    month = months[objToday.getMonth()],
    dayNumber = objToday.getDate();

    //[activeday, currentday]
    const[activeDay, setActiveDay] = useState([dayOfWeek, dayNumber]);

    return(

        <View style={container.basicContainer}>

            <Text style={textStyles.normal}>
                Your weekly overview
            </Text>
            <WeekComponent/>

            {/* <View > */}
                {/* <DayComponent state={activeDay}/> */}
                {/* <DayComponent/>
                <DayComponent/>
                <DayComponent/>
                <DayComponent/>
                <DayComponent/>
                <DayComponent/> */}

            {/* </View> */}

        <Image source={{uri: 'https://spoonacular.com/recipeImages/637876-312x231.jpg'}} style={{width: 250, height:250}}/>

        </View>
    );
}

export default Home;