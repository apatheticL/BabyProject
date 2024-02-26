import React from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/core/store';
import ErrorBoundary from './src/components/error-boundary.component';

const App = () => {
  return (
    <ErrorBoundary name={'Mini app'}>
      <NavigationContainer>
        <StoreProvider>
          <MainNavigator />
        </StoreProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
