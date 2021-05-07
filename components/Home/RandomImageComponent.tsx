import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { apiKey } from '../../api/details';
import { textStyles } from '../../styles/generics';

export const RandomImageComponent: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  const [names, setNames] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [id, setId] = useState<string[]>([]);

  useEffect(() => {
    let isSubscribed = true;
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=100`
    )
      .then((res) => res.json())
      .then((json) => {
        let arrImg = [];
        let arrTitle = [];
        let arrId = [];
        for (let i = 0; i <= 99; i++) {
          arrImg.push(json['recipes'][i]['image']);
          arrTitle.push(json['recipes'][i]['title']);
          arrId.push(json['recipes'][i]['id']);
        }
        setNames(arrTitle);
        setImages(arrImg);
        setId(arrId);
      });
    return () => {
      isSubscribed = false;
    };
  }, []);

  const handlePress = (id: string) => {
    navigation.navigate('Meal details', { id: id });
  };
  return (
    <ScrollView
      horizontal={true}
      style={{
        marginRight: 32,
        borderColor: 'red',
      }}
    >
      {names.length != 0 ? (
        names.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handlePress(id[index]);
              }}
              key={index}
              activeOpacity={0.9}
              style={{
                borderColor: 'lightgray',
                borderWidth: 1,
                borderRadius: 16,
                marginRight: 16,
              }}
            >
              <Image
                source={{ uri: images[index] }}
                style={{
                  width: 300,
                  height: 100,
                  marginBottom: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <Text
                style={[textStyles.semi, { margin: 16, color: 'darkgray' }]}
              >
                {names[index].substring(0, 30)}
              </Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <Text>Loading random meals ...</Text>
      )}
    </ScrollView>
  );
};
