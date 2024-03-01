import {useDispatch, useSelector} from 'react-redux';
import {ProfileComponent} from './ProfileComponent';

import React, {useEffect} from 'react';
import {onThunkGetCurrentUser, onThunkLogout} from './store/thunk';
import {useIsFocused} from '@react-navigation/native';
import {isEmpty} from '../../core/utils/utils';
const ProfileScreen = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.profileReducer);
  const focus = useIsFocused();
  useEffect(() => {
    if (focus && !isEmpty(user?.currentUser?.UserId)) {
      onGetData();
    }
  }, [focus, user?.currentUser?.UserId]);

  const onGetData = () => {
    dispatch(
      onThunkGetCurrentUser(
        user.currentUser.UserId,
        () => {},
        () => {},
      ),
    );
  };
  const onReminderPress = () => {};
  const onLogoutPress = () => {
    dispatch(
      onThunkLogout(
        () => {
          __DEV__ && console.log('logout success');
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
