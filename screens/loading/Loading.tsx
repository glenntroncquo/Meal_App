import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const Loading: React.FC = () => {
  return (
    <View style={{justifyContent:'center', flex:1}}>
      <ActivityIndicator />
      <ActivityIndicator size='large' color={colors.darkGreen} />
    </View>
  );
};
