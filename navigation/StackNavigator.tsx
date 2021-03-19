import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore/Explore';
import Home from '../screens/home/Home';
import MealDetails from '../screens/home/MealDetails';
import Favorite from '../screens/favorites/Favorite';
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return(
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFFFFF",
            shadowOpacity: 0,
            elevation: 0
            
          },
          cardStyle: { backgroundColor: '#fff' },
          headerTintColor: "black",
        }}
        >
        <Stack.Screen name="Home" component={Home}/>
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