import {Health} from '../../../../core/model/health.model';
import {
  CLEAR_HEALTH,
  HealthState,
  SET_CURRENT_HEALTH,
  SET_HEALTH_LIST,
} from './type';

const initState: HealthState = {
  healthList: [],
  currentHealth: new Health(),
};

export const healthReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_HEALTH_LIST:
      return {
        ...state,
        healthList: action.payload,
      };
    case SET_CURRENT_HEALTH:
      return {
        ...state,
        currentHealth: action.payload,
      };
    case CLEAR_HEALTH:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
