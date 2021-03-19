import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { calendarStyle } from '../styles/generics';

import colors from '../styles/colors';

const DayComponent = (day: any) => {

    let objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    month = months[objToday.getMonth()],
    dayNumber = objToday.getDate();

    //[activeday, currentday]
    const[activeDay, setActiveDay] = useState([dayOfWeek, dayNumber]);

    let test = 'red';

    const[dayColor, setDayColor] = useState('red');

    const[monday, setMonday] = useState('red');
    const[tuesday, setTuesday] = useState('red');



    return(
        <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: dayColor}]} activeOpacity={.7} onPress={() => {
            
        }}>
                    <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                    <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
        </TouchableOpacity>        
    )
}

export default DayComponent;