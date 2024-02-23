import {Schedule, ScheduleRequest} from '../../../../core/model/schedule.model';
import {ScheduleService} from '../../../../core/services/schedule.service';
import {setCurrentSchedule, setScheduleList} from '../reducer/action';

export const onThunkAddSchedule =
  (schedule: ScheduleRequest, onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    try {
      const result = await ScheduleService.getInstance().addSchedule(schedule);
      if (result.status) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };

export const onThunkUpdateSchedule =
  (
    userId: string,
    schedule: Schedule,
    onSuccess: () => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await ScheduleService.getInstance().UpdateSchedule(
        userId,
        schedule,
      );
      if (result.status) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkScheduleDetail =
  (
    userId: string,
    scheduleId: string,
    onSuccess: (health: Schedule) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await ScheduleService.getInstance().getScheduleDetail(
        userId,
        scheduleId,
      );
      if (result.status) {
        onSuccess(result.data);
        dispatch(setCurrentSchedule(result.data));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkScheduleListByUser =
  (
    userId: string,
    onSuccess: (healths: Schedule[]) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await ScheduleService.getInstance().getScheduleListByUser(
        userId,
      );
      if (result.status) {
        onSuccess(result.data);
        dispatch(setScheduleList(result.data));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkGetLastSchedule =
  (
    userId: string,
    onSuccess: (healths: Schedule) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await ScheduleService.getInstance().getNewScheduleByUserId(
        userId,
      );
      if (result.status) {
        onSuccess(result.data);
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
