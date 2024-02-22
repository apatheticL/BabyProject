import {useDispatch} from 'react-redux';
import {ProfileComponent} from './ProfileComponent';

import React from 'react';
import {onThunkLogout} from './store/thunk';
const ProfileScreen = props => {
  const dispatch = useDispatch();
  const onReminderPress = () => {};
  const onLogoutPress = () => {
    dispatch(
      onThunkLogout(
        () => {
          __DEV__ && console.log('logout success');
          props.navigation.navigate('login');
        },
        () => {
          __DEV__ && console.log('logout fail');
        },
      ),
    );
  };
  return (
    <ProfileComponent
      onLogoutPress={onLogoutPress}
      onReminderPress={onReminderPress}
    />
  );
};
export default ProfileScreen;
