import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';

export const RandomImageComponent: React.FC = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://plchldr.co/i/300x300?bg=FFFFFF' }}
        style={{ width: 72, height: 50 }}
      />
      <Text>
          This is a random meal
      </Text>
    </View>
  );
};
