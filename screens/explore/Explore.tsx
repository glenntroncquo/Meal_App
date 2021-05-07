import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { ResultComponent } from '../../components/Explore/ResultComponent';
import { apiKey } from '../../api/details';
import { ExploreStylesheet } from '../../styles/ExploreStylesheet/ExploreStylesheet';

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
        style={ExploreStylesheet.textInputStyle}
      />

      {images.map((element, index) => {
        return (
          <ResultComponent
            key={id[index]}
            id={id[index]}
            uri={images[index]}
            name={names[index]}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default Explore;
