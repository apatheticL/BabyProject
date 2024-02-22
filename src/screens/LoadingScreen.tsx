import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';

export const LoadingScreen = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.replace(user ? 'HomeScreen' : 'signUp');
    });
  }, []);
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};
