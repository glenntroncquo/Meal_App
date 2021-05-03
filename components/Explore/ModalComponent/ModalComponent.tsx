import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { WeekChoice } from './WeekChoice';
import { modalView } from '../../../styles/ExploreStylesheet/ExploreStylesheet';

export const ModalComponent: React.FC<{ active: boolean, handlePress: Function, handleDay: Function }> = ({ active, handlePress, handleDay }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  

  return (
    <View style={modalView.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={active}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={modalView.centeredView}>
          <View style={modalView.modalView}>
            <WeekChoice handleDay={ handleDay}/>
              
            <Pressable
              style={[modalView.button,]}
              onPress={() => handlePress()}
            >
              <Text >Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


