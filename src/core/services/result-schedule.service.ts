import database from '@react-native-firebase/database';
import {ApiResultModel} from '../model/api-result.model';
import {
  ExaminationResult,
  ExaminationResultRequest,
} from '../model/examination-result.model';

export class ResultScheduleService {
  private static instance: ResultScheduleService;
  private constructor() {}
  public static getInstance(): ResultScheduleService {
    if (!this.instance) {
      this.instance = new ResultScheduleService();
    }
    return this.instance;
  }
  public getResultScheduleDetail = async (
    userId: string,
    scheduleId: string,
  ) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${userId}`)
        .once('value')
        .then(snapshot => {
          const results = Object.values(snapshot.val());
          const result = results.find(
            (item: any) => item.scheduleId === scheduleId,
          );
          resolve({status: true, data: result, message: 'Success'});
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  public addResultSchedule = async (result: ExaminationResultRequest) => {
    const key = database().ref('health').push().key;

    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${result.UserId}/${key}`)
        .set({
          scheduleId: result.scheduleId,
          Date: result.Date,
          Description: result.Description,
          UserId: result.UserId,
          timestamp: database.ServerValue.TIMESTAMP,
          Result: result.Result,
          Image: result.Image,
          Note: result.Note,
          HeartbeatBaby: result.HeartbeatBaby,
          Id: key,
        })
        .then(() => {
          resolve({status: true, data: key, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public updateResultSchedule = async (
    userId: string,
    result: ExaminationResult,
  ) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${userId}/${result.Id}`)
        .update({
          Date: result.Date,
          Description: result.Description,
          Result: result.Result,
          Image: result.Image,
          Note: result.Note,
          HeartbeatBaby: result.HeartbeatBaby,
        })
        .then(() => {
          resolve({status: true, data: result.Id, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public deleteResultSchedule = async (userId: string, resultId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${userId}/${resultId}`)
        .remove()
        .then(() => {
          resolve({status: true, data: resultId, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
}
