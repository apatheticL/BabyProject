import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/history/HistoryScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import React from 'react';
import {MyTabBar} from './component/TabBar';
export type TabNavigationParam = {
  HomeTab: undefined;
  History: undefined;
  ProfileTab: undefined;
};
const Tab = createBottomTabNavigator<TabNavigationParam>();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeTab'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{title: 'History'}}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
