import {firebase} from '@react-native-firebase/auth';
import {Health, HealthRequest} from '../model/health.model';
import database from '@react-native-firebase/database';
import {ApiResultModel} from '../model/api-result.model';
export class HealthService {
  private static instance: HealthService;
  private constructor() {}
  public static getInstance(): HealthService {
    if (!this.instance) {
      this.instance = new HealthService();
    }
    return this.instance;
  }
  public getNewHealthByUserId = async (userId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${userId}`)
        .orderByKey()
        .limitToLast(1)
        .once('value')
        .then(snapshot => {
          const health = Object.values(snapshot.val())[0];
          resolve({status: true, data: health, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
  public addHealth = async (health: HealthRequest) => {
    const key = database().ref('/health').push().key;
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${health.UserId}/${key}`)
        .set({
          Date: health.Date,
          Description: health.Description,
          Id: key,
          UserId: health.UserId,
          iconId: health.iconId,
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

  public getHealthDetail = async (userId: string, healthId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${userId}/${healthId}`)
        .once('value')
        .then(snapshot => {
          const health = snapshot.val();
          resolve({status: true, data: health, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };

  public getHealthListByUser = async (userId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${userId}`)
        .once('value')
        .then(snapshot => {
          const health = Object.values(snapshot.val());
          resolve({status: true, data: health, message: 'Success'});
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  public UpdateHealth = async (userId: string, health: Health) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${userId}/${health.Id}`)
        .update({
          Date: health.Date,
          Description: health.Description,
          Id: health.Id,
          UserId: health.UserId,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        })
        .then(_snapshot => {
          resolve({status: true, data: health.Id, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };

  public DeleteHealth = async (userId: string, healthId: string) => {
    return new Promise<ApiResultModel>((resolve, reject) => {
      database()
        .ref(`/health/${userId}/${healthId}`)
        .remove()
        .then(() => {
          resolve({status: true, data: true, message: 'Success'});
        })
        .catch(error => {
          reject({status: false, error: error, message: 'Error'});
        });
    });
  };
}
