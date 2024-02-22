import {Health} from '../../../../core/model/health.model';
import {
  CLEAR_HEALTH,
  ClearHealthAction,
  SET_CURRENT_HEALTH,
  SET_HEALTH_LIST,
  SetCurrentHealthAction,
  SetHealthListAction,
} from './type';

export const setCurrentHeath = (health: Health): SetCurrentHealthAction => {
  return {
    type: SET_CURRENT_HEALTH,
    payload: health,
  };
};

export const clearCurrentHealth = (): ClearHealthAction => {
  return {
    type: CLEAR_HEALTH,
  };
};

export const setHealthList = (healthList: Health[]): SetHealthListAction => {
  return {
    type: SET_HEALTH_LIST,
    payload: healthList,
  };
};
