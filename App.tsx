import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Authentication } from './navigation/Authentication';

export default () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};
