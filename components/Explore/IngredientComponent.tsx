import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import colors from '../../styles/colors';
import { textStyles } from '../../styles/generics';

export const IngredientComponent: React.FC<{
  name: string;
  image: string;
  amount: string;
}> = ({ name, image, amount }) => {
  const uri = `https://spoonacular.com/cdn/ingredients_100x100/${image}`;
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.opacityGray,
        alignItems: 'center',
      }}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 64, height: 64, borderRadius: 50, marginRight: 16 }}
      />
      <View style={{flex: 1}}>
        <Text style={[textStyles.semi, { flexShrink: 1 }]}>{amount}</Text>
      </View>
    </View>
  );
};
