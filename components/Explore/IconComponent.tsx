import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const IconComponent: React.FC<{
  handleSwitch: Function;
  state: number;
}> = ({ state, handleSwitch }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleSwitch(0);
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialIcons
            name='menu-book'
            size={24}
            color={state === 0 ? colors.darkGreen : colors.opacityGray}
          />
          <Text
            style={
              state === 0
                ? { color: colors.darkGreen }
                : { color: colors.opacityGray }
            }
          >
            Description
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleSwitch(1);
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialIcons
            name='integration-instructions'
            size={24}
            color={state === 1 ? colors.darkGreen : colors.opacityGray}
          />
          <Text
            style={
              state === 1
                ? { color: colors.darkGreen }
                : { color: colors.opacityGray }
            }
          >
            Instructions
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleSwitch(2);
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialIcons
            name='restaurant-menu'
            size={24}
            color={state === 2 ? colors.darkGreen : colors.opacityGray}
          />
          <Text
            style={
              state === 2
                ? { color: colors.darkGreen }
                : { color: colors.opacityGray }
            }
          >
            Ingredients
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
