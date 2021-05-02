import React, { useEffect, useState } from 'react';
import { TextComponent, View } from 'react-native';
import { Text } from 'react-native-elements';
import { apiKey } from '../../api/details';
import firebase from '../../utils/firebase';
import 'firebase/database';
import 'firebase/auth';
import colors from '../../styles/colors';
import { ImageComponent } from '../../components/Explore/ImageComponent';
import { container } from '../../styles/generics';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IconComponent } from '../../components/Explore/IconComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { InstructionComponent } from '../../components/Explore/InstructionComponent';
import { Activity } from '../../components/General/Activity';
import { CustomButton } from '../../components/Login/CustomButton';
import { IngredientComponent } from '../../components/Explore/IngredientComponent';

interface Meal {
  steps: [''];
  imageMeal: string;
  title: string;
  id: string;

  ingredientName: [''];
  ingredientImage: [''];
  ingredientAmount: [''];
}

const MealDetail: React.FC<{ route: any; image: string; iets: any }> = ({
  route,
}) => {
  const { id } = route.params;

  const [activeState, setActiveState] = useState(0);

  const [ingredientName, setIngredientName] = useState<Meal['ingredientName']>([
    '',
  ]);
  const [ingredientImage, setIngredientImage] = useState<
    Meal['ingredientName']
  >(['']);
  const [ingredientAmount, setIngredientAmount] = useState<
    Meal['ingredientName']
  >(['']);

  const [steps, setSteps] = useState<Meal['steps']>(['']);

  const [title, setTitle] = useState<Meal['title']>('');

  const [imageMeal, setImageMeal] = useState<Meal['imageMeal']>(
    'https://plchldr.co/i/300x300?bg=FFFFFF'
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then(async (json) => {
        await setImageMeal(json['image']);
        await setTitle(json['title']);

        let ingredientNames: Meal['ingredientName'] = [''];
        let ingredientImages: Meal['ingredientImage'] = [''];
        let ingredientAmounts: Meal['ingredientAmount'] = [''];

        let dataIngredients = await json['extendedIngredients'];
        dataIngredients.forEach((item: any) => {
          ingredientNames.push(item['name']);
          ingredientImages.push(item['image']);
          ingredientAmounts.push(item['original']);
        });

        setIngredientName(ingredientNames);
        setIngredientImage(ingredientImages);
        setIngredientAmount(ingredientAmounts);

        let datasteps;
        try {
          datasteps = await json['analyzedInstructions'][0]['steps'];
        } catch (error) {
          datasteps = [{ step: 'Instruction not found' }];
        }

        let data: Meal['steps'] = [''];
        datasteps.forEach((item: any) => {
          data.push(item['step']);
        });
        setSteps(data);
      });
  }, []);

  const setAsync = async () => {
    await AsyncStorage.setItem('test', 'nigger');

    const value = await AsyncStorage.getItem('test');
  };

  useEffect(() => {
    setLoaded(true);
    setAsync();

    // console.log(ingredientName)
    // console.log(ingredientImage)
    // console.log(ingredientAmount);
  }, [imageMeal]);

  const handleSwitch = (state: number) => {
    setActiveState(state);
  };

  // const handlePress = async () => {
  //   // console.log(firebase.auth().currentUser);
  //   let uid = firebase.auth().currentUser?.uid;
  //   let database = firebase.database();

  //   await database.ref('tetten/' + uid).set({
  //     id: 68,
  //     naam: 'tetten',
  //   });
  // };

  const handleCalendar = () => {
    console.log('');
  };

  return (
    <>
      {loaded ? (
        <ScrollView style={[container.basicContainer]}>
          <ImageComponent uri={imageMeal} title={title} />
          <View
            style={{
              borderColor: colors.opacityGray,
              borderBottomWidth: 1,
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingBottom: 8,
            }}
          >
            <IconComponent state={activeState} handleSwitch={handleSwitch} />
          </View>
          {activeState === 0 ? (
            <View>
              {steps.map((item, index) => {
                return index === 0 ? null : (
                  <InstructionComponent
                    key={index}
                    instruction={item}
                    index={index}
                  />
                );
              })}
            </View>
          ) : (
            <View>
              {ingredientAmount.map((item, index) => {
                return index === 0 ? null : (
                  <IngredientComponent
                    key={index}
                    image={ingredientImage[index]}
                    name={ingredientName[index]}
                    amount={ingredientAmount[index]}
                  />
                );
              })}
            </View>
          )}
          <View
            style={{
              marginBottom: 32,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <CustomButton name='Add to calendar' customfunction={handleCalendar} />
          </View>
        </ScrollView>
      ) : (
        <Activity />
      )}
    </>
  );
};

export default MealDetail;
