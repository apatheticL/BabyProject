import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {ApiResultModel} from '../model/api-result.model';
import {PermissionsAndroid} from 'react-native';

var options: ImageLibraryOptions = {
  selectionLimit: 10,
  quality: 1,
  mediaType: 'photo',
};

var optionsCamera: CameraOptions = {
  durationLimit: 10000,
  saveToPhotos: true,
  cameraType: 'back',
  mediaType: 'photo',
};
const hasCameraPermission = async () => {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.CAMERA;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const granted = await PermissionsAndroid.request(permission, {
      title: 'Request Permission',
      message: 'My App needs access to your camera ',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const pickImage = () => {
  return new Promise<ApiResultModel>((resolve, reject) => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        resolve({
          status: false,
          data: null,
          message: 'User cancelled image picker',
        });
      } else if (response.errorCode) {
        reject({
          status: false,
          error: response.errorCode,
          message: 'ImagePicker Error: ' + response.errorMessage,
        });
      } else {
        resolve({
          status: true,
          data: response.assets,
          message: 'Success',
        });
      }
    });
  });
};
export const takePhoto = async () => {
  const permission = await hasCameraPermission();
  if (permission) {
    return new Promise<ApiResultModel>((resolve, reject) => {
      launchCamera(optionsCamera, response => {
        if (response.didCancel) {
          resolve({
            status: false,
            data: null,
            message: 'User cancelled image picker',
          });
        } else if (response.errorCode) {
          reject({
            status: false,
            error: response.errorCode,
            message: 'ImagePicker Error: ' + response.errorMessage,
          });
        } else {
          resolve({
            status: true,
            data: response.assets,
            message: 'Success',
          });
        }
      });
    });
  }
};
