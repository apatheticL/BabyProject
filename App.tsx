import React from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/core/store';

const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <MainNavigator />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
