import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Explore from '../screens/explore/Explore';
import Home from '../screens/home/Home';
import MealDetails from '../screens/home/MealDetails';
import Favorite from '../screens/favorites/Favorite';
import Profile from '../screens/profile/Profile';

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

const Stack = createStackNavigator();

const HomeNavigator = () => {

    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });

    return(
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "white",
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitleStyle:{
              fontSize: 30,
            //   fontFamily: 'Inter_700Bold',
              paddingTop: 18
          },
          cardStyle: { backgroundColor: '#fff' },
          
        }}
        >
        <Stack.Screen name="Hello glenn," component={Home}/>
        <Stack.Screen name="MealDetails" component={MealDetails}/>

        </Stack.Navigator>
    );
}


const FavoriteNavigator = () => {
    return(
        <Stack.Navigator
        
        >
        <Stack.Screen name="niethome" component={Favorite}/>
        </Stack.Navigator>
    );
}

const ExploreNavigator = () => {
    return(
        <Stack.Navigator
        >
        <Stack.Screen name="gag" component={Explore}/>
        <Stack.Screen name="lol" component={MealDetails}/>

        </Stack.Navigator>
    );
}

const ProfileNavigator = () => {
    return(
        <Stack.Navigator
        >
        <Stack.Screen name="nege" component={Profile}/>
        <Stack.Screen name="not" component={MealDetails}/>

        </Stack.Navigator>
    );
}


export { HomeNavigator, FavoriteNavigator, ExploreNavigator, ProfileNavigator};