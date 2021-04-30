import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import { Text } from 'react-native-elements';
import { apiKey } from '../../api/details';
import firebase from '../../utils/firebase';
import 'firebase/database';
import 'firebase/auth';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { ImageComponent } from '../../components/Explore/ImageComponent';
import { container, textStyles } from '../../styles/generics';

import { IconComponent } from '../../components/Explore/IconComponent';

const MealDetail: React.FC<{ route: any; image: string }> = ({
  route,
  image,
}) => {
  const { id } = route.params;

  const [mealImage, setMealImage] = useState('nothing');
  const [activeState, setActiveState] = useState(1)

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMealImage(json['image']);
      });
  }, []);

  const handleSwitch = (state: number) => {
    setActiveState(state)
  }

  const handlePress = async () => {
    // console.log(firebase.auth().currentUser);
    let uid = firebase.auth().currentUser?.uid;
    let database = firebase.database();

    await database.ref('tetten/' + uid).set({
      id: 68,
      naam: 'tetten',
    });
  };

  return (
    <View style={[container.basicContainer, { marginBottom: 54 }]}>
      <ImageComponent activeDay={'th'} dayIndex={2} />
      <View
        style={{
          borderColor: colors.normalGreen,
          borderBottomWidth: 1,
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}
      >

        {/* <View style={{ alignItems: 'center' }}>
          <MaterialIcons name='menu-book' size={24} color={colors.darkGreen} />
          <Text>Description</Text>
        </View> */}

        {/* <View style={{alignItems: 'center'}}>
          <MaterialIcons name='integration-instructions' size={24} />
          <Text>Instructions</Text>
        </View> */}

        {/* <View style={{alignItems: 'center'}}>
          <MaterialIcons name='restaurant-menu' size={24} />
          <Text>Ingredients</Text>
        </View> */}

        <IconComponent state={activeState} handleSwitch={handleSwitch}/>



      </View>
    </View>
  );
};

export default MealDetail;
