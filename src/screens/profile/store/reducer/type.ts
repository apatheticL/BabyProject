import {User} from '../../../../core/model/user';
import {UserInfo} from '../../../../core/model/user-info.model';

export const SET_USER = 'SET_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CLEAR_USER = 'CLEAR_USER';

export interface ProfileState {
  user: User;
  currentUser: UserInfo;
}

export interface SetUserInfoAction {
  type: typeof SET_USER;
  payload: User;
}

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: UserInfo;
}
export interface ClearUserAction {
  type: typeof CLEAR_USER;
}
