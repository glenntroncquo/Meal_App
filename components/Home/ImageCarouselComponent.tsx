import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import { carouselStyle } from '../../styles/generics';

interface Props {
  activeDay: string;
  dayIndex: number;
}

export const ImageCarouselComponent: React.FC<Props> = ({ dayIndex }) => {
  const screen = Dimensions.get('screen').width;
  const images = new Array(
    'https://spoonacular.com/recipeImages/665744-556x370.jpg',
    'https://spoonacular.com/recipeImages/637876-312x231.jpg',
    'https://spoonacular.com/recipeImages/646034-556x370.jpg',
    'https://spoonacular.com/recipeImages/639031-556x370.jpg',
    'https://spoonacular.com/recipeImages/642129-556x370.jpg',
    'https://spoonacular.com/recipeImages/632502-556x370.jpg',
    'https://spoonacular.com/recipeImages/632502-556x370.jpg'
  );

  return (
    <View style={{marginBottom:24}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{}}
      >
        <ImageBackground
          source={{ uri: images[dayIndex] }}
          style={carouselStyle.image}
          imageStyle={{ borderRadius: 0, borderBottomLeftRadius:32, borderTopRightRadius:32 }}
        >
          <View
            style={{
              backgroundColor: colors.darkGreen,
              alignSelf: 'flex-end',

              // width: Dimensions.get('screen').width - 32,
              padding:16,
              borderRadius: 32,
              borderTopLeftRadius:0,
              borderBottomEndRadius:0,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>
              Cookies
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
