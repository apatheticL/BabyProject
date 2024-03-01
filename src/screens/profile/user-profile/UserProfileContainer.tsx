import {useDispatch, useSelector} from 'react-redux';
import {UserProfileComponent} from './UserProfileComponent';
import React from 'react';
import {UserInfo} from '../../../core/model/user-info.model';
import {onThunkUpdateAvatar, onThunkUpdateUser} from '../store/thunk';
import {Alert} from 'react-native';
import {LoadingComponent} from '../../../components/loading.component';
export const UserProfileContainer = props => {
  const user = useSelector(state => state?.profileReducer);
  __DEV__ && console.log('dev ~ UserProfileContainer ~ user:', user)
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const onGoBack = () => {
    props.navigation.goBack();
  };
  const onChange = (use: UserInfo) => {
    setLoading(true);
    dispatch(
      onThunkUpdateUser(
        use,
        () => {
          setLoading(false);
        },
        () => {
          setLoading(false);
          Alert.alert('Update fail');
        },
      ),
    );
  };

  const onChangeAvatar = (avatar: string) => {
    if (user.currentUser?.UserId) {
      setLoading(true);
      dispatch(
        onThunkUpdateAvatar(
          avatar,
          user.currentUser?.UserId,
          () => {
            setLoading(false);
          },
          () => {
            setLoading(false);
            Alert.alert('Update fail');
          },
        ),
      );
    }
  };
  return (
    <>
      {loading && <LoadingComponent />}
      <UserProfileComponent
        currentUser={user.currentUser}
        userProfile={user.user}
        onBack={onGoBack}
        onChangeUserInfo={onChange}
        onChangeAvatar={onChangeAvatar}
      />
    </>
  );
};
