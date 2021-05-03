import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { RandomImageComponent } from './RandomImageComponent';

interface Props {
    navigation:any,
}

export const RandomComponent: React.FC<Props> = ({ navigation}) => {
  const [titleArr, setTitleArr] = useState(['Nothing yet', 'Nothing Yet']);

  const [imageArr, setImageArr] = useState([
    'https://plchldr.co/i/300x300?bg=FFFFFF',
    'https://plchldr.co/i/300x300?bg=FFFFFF',
  ]);

  const [idArr, setIdArr] = useState([999999, 999999]);

  useEffect(() => {});
  return (
    <ScrollView>
      <RandomImageComponent />
    </ScrollView>
  );
};
