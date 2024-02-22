import {Health} from '../../../../core/model/health.model';

export interface HealthState {
  healthList: Health[];
  currentHealth: Health;
}
export const SET_HEALTH_LIST = 'SET_HEALTH_LIST';
export const SET_CURRENT_HEALTH = 'SET_CURRENT_HEALTH';
export const CLEAR_HEALTH = 'CLEAR_HEALTH';

export interface SetHealthListAction {
  type: typeof SET_HEALTH_LIST;
  payload: Health[];
}

export interface SetCurrentHealthAction {
  type: typeof SET_CURRENT_HEALTH;
  payload: Health;
}

export interface ClearHealthAction {
  type: typeof CLEAR_HEALTH;
}
