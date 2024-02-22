import {firebase as firebaseStore} from '@react-native-firebase/storage';

export const uploadImage = async (imageUri: string, pathUri: string) => {
  const store = firebaseStore.app().storage();
  const reference = store.ref(pathUri);
  return new Promise<string>(async (resolve, reject) => {
    await reference
      .putFile(imageUri)
      .then(() => {
        resolve(pathUri);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getImageDownloadUrl = async (imageUri: string) => {
  const storage = firebaseStore.app().storage();

  const url = await storage.ref(imageUri).getDownloadURL();
  return url;
};
