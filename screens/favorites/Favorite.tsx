import React, { useEffect, useState } from 'react';
import { RefreshControl, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { container, textStyles } from '../../styles/generics';

import firebase, { auth } from '../../utils/firebase';
import { ResultComponent } from '../../components/Explore/ResultComponent';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [favorites, setFavorites] = useState({});
  const [id, setId] = useState<string[]>();
  const [refreshing, setRefreshing] = React.useState(false);
  
  const getFavorites: Function = async () => {
    const ref = await firebase
      .database()
      .ref('/user/' + auth.currentUser?.uid + '/favorites');

    const data = await ref.on('value', (snapshot) => {
      setFavorites(snapshot.val());
      ref.off();
    });

    setRefreshing(false);
  };

  const removeFavorites = async (id: string) => {
    await firebase
      .database()
      .ref('/user/' + auth.currentUser?.uid + '/favorites/' + id)
      .remove();
  };

  useEffect(() => {
    let arr;
    favorites != null ? (arr = Object.keys(favorites)) : null;

    setId(arr);

    arr?.forEach((id) => {
      //@ts-ignore
      favorites[id]['image'] === 'https://plchldr.co/i/300x300?bg=FFFFFF'
        ? removeFavorites(id)
        : null;
    });
  }, [favorites]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRefreshing(true);
      getFavorites();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getFavorites();
  }, []);

  return (
    <ScrollView
      style={[container.basicContainer]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {id == undefined || id == null ? (
        <Text style={textStyles.semi}>No meals found</Text>
      ) : (
        <>
          {id.map((id: any) => {
            try {
              return (
                <ResultComponent
                  key={id}
                  id={id}
                  //@ts-ignore
                  uri={favorites[id]['image']}
                  //@ts-ignore
                  name={favorites[id]['name']}
                  navigation={navigation}
                />
              );
            } catch (error) {}
          })}

          <Text></Text>
        </>
      )}
    </ScrollView>
  );
};

export default Home;
