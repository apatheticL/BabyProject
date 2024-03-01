import {UserInfo} from '../model/user-info.model';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {ApiResultModel} from '../model/api-result.model';
export const updateUserInfo = async (user: UserInfo) => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    database()
      .ref(`/users/${user.UserId}`)
      .set({
        DueDate: user.DueDate,
        GestationalAge: user.GestationalAge,
        Name: user.Name,
        Phone: user.Phone,
        UserId: user.UserId,
        Avatar: user.Avatar,
        Address: user.Address,
      })
      .then(() => {
        console.log('Data set.');
        resolve({status: true, data: user.UserId, message: ''});
      })
      .catch(error => {
        console.log('Error:', error);
        reject({status: false, data: null, message: error});
      });
  });
};

export const getUserInfo = async (userId: string) => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    database()
      .ref(`/users/${userId}`)
      .once('value')
      .then(snapshot => {
        const user = snapshot.val();
        resolve({
          status: true,
          data: user,
          message: 'Get user info successfully!',
        });
      })
      .catch(error => {
        reject({status: false, data: null, message: error});
      });
  });
};

export const updateUserAvatar = async (userId: string, avatar: string) => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    database()
      .ref(`/users/${userId}`)
      .update({
        Avatar: avatar,
      })
      .then(() => {
        resolve({status: true, data: userId, message: ''});
      })
      .catch(error => {
        console.log('Error:', error);
        reject({status: false, data: null, message: error});
      });
  });
};

export const updateGestationalAge = async (
  userId: string,
  GestationalAge: any,
) => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    database()
      .ref(`/users/${userId}`)
      .update({
        GestationalAge: GestationalAge,
      })
      .then(() => {
        resolve({status: true, data: userId, message: ''});
      })
      .catch(error => {
        console.log('Error:', error);
        reject({status: false, data: null, message: error});
      });
  });
};
export const logout = async () => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        resolve({status: true, data: true, message: 'logout success'});
      })
      .catch(error => {
        console.log('Error:', error);
        reject({status: false, data: null, message: error});
      });
  });
};
