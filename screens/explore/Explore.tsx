import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { ResultComponent } from '../../components/Explore/ResultComponent';
import { container } from '../../styles/generics';
import { apiKey } from '../../api/details';
import { Text } from 'react-native-elements';
import colors from '../../styles/colors';
import { View } from 'react-native';

const Explore: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [searchData, setSearchData] = useState([]);
  const [images, setImages] = useState([]);
  const [names, setNames] = useState([]);
  const [id, setId] = useState([]);

  const handleSearch = async (searchQuery: string) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`
    )
      .then((res) => res.json())
      .then((json) => setSearchData(json.results));
  };

  useEffect(() => {
    setImages([]);
    setNames([]);
    setId([]);
    searchData.forEach((item) => {
      setImages((oldArr) => [...oldArr, item['image']]);
      setNames((oldArr) => [...oldArr, item['title']]);
      setId((oldArr) => [...oldArr, item['id']]);
    });
  }, [searchData]);

  return (
    <ScrollView
      style={{ margin: 16, marginBottom: 0 }}
      showsVerticalScrollIndicator={false}
    >
      <TextInput
        onChangeText={handleSearch}
        placeholder='Search'
        placeholderTextColor='darkgray'
        style={{
          borderWidth: 1,
          marginBottom: 8,
          borderRadius: 8,
          backgroundColor: colors.opacityGray,
          height: 48,
          color: 'black',
          borderColor: 'white',
          paddingLeft: 16,
        }}
      />

      {images.map((element, index) => {
        return (
          <ResultComponent
            key={id[index]}
            id={id[index]}
            uri={images[index]}
            name={names[index]}
          />
        );
      })}

      {searchData.map((item) => {
        <Text>{item}</Text>;
      })}
    </ScrollView>
  );
};

export default Explore;
