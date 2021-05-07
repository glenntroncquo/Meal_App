import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors';

export const LikeComponent: React.FC<{
  active: boolean;
  customfunction: Function;
}> = ({ active, customfunction }) => {
  return (
    <>
      {active ? (
        <AntDesign
          name='heart'
          size={32}
          color={colors.darkGreen}
          style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', marginTop:12, right:16}}
          onPress={() => {
            customfunction();
          }}
        />
      ) : (
        <AntDesign
          name='hearto'
          size={32}
          color={colors.darkGreen}
          style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', marginTop:12, right:16}}
          onPress={() => {
            customfunction();
          }}
        />
      )}
    </>
  );
};
