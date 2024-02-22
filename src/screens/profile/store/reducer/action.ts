import {User} from '../../../../core/model/user';
import {UserInfo} from '../../../../core/model/user-info.model';
import {
  CLEAR_USER,
  ClearUserAction,
  SET_CURRENT_USER,
  SET_USER,
  SetCurrentUserAction,
  SetUserInfoAction,
} from './type';

export const setUserProfile = (payload: User): SetUserInfoAction => ({
  type: SET_USER,
  payload,
});

export const setCurrentUserProfile = (
  payload: UserInfo,
): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload,
});
export const clearUserProfile = (): ClearUserAction => ({type: CLEAR_USER});
