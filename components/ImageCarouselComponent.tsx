import React from 'react';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

import { carouselStyle } from '../styles/generics';

interface Props {
  activeDay: string;
  dayIndex: number;
}

export const ImageCarouselComponent: React.FC<Props> = ({ dayIndex }) => {
  const screen = Dimensions.get('screen').width;
  console.log(screen);
  console.log(dayIndex);
  const images = new Array(
    'https://spoonacular.com/recipeImages/665744-556x370.jpg',
    'https://spoonacular.com/recipeImages/637876-312x231.jpg',
    'https://spoonacular.com/recipeImages/646034-556x370.jpg',
    'https://spoonacular.com/recipeImages/639031-556x370.jpg',
    'https://spoonacular.com/recipeImages/642129-556x370.jpg',
    'https://spoonacular.com/recipeImages/640383-556x370.jpg',
    'https://spoonacular.com/recipeImages/632502-556x370.jpg'
  );

  return (
    <>
      {/* <Image source={{ uri: images[dayIndex] }} style={carouselStyle.image} /> */}
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <ImageBackground
          source={{ uri: images[dayIndex] }}
          style={carouselStyle.image}
          imageStyle={{ borderRadius: 16 }}
        >
          <View
            style={{
              backgroundColor: colors.darkGreen,
              alignSelf: 'flex-end',
              width: Dimensions.get('screen').width - 32,
              borderRadius: 32,
            }}
          >
            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 32 }}>
              Cookies
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};
