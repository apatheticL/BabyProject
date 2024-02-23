import {Schedule} from '../../../../core/model/schedule.model';
import {
  CLEAR_SCHEDULE,
  ClearScheduleAction,
  SET_CURRENT_SCHEDULE,
  SET_SCHEDULE_LIST,
  SetCurrentScheduleAction,
  SetScheduleListAction,
} from './type';

export const setCurrentSchedule = (
  schedule: Schedule,
): SetCurrentScheduleAction => {
  return {
    type: SET_CURRENT_SCHEDULE,
    payload: schedule,
  };
};

export const clearCurrentSchedule = (): ClearScheduleAction => {
  return {
    type: CLEAR_SCHEDULE,
  };
};

export const setScheduleList = (list: Schedule[]): SetScheduleListAction => {
  return {
    type: SET_SCHEDULE_LIST,
    payload: list,
  };
};
