import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Homestylesheet } from '../../styles/HomeStylesheet/Homestylesheet';

interface Props {
  dayIndex: number;
  navigation: any;
}

export const ImageComponent: React.FC<Props> = ({ dayIndex, navigation }) => {
  const [titleArr, setTitleArr] = useState([
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

  const [idArr, setIdArr] = useState([
    999999,
    999999,
    999999,
    999999,
    999999,
    999999,
    999999,
  ]);

  const getDayItems = async () => {
    //@ts-ignore
    const weekdata = JSON.parse(await AsyncStorage.getItem('calendar'));
    setImageArr([]);
    setIdArr([]);
    setTitleArr([]);
    for (let i = 0; i <= 6; i++) {
      setImageArr((prevArr) => [...prevArr, weekdata[i.toString()]['image']]);
      setTitleArr((prevArr) => [...prevArr, weekdata[i.toString()]['name']]);
      setIdArr((prevArr) => [...prevArr, weekdata[i.toString()]['id']]);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDayItems();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const handlePress = (dayIndex: number) => {
    if (titleArr[dayIndex] === 'Click to add meal')
      navigation.navigate('ExploreTab');
    else navigation.navigate('Meal details', { id: idArr[dayIndex] });
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
          style={Homestylesheet.image}
          imageStyle={Homestylesheet.imageStyle}
        >
          <View style={Homestylesheet.view}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              {titleArr[dayIndex]}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
