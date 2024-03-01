import {User} from '../../../../core/model/user';
import {UserInfo} from '../../../../core/model/user-info.model';
import {CLEAR_USER, ProfileState, SET_CURRENT_USER, SET_USER} from './type';

const initState: ProfileState = {
  user: new User(),
  currentUser: new UserInfo(),
};

export const profileReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case CLEAR_USER:
      console.log('====================================');
      console.log('rerree');
      console.log('====================================');
      return {
        ...state,
        user: new User(),
        currentUser: new UserInfo(),
      };
    default:
      return state;
  }
};
