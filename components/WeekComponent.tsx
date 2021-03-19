import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import colors from '../styles/colors';
import { calendarStyle } from '../styles/generics';


const WeekComponent = () => {
    return(
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingRight:4, paddingLeft:4}}>
            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[calendarStyle.activeDay, {backgroundColor: 'red'}]} activeOpacity={.7} onPress={() => {
            }}>
                <Text style={{color:'#FFFFFF', fontSize:14}}>{'fr'}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{'18'}</Text>
            </TouchableOpacity> 
        </View>
    );
}


export default WeekComponent;