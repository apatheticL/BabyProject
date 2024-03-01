import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {ImageSource} from '../../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isEmpty} from '../../../core/utils/utils';
import {UserInfo} from '../../../core/model/user-info.model';
import {AvatarComponent} from '../../../components/avatar.component';
interface Props {
  currentUser?: UserInfo;
  onPress?: () => void;
}
export const UserInfoComponent = (props: Props) => {
  const getAvatar = useMemo(() => {
    if (props.currentUser?.Avatar) {
      return props.currentUser?.Avatar;
    }
    return '';
  }, [props.currentUser]);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <AvatarComponent url={getAvatar} size={{width: 52, height: 52}} />
      <View style={{flex: 1 , marginLeft: 16}}>
        {/* Name */}
        <Text style={styles.name}>
          {isEmpty(props.currentUser?.Name)
            ? 'Unknow'
            : props.currentUser?.Name}
        </Text>
        {/* Email */}
        <Text style={styles.subItem}>
          {props.currentUser?.Email ?? 'test@gmail.com'}
        </Text>
      </View>
      <Icon name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  subItem: {
    color: 'black',
    fontSize: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 32,
    marginRight: 16,
  },
});
