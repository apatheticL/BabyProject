/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './AppContainer';
import messaging from '@react-native-firebase/messaging';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => AppContainer);
