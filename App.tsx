import React from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/core/store';
import ErrorBoundary from './src/components/error-boundary.component';
import {navigationRef} from './src/navigation/RootNavigation';
import {NotificationListener} from './src/components/notification.listener';

const App = () => {
  return (
    <ErrorBoundary name={'Mini app'}>
      <NavigationContainer ref={navigationRef}>
        <StoreProvider>
          <MainNavigator />
        </StoreProvider>
      </NavigationContainer>
      <NotificationListener />
    </ErrorBoundary>
  );
};

export default App;
