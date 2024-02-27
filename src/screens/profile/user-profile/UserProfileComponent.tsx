import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UserInfo} from '../../../core/model/user-info.model';
import React = require('react');
import {TopNavigationBar} from '../../../components/header-tab';
import {defaultStyle} from '../../../styles';
import {ImageSource} from '../../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../styles/color';
import {BoxComponent} from '../../../components/box.component';
import {CardProfileInfo} from '../component/CardProfileInfo';

interface Props {
  currentUser?: UserInfo;
  onChangeAvatar?: () => void;
  onChangeUserInfo?: (use: UserInfo) => void;
  onBack?: () => void;
}
export const UserProfileComponent = (props: Props) => {
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <TopNavigationBar title="" onBack={props.onBack} />
      <View style={styles.viewHeader}>
        <View style={styles.viewAvatar}>
          <Image
            source={ImageSource.avatarDefault}
            style={styles.imageAvatar}
          />
          <TouchableOpacity
            onPress={props.onChangeAvatar}
            style={styles.viewIcon}>
            <Icon name="camera" size={18} color={'#4A47BD'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{props.currentUser?.Name}</Text>
        <Text style={styles.phone}>{props.currentUser?.Phone}</Text>
        <BoxComponent style={styles.box} />
      </View>
      <CardProfileInfo currentUser={props.currentUser} />
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
  imageAvatar: {width: 64, height: 64, borderRadius: 32},
  viewAvatar: {width: 64, height: 70},
  viewHeader: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    bottom: 2,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    right: 2,
    position: 'absolute',
    backgroundColor: '#EFEFFF',
    borderRadius: 32,
  },
});
