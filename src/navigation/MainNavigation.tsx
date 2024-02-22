import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginContainer} from '../screens/login/LoginContainer';
import React from 'react';
import SignUpScreen from '../screens/signup/SignUpScreen';
import {LoadingScreen} from '../screens/LoadingScreen';
import TabNavigation from './TabNavigation';
import {AddHealthContainer} from '../screens/health/add-health/AddHealthContainer';
import {AddUserInfoContainer} from '../screens/use-profile/AddUserInfoContainer';
import { HealthDetailContainer } from '../screens/health/health-detail/HealthDetailScreen';

export type MainNavigationParam = {
  loading: undefined;
  login: undefined;
  signUp: undefined;
  HomeScreen: undefined;
  AddHealthScreen: undefined;
  AddUserInfoScreen: undefined;
  HealthDetail: undefined;
};

const Main = createNativeStackNavigator<MainNavigationParam>();
const MainNavigator = () => {
  return (
    <Main.Navigator
      initialRouteName={'loading'}
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="loading" component={LoadingScreen} />

      <Main.Screen name="login" component={LoginContainer} />
      <Main.Screen name="signUp" component={SignUpScreen} />
      <Main.Screen name="AddUserInfoScreen" component={AddUserInfoContainer} />
      <Main.Screen name="HomeScreen" component={TabNavigation} />
      <Main.Screen name="AddHealthScreen" component={AddHealthContainer} />
      <Main.Screen name="HealthDetail" component={HealthDetailContainer} />
    </Main.Navigator>
  );
};
export default MainNavigator;
