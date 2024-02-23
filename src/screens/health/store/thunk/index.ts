import {
  Health,
  HealthRequest,
  HealthStatus,
  HealthStatusRequest,
} from '../../../../core/model/health.model';
import {HealthService} from '../../../../core/services/health.service';
import {setCurrentHeath, setHealthList} from '../reducer/action';

export const onThunkAddHealth =
  (health: HealthRequest, onSuccess: () => void, onFail: () => void): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().addHealth(health);
      if (result.status) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };

export const onThunkUpdateHealth =
  (
    userId: string,
    health: Health,
    onSuccess: () => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().UpdateHealth(
        userId,
        health,
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
export const onThunkHealthDetail =
  (
    userId: string,
    healthId: string,
    onSuccess: (health: Health) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().getHealthDetail(
        userId,
        healthId,
      );
      if (result.status) {
        onSuccess(result.data);
        dispatch(setCurrentHeath(result.data));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkHealthListByUser =
  (
    userId: string,
    onSuccess: (healths: Health[]) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().getHealthListByUser(
        userId,
      );
      if (result.status) {
        onSuccess(result.data);
        dispatch(setHealthList(result.data));
      } else {
        onFail();
      }
    } catch (error) {
      onFail();
    }
  };
export const onThunkGetLastHeath =
  (
    userId: string,
    onSuccess: (healths: Health) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().getNewHealthByUserId(
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

export const onThunkAddStatusHealth =
  (
    userId: string,
    healthId: string,
    healthStatus: HealthStatusRequest,
    onSuccess: (healths: HealthStatus) => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().addHealthStatus(
        userId,
        healthId,
        healthStatus,
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
  export const onThunkRemoveStatusHealth =
  (
    userId: string,
    healthId: string,
    statusId: string,
    onSuccess: () => void,
    onFail: () => void,
  ): any =>
  async (dispatch: any) => {
    try {
      const result = await HealthService.getInstance().deleteHealthStatus(
        userId,
        healthId,
        statusId,
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
