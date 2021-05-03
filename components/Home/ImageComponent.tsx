import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import { carouselStyle } from '../../styles/generics';

interface Props {
  activeDay: string;
  dayIndex: number;
  navigation: any;
}

export const ImageComponent: React.FC<Props> = ({ dayIndex, navigation }) => {
  const [mealArr, setMealArr] = useState([
    'Nothing yet',
    'Nothing Yet',
    'Nothing Yet',
    'Nothing Yet',
    'Nothing Yet',
    'Nothing Yet',
    'Nothing Yet',
  ]);

  const [imageArr, setImageArr] = useState([
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
  ]);

  const [id, setId] = useState<number[]>([]);

  const getDayItems = async () => {
    //@ts-ignore
    // const weekdata = JSON.parse(await AsyncStorage.getItem('calendar'));

    // setImageArr([])

    // weekdata.forEach((item: any) => {
    //   // console.log(item['image'])
    //   setImageArr(prevArr => [...prevArr, item['image']]);
    //   setMealArr(prevArr => [...prevArr, item['name']]);
    //   setId(prevArr => [...prevArr, item['id']]);
    // });

    console.log(imageArr)
  };

  useEffect(() => {
    console.log('rerender')
    const test = getDayItems();
    
  }, []);

  const handlePress = (dayIndex: number) => {
    if (mealArr[dayIndex] === 'Click to add a meal' || mealArr[dayIndex] === 'Nothing yet')
      navigation.navigate('ExploreTab');
    else navigation.navigate('Meal details', { id: 654991 });
  };
  return (
    <View style={{ marginBottom: 24 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{}}
        onPress={() => handlePress(dayIndex)}
      >
        <ImageBackground
          source={
            imageArr[dayIndex] == ''
              ? {
                  uri:
                    'https://spoonacular.com/recipeImages/665744-556x370.jpg',
                }
              : { uri: imageArr[dayIndex] }
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
            <Text style={{ color: 'white', fontSize: 16 }}>
              {mealArr[dayIndex]}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
