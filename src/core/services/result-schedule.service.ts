import database from '@react-native-firebase/database';
import {ApiResultModel} from '../model/api-result.model';
import {
  ExaminationResult,
  ExaminationResultRequest,
} from '../model/examination-result.model';
import {uploadListImage} from './upload-image.service';

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
        .ref(`/ExaminationResults/${userId}/${scheduleId}`)
        .once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            const results = Object.values(snapshot.val());
            resolve({status: true, data: results[0], message: 'Success'});
          } else {
            reject({status: false, error: 'No data', message: 'Error'});
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  public addResultSchedule = async (result: ExaminationResultRequest) => {
    const key = database().ref('health').push().key;
    if (result.Image && result.Image.length > 0) {
      let images = await uploadListImage(
        result.Image,
        `ExaminationResults/${result.UserId}/${result.scheduleId}`,
      );
      result.Image = images;
    }
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${result.UserId}/${result.scheduleId}/${key}`)
        .set({
          scheduleId: result.scheduleId,
          Date: result.Date,
          Description: result.Description,
          UserId: result.UserId,
          timestamp: database.ServerValue.TIMESTAMP,
          Image: result.Image,
          Note: result.Note,
          HeartbeatBaby: result.HeartbeatBaby,
          BabyWeight: result.BabyWeight,
          MotherWeight: result.MotherWeight,
          MotherArm: result.MotherArm,
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
        .ref(`/ExaminationResults/${userId}/${result.scheduleId}/${result.Id}`)
        .update({
          Date: result.Date,
          Description: result.Description,
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
  public deleteResultSchedule = async (
    userId: string,
    scheduleId: string,
    resultId: string,
  ) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/ExaminationResults/${userId}/${scheduleId}/${resultId}`)
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
