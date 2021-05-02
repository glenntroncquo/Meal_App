import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import { carouselStyle } from '../../styles/generics';

interface Props {
  dayIndex: number;
  uri: string
}

export const ImageComponent: React.FC<Props> = ({ dayIndex, uri }) => {
  useEffect(() => {}, [dayIndex]);
  const image = { uri: uri}
  return (
    <View style={{ marginBottom: 24 }}>
        <ImageBackground
        source={image}
          
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
              Patat met bonen met saucice en wortels
            </Text>
          </View>
        </ImageBackground>
    </View>
  );
};
