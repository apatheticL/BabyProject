import React, {useState} from 'react';
import {LoginComponent} from './LoginComponent';
import {firebase} from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {onThunkGetCurrentUser} from '../profile/store/thunk';
import {Alert} from 'react-native';

export const LoginContainer = props => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const {currentUser} = firebase.auth();
        if (currentUser) {
          dispatch(
            onThunkGetCurrentUser(
              currentUser?.uid ?? '',
              () => {
                props.navigation.navigate('HomeScreen');
              },
              () => {
                Alert.alert('Login fail');
              },
            ),
          );
        }
      })
      .catch(error => {
        setMessage(error.message);
      });
  };
  const onSignUp = () => {
    props.navigation.navigate('signUp');
  };

  return (
    <LoginComponent
      message={message}
      onLogin={handleLogin}
      onSignUp={onSignUp}
    />
  );
};
