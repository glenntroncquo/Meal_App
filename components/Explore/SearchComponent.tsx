import React from 'react';
import { View, TextInput } from 'react-native';

import { apiKey } from '../../api/details';

export const SearchComponent: React.FC<{setSearchData: any}> = ({ setSearchData }) => {
  const handleSearch = async () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${'pasta'}`
    )
      .then((res) => res.json())
      .then((json) => setSearchData(json.results));
      
  };

  return (
    <View>
      <TextInput
        onChangeText={handleSearch}
        style={{ borderWidth: 1, marginBottom: 0 }}
      />
    </View>
  );
};
