import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

import { WeekChoice } from './WeekChoice';
import { modalView } from '../../../styles/ExploreStylesheet/ExploreStylesheet';

export const ModalComponent: React.FC<{
  active: boolean;
  handlePress: Function;
  handleDay: Function;
}> = ({ active, handlePress, handleDay }) => {
  return (
    <View style={modalView.centeredView}>
      <Modal animationType='slide' transparent={true} visible={active}>
        <View style={modalView.centeredView}>
          <View style={modalView.modalView}>
            <WeekChoice handleDay={handleDay} />

            <Pressable style={[modalView.button]} onPress={() => handlePress()}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
