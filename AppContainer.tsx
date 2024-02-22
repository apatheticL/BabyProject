import App from './App';
import React, {useEffect} from 'react';
import {configStore} from './src/core/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './src/core/store/reducer';
import {View} from 'react-native';

const AppContainer = () => {
  const [isReady, setIsReady] = React.useState(false);
  useEffect(() => {
    setUpConfigStore();
  }, []);

  const setUpConfigStore = () => {
    configStore(rootReducer, AsyncStorage);
    setIsReady(true);
  };
  return isReady ? <App /> : <View />;
};
export default AppContainer;
