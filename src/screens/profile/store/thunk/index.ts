import {UserInfo} from '../../../../core/model/user-info.model';
import {
  getUserInfo,
  logout,
  updateUserInfo,
} from '../../../../core/services/user.service';
import {clearUserProfile, setCurrentUserProfile} from '../reducer/action';

export const onThunkLogout =
  (onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    await logout(() => {
      dispatch(clearUserProfile());
      onSuccess();
    }, onFail);
  };
export const onThunkUpdateUser =
  (user: UserInfo, onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    try {
      const result = await updateUserInfo(user);
      if (result.status) {
        dispatch(setCurrentUserProfile(user));
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };

export const onThunkGetCurrentUser =
  (userId: string, onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    try {
      const result = await getUserInfo(userId);
      __DEV__ && console.log('dev ~ result:', result);
      if (result.status) {
        onSuccess();
        dispatch(setCurrentUserProfile(result.data as UserInfo));
        __DEV__ &&
          console.log('dev ~ AddHealthComponent ~ user:', result.data?.UseId);
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
