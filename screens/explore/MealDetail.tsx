import React, { useEffect, useState } from 'react';
import { TextComponent, View, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';
import { apiKey } from '../../api/details';
import firebase from '../../utils/firebase';
import 'firebase/database';
import 'firebase/auth';
import colors from '../../styles/colors';
import { ImageComponent } from '../../components/Explore/ImageComponent';
import { container } from '../../styles/generics';

import { IconComponent } from '../../components/Explore/IconComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { InstructionComponent } from '../../components/Explore/InstructionComponent';
import { Activity } from '../../components/General/Activity';
import { Inter_300Light } from '@expo-google-fonts/inter';

interface Meal {
  steps: [''];
  imageMeal: string;
}

const MealDetail: React.FC<{ route: any; image: string; iets: any }> = ({
  route,
}) => {
  const { id } = route.params;

  // const [mealImage, setMealImage] = useState('');
  const [activeState, setActiveState] = useState(1);

  const [instructions, setInstructions] = useState([]);

  const [meals, setMeals] = useState<Meal[]>([]);

  const [steps, setSteps] = useState<Meal['steps']>(['']);

  const [imageMeal, setImageMeal] = useState<Meal['imageMeal']>('https://plchldr.co/i/300x300?bg=FFFFFF');

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then(async (json) => {
        await setImageMeal(json['image']);
        let datasteps;
        try {
          datasteps = await json['analyzedInstructions'][0]['steps'];
          // console.log(datasteps)
          
        } catch (error) {
          datasteps = [{step: 'Instruction not found'}]
        }
        let data: Meal['steps'] = [''];
        datasteps.forEach((item: any) => {
          // console.log(item);
          data.push(item['step']);
        });
        setSteps(data);
      });
  }, []);

  useEffect(() => {
    setLoaded(true);
    // console.log(steps[0]);
    // steps.forEach((item)=> console.log(item))
  }, [imageMeal]);

  // useEffect(() => {
  //   let data: Meal['steps'] = [''];

  //   instructions.forEach((item) => {
  //     data.push(item['step']);
  //   });

  //   // setMeals(data);

  //   setSteps(data);

  //   console.log(meals);
  // }, [instructions]);

  const handleSwitch = (state: number) => {
    setActiveState(1);
  };

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
    <>
      {loaded ? (
        <ScrollView style={[container.basicContainer]}>
          <ImageComponent uri={imageMeal} dayIndex={2} />
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

          <View>
            {steps.map((item, index) => {
              return index === 0 ? null : <InstructionComponent key={index} instruction={item} index={index}/>
              
            })}
          </View>
          <TouchableOpacity style={{position:'absolute'}}>
            <Text>
              button
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Activity />
      )}
    </>

    // <View style={[container.basicContainer, { marginBottom: 54 }]}>
    //   {/* <ImageComponent uri={mealImage} dayIndex={2} /> */}
    //   <View
    //     style={{
    //       borderColor: colors.opacityGray,
    //       borderBottomWidth: 1,
    //       justifyContent: 'space-around',
    //       flexDirection: 'row',
    //       paddingBottom: 8,
    //     }}
    //   >
    //     <IconComponent state={activeState} handleSwitch={handleSwitch} />
    //   </View>

    //   <ScrollView>
    //     {/* <InstructionComponent/> */}
    //     {meals.map((item) => {
    //       return <Text>{item}</Text>;
    //     })}
    //   </ScrollView>
    // </View>
  );
};

export default MealDetail;
