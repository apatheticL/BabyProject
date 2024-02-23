import {Schedule} from '../../../../core/model/schedule.model';
import {
  CLEAR_SCHEDULE,
  ScheduleState,
  SET_CURRENT_SCHEDULE,
  SET_SCHEDULE_LIST,
} from './type';

const initState: ScheduleState = {
  scheduleList: [],
  currentSchedule: new Schedule(),
};

export const scheduleReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_SCHEDULE_LIST:
      return {
        ...state,
        scheduleList: action.payload,
      };
    case SET_CURRENT_SCHEDULE:
      return {
        ...state,
        currentSchedule: action.payload,
      };
    case CLEAR_SCHEDULE:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
