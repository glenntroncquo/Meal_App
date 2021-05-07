import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import colors from '../../styles/colors';
import { Homestylesheet } from '../../styles/HomeStylesheet/Homestylesheet';

interface Props {
  uri: string
  title: string
}

export const ImageComponent: React.FC<Props> = ({ title ,uri }) => {
  const image = { uri: uri}
  return (
    <View style={{ marginBottom: 24,  }}>
        <ImageBackground
        source={image}
          
          style={Homestylesheet.image}
          imageStyle={{
            borderRadius: 0,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 32,
            borderWidth:1,
            borderColor: colors.darkGreen
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
            <Text style={{ color: 'white', fontSize: 16 }}>{title}
            </Text>
          </View>
        </ImageBackground>
    </View>
  );
};
