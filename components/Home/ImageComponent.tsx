import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import { carouselStyle } from '../../styles/generics';

interface Props {
  activeDay: string;
  dayIndex: number;
}

export const ImageComponent: React.FC<Props> = ({ dayIndex }) => {
  useEffect(() => {
  }, [dayIndex]);


  const screen = Dimensions.get('screen').width;
  const [imageArr, setImageArr] = useState([
    'https://spoonacular.com/recipeImages/665744-556x370.jpg',
    'https://spoonacular.com/recipeImages/637876-312x231.jpg',
    'https://spoonacular.com/recipeImages/646034-556x370.jpg',
    'https://spoonacular.com/recipeImages/639031-556x370.jpg',
    'https://spoonacular.com/recipeImages/642129-556x370.jpg',
    'https://spoonacular.com/recipeImages/632502-556x370.jpg',
    '',
  ]);

  const [mealArr, setMealArr] = useState([
    'Cookie',
    'Nigga',
    'though',
    'milkyway',
    'yhes',
    'sheesh',
    'jeez',
  ]);

  const images = new Array(
    '',
    'https://spoonacular.com/recipeImages/637876-312x231.jpg',
    'https://spoonacular.com/recipeImages/646034-556x370.jpg',
    'https://spoonacular.com/recipeImages/639031-556x370.jpg',
    'https://spoonacular.com/recipeImages/642129-556x370.jpg',
    'https://spoonacular.com/recipeImages/632502-556x370.jpg',
    ''
  );

  return (
    <View style={{ marginBottom: 24 }}>
      <TouchableOpacity activeOpacity={0.7} style={{}}
      
      >
        <ImageBackground
          source={
            images[dayIndex] == null
              ? { uri: images[dayIndex] }
              : {
                  uri:
                    'https://spoonacular.com/recipeImages/665744-556x370.jpg',
                }
          }
          style={carouselStyle.image}
          imageStyle={{
            borderRadius: 0,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        >
          <View
            style={{
              backgroundColor: colors.darkGreen,
              alignSelf: 'flex-end',
              padding: 16,
              borderRadius: 32,
              borderTopLeftRadius: 0,
              borderBottomEndRadius: 0,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>{mealArr[dayIndex]}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
