import {Schedule} from '../../../../core/model/schedule.model';

export interface ScheduleState {
  scheduleList: Schedule[];
  currentSchedule: Schedule;
}
export const SET_SCHEDULE_LIST = 'SET_SCHEDULE_LIST';
export const SET_CURRENT_SCHEDULE = 'SET_CURRENT_SCHEDULE';
export const CLEAR_SCHEDULE = 'CLEAR_SCHEDULE';

export interface SetScheduleListAction {
  type: typeof SET_SCHEDULE_LIST;
  payload: Schedule[];
}

export interface SetCurrentScheduleAction {
  type: typeof SET_CURRENT_SCHEDULE;
  payload: Schedule;
}

export interface ClearScheduleAction {
  type: typeof CLEAR_SCHEDULE;
}
