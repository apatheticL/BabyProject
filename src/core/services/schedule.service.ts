import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {ApiResultModel} from '../model/api-result.model';
import {Schedule, ScheduleRequest} from '../model/schedule.model';
export class ScheduleService {
  private static instance: ScheduleService;
  private constructor() {}
  public static getInstance(): ScheduleService {
    if (!this.instance) {
      this.instance = new ScheduleService();
    }
    return this.instance;
  }
  public addSchedule = async (health: ScheduleRequest) => {
    const key = database().ref(`/schedules/${health.UserId}`).push().key;
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${health.UserId}/${key}`)
        .set({
          Address: health.Address,
          Date: health.Date,
          GestationalWeek: health.GestationalWeek,
          UserId: health.UserId,
          Id: key,
          Note: health.Note,
          Status: health.Status,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        })
        .then(() => {
          resolve({status: true, data: key, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public getScheduleDetail = async (userId: string, scheduleId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}/${scheduleId}`)
        .once('value')
        .then(snapshot => {
          const schedule = snapshot.val();
          database()
            .ref(`/ExaminationResults/${userId}/${scheduleId}`)
            .once('value')
            .then(_snapshot => {
              if (_snapshot.exists()) {
                schedule.Results = Object.values(_snapshot.val())[0];
                resolve({status: true, data: schedule, message: 'Success'});
              } else {
                resolve({status: true, data: schedule, message: 'Success'});
              }
            })
            .catch(error => {
              resolve({status: true, data: schedule, message: 'Success'});
            });
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public getScheduleListByUser = async (userId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}`)
        .once('value')
        .then(snapshot => {
          const schedule = Object.values(snapshot.val());
          resolve({status: true, data: schedule, message: 'Success'});
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  public UpdateSchedule = async (userId: string, schedule: Schedule) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}/${schedule.Id}`)
        .update({
          Address: schedule.Address,
          Date: schedule.Date,
          GestationalWeek: schedule.GestationalWeek,
          Type: schedule.Type,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        })
        .then(_snapshot => {
          resolve({status: true, data: schedule.Id, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };

  public DeleteSchedule = async (userId: string, scheduleId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}/${scheduleId}`)
        .remove()
        .then(() => {
          resolve({status: true, data: true, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };

  public getNewScheduleByUserId = async (userId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}`)
        .orderByKey()
        .limitToLast(1)
        .once('value')
        .then(snapshot => {
          const schedule = Object.values(snapshot.val())[0];
          resolve({status: true, data: schedule, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public updateStatus = async (
    userId: string,
    scheduleId: string,
    status: number,
  ) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/schedules/${userId}/${scheduleId}`)
        .update({
          Status: status,
        })
        .then(_snapshot => {
          resolve({status: true, data: scheduleId, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
}
