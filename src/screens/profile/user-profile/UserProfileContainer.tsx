import {useSelector} from 'react-redux';
import {UserProfileComponent} from './UserProfileComponent';
import React from 'react';
export const UserProfileContainer = props => {
  const user = useSelector(state => state?.profileReducer);
  const onGoBack = () => {
    props.navigation.goBack();
  };
  return (
    <UserProfileComponent currentUser={user.currentUser} onBack={onGoBack} />
  );
};
