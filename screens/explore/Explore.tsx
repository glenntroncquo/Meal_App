import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { fetchMeal } from '../../api/fetchMeal';
import colors from '../../styles/colors';
import { container } from '../../styles/generics';

const Explore: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleSearch = async (text: string) => {
    fetchMeal(text);
  };

  const handlePress = () => {
    navigation.navigate('MealDetail');
  };
  return (
    <ScrollView style={container.basicContainer}>
      <TextInput
        onChangeText={handleSearch}
        style={{ borderWidth: 1, marginBottom: 0 }}
      />

      <TouchableOpacity
        style={{
          marginTop:32,
          // borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          alignItems: 'center',
          height: 72,
          padding: 16,
        }}
      >
        <Image
          source={{
            uri: 'https://spoonacular.com/recipeImages/511728-312x231.jpg',
          }}
          style={{ width: 64, height: 64, borderRadius: 50, marginRight: 16 }}
        />
        <Text style={{ fontSize: 16, color: 'black' }}>Chicken curry thai</Text>

        <AntDesign
          name='right'
          size={24}
          color='darkgray'
          style={{ paddingTop: 3, marginLeft: 'auto' }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          // borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          alignItems: 'center',
          height: 72,
          padding: 16,
          marginTop: 16,
          paddingBottom: 32,
        }}
      >
        <Image
          source={{
            uri: 'https://spoonacular.com/recipeImages/511728-312x231.jpg',
          }}
          style={{ width: 64, height: 64, borderRadius: 50, marginRight: 16 }}
        />
        <Text style={{ fontSize: 16, color: 'black' }}>Chicken curry thai</Text>

        <AntDesign
          name='right'
          size={24}
          color='darkgray'
          style={{ paddingTop: 3, marginLeft: 'auto' }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          // borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          alignItems: 'center',
          height: 72,
          padding: 16,
          marginTop: 16,
          paddingBottom: 32,
        }}
      >
        <Image
          source={{
            uri: 'https://spoonacular.com/recipeImages/511728-312x231.jpg',
          }}
          style={{ width: 64, height: 64, borderRadius: 50, marginRight: 16 }}
        />
        <Text style={{ fontSize: 16, color: 'black' }}>Chicken curry thai</Text>

        <AntDesign
          name='right'
          size={24}
          color='darkgray'
          style={{ paddingTop: 3, marginLeft: 'auto' }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Explore;
