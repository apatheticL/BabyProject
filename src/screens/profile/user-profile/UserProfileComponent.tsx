import {Image, StyleSheet, Text, View} from 'react-native';
import {UserInfo} from '../../../core/model/user-info.model';
import {TopNavigationBar} from '../../../components/header-tab';
import {defaultStyle} from '../../../styles';
import {ImageSource} from '../../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../styles/color';
import {BoxComponent} from '../../../components/box.component';
import {CardProfileInfo} from '../component/CardProfileInfo';
import {OptionPhotoComponent} from '../../../components/modal/option-photo.modal';
import {pickImage, takePhoto} from '../../../core/utils/image-picker';
import React from 'react';
import {User} from '../../../core/model/user';
import {AvatarComponent} from '../../../components/avatar.component';
interface Props {
  currentUser?: UserInfo;
  userProfile?: User;
  onChangeAvatar?: (uri: string) => void;
  onChangeUserInfo?: (use: UserInfo) => void;
  onBack?: () => void;
}
export const UserProfileComponent = (props: Props) => {
  const [avatar, setAvatar] = React.useState(props.currentUser?.Avatar);
  const onCameraPress = async () => {
    try {
      const result = await takePhoto();
      if (result?.data && result?.data?.length > 0) {
        props.onChangeAvatar?.(result?.data[0].uri);
      }
    } catch (error) {
      __DEV__ && console.log('dev ~ onCameraPress ~ error:', error);
    }
  };

  const onGalleryPress = async () => {
    try {
      const result = await pickImage();
      if (result.data && result?.data?.length > 0) {
        props.onChangeAvatar?.(result?.data[0].uri);
      }
    } catch (error) {
      __DEV__ && console.log('dev ~ onGalleryPress ~ error:', error);
    }
  };
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <TopNavigationBar title="" onBack={props.onBack} />
      <View style={styles.viewHeader}>
        <View style={styles.viewAvatar}>
          <AvatarComponent
            url={props.currentUser?.Avatar}
            size={{width: 64, height: 64}}
          />
          <OptionPhotoComponent
            styleButton={styles.viewIcon}
            onCameraPress={onCameraPress}
            onGalleryPress={onGalleryPress}>
            <View style={styles.icon}>
              <Icon name="camera" size={18} color={'#4A47BD'} />
            </View>
          </OptionPhotoComponent>
        </View>
        <Text style={styles.name}>{props.currentUser?.Name}</Text>
        <Text style={styles.phone}>{props.currentUser?.Phone}</Text>
        <BoxComponent style={styles.box} />
      </View>
      <CardProfileInfo
        currentUser={props.currentUser}
        onChange={props.onChangeUserInfo}
        userProfile={props.userProfile}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cartDefault: {borderRadius: 0},
  box: {marginTop: 8},
  phone: {fontSize: 14, color: Color.MainText},
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: Color.MainText,
  },
  viewAvatar: {width: 64, height: 70},
  viewHeader: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    bottom: -5,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    right: 2,
    position: 'absolute',
    borderRadius: 32,
    borderWidth: 0,
  },
  icon: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#EFEFFF',
    borderRadius: 32,
  },
});
