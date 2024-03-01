import {UserInfo} from '../../../../core/model/user-info.model';
import {uploadImage} from '../../../../core/services/upload-image.service';
import {
  getUserInfo,
  logout,
  updateGestationalAge,
  updateUserAvatar,
  updateUserInfo,
} from '../../../../core/services/user.service';
import {clearUserProfile, setCurrentUserProfile} from '../reducer/action';

export const onThunkLogout =
  (onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    try {
      const result = await logout();
      if (result.status) {
        dispatch(clearUserProfile());
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
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
        __DEV__ && console.log('dev ~ AddHealthComponent ~ user:', result.data);
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };

export const onThunkUpdateAvatar =
  (
    avatar: string,
    userId: string,
    onSuccess: () => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const imageAva = await uploadImage(avatar, `users/${userId}`);
      const result = await updateUserAvatar(userId, imageAva);
      if (result.status) {
        dispatch(onThunkGetCurrentUser(userId, onSuccess, onFail));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkUpdateGestationalAge =
  (
    GestationalAge: any,
    userId: string,
    onSuccess: () => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      console.log('====================================');
      console.log();
      console.log('====================================');
      const result = await updateGestationalAge(userId, GestationalAge);
      if (result.status) {
        dispatch(onThunkGetCurrentUser(userId, onSuccess, onFail));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
