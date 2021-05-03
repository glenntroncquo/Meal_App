import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { apiKey } from '../../api/details';
import colors from '../../styles/colors';
import { ImageComponent } from '../../components/Explore/ImageComponent';
import { container } from '../../styles/generics';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IconComponent } from '../../components/Explore/IconComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { InstructionComponent } from '../../components/Explore/InstructionComponent';
import { Activity } from '../../components/General/Activity';
import { CustomButton } from '../../components/Login/CustomButton';
import { IngredientComponent } from '../../components/Explore/IngredientComponent';
import { ModalComponent } from '../../components/Explore/ModalComponent/ModalComponent';

import firebase, { auth } from '../../utils/firebase';
import { ExploreStylesheet } from '../../styles/ExploreStylesheet/ExploreStylesheet';

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
  const [active, setActive] = useState<boolean>(false);
  const [activeDay, setActiveDay] = useState<number>();

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
  }, [imageMeal]);

  const handleSwitch = (state: number) => {
    setActiveState(state);
  };

  const handleCalendarButton = () => {
    setActive(!active);
  };

  const handlePressDay = (day: number) => {
    setActive(!active);
    setActiveDay(day);
  };
  const setDataDay: Function = async () => {
    //@ts-ignore
    const weekdata = JSON.parse(await AsyncStorage.getItem('calendar'));

    if (activeDay != null) {
      weekdata[activeDay]['id'] = id;
      weekdata[activeDay]['image'] = imageMeal;
      weekdata[activeDay]['name'] = title;

      await AsyncStorage.setItem('calendar', JSON.stringify(weekdata));
      await firebase
        .database()
        .ref('/user/' + auth.currentUser?.uid + '/week')
        .set(weekdata);
    }
    activeDay != null ? console.log(weekdata) : null;
  };
  useEffect(() => {
    setDataDay();
  }, [activeDay]);

  return (
    <>
      {loaded ? (
        <ScrollView style={[container.basicContainer]}>
          <ImageComponent uri={imageMeal} title={title} />
          <View style={ExploreStylesheet.mealDetailView}>
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
          <View style={ExploreStylesheet.buttonView}>
            <CustomButton
              name='Add to calendar'
              customfunction={handleCalendarButton}
            />
            <ModalComponent
              active={active}
              handlePress={handleCalendarButton}
              handleDay={handlePressDay}
            />
          </View>
        </ScrollView>
      ) : (
        <Activity />
      )}
    </>
  );
};

export default MealDetail;
