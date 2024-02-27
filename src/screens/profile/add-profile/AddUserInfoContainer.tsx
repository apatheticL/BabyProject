import React, {useEffect} from 'react';
import {AddUserInfoComponent} from './AddUserInfoComponent';
import {firebase} from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setUserProfile} from '../store/reducer/action';
import {User} from '../../../core/model/user';
import {UserInfo} from '../../../core/model/user-info.model';
import {onThunkLogout, onThunkUpdateUser} from '../store/thunk';
import {Alert} from 'react-native';
export const AddUserInfoContainer = props => {
  const {currentUser} = firebase.auth();
  const dispatch = useDispatch();
  const [_user, setCurrentUser] = React.useState<User | undefined>();

  useEffect(() => {
    if (currentUser) {
      setCurrentUser({
        email: currentUser.email,
        uid: currentUser.uid,
        phoneNumber: currentUser.phoneNumber,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        providerId: currentUser.providerId,
        emailVerified: currentUser.emailVerified,
        isAnonymous: currentUser.isAnonymous,
        metadata: currentUser.metadata,
      });
      dispatch(setUserProfile(_user ?? new User()));
    }
  }, [currentUser]);
  const onSaveUserInfo = (userInfo: UserInfo) => {
    dispatch(
      onThunkUpdateUser(
        userInfo,
        () => {
          Alert.alert('Save user info success');
          props.navigation.navigate('HomeScreen');
        },
        () => {
          Alert.alert('Save user info fail');
        },
      ),
    );
  };
  const onBack = () => {
    dispatch(
      onThunkLogout(
        () => {},
        () => {},
      ),
    );
    props.navigation.goBack();
  };
  return (
    <AddUserInfoComponent
      user={_user}
      onSaveUserInfo={onSaveUserInfo}
      onBack={onBack}
    />
  );
};
