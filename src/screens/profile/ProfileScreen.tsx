import {useDispatch, useSelector} from 'react-redux';
import {ProfileComponent} from './ProfileComponent';

import React from 'react';
import {onThunkLogout} from './store/thunk';
const ProfileScreen = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.profileReducer);
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
  const onProfilePress = () => {
    props.navigation.navigate('UserProfile');
  };
  return (
    <ProfileComponent
      onLogoutPress={onLogoutPress}
      onReminderPress={onReminderPress}
      currentUser={user.currentUser}
      onProfilePress={onProfilePress}
    />
  );
};
export default ProfileScreen;
