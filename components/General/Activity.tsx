import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';

export const Activity = () => {
    return(
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height: Dimensions.get('screen').height-256}}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    )
}