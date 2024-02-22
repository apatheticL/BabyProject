import React, {useState} from 'react';
import {SignUpComponent} from './SignUpComponent';
import {firebase} from '@react-native-firebase/auth';

const SignUpScreen = props => {
  const [message, setMessage] = useState('');

  const handleSignUp = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('AddUserInfoScreen');
      })
      .catch(error => {
        setMessage(error.message);
      });
  };
  const onLogin = () => {
    props.navigation.navigate('login');
  };
  return (
    <SignUpComponent
      handleSignUp={handleSignUp}
      onLogin={onLogin}
      message={message}
    />
  );
};
export default SignUpScreen;
