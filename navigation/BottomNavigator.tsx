import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import {
  ExploreNavigator,
  FavoriteNavigator,
  HomeNavigator,
  ProfileNavigator,
} from './StackNavigator';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: colors.darkGreen,
        inactiveTintColor: 'black',
        style:{height:58},
        // style: { height: 58, backgroundColor: colors.normalPink, },
        labelStyle: {
          paddingBottom: 6,
          fontSize: 12,
          marginTop: -6,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='explore' size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name='Favorites'
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='heart' size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person-sharp' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomNavigator };
