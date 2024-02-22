import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {ImageSource} from '../../../assets/images';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isEmpty} from '../../../core/utils/utils';

export const UserInfoComponent = () => {
  const profileReducer = useSelector(state => state?.profileReducer ?? {});
  const getAvatar = useMemo(() => {
    if (profileReducer.currentUser?.Avatar) {
      return profileReducer.currentUser?.Avatar;
    }
    return '';
  }, [profileReducer.currentUser]);
  return (
    <View style={styles.container}>
      <Image
        source={getAvatar !== '' ? {uri: getAvatar} : ImageSource.avatarDefault}
        style={styles.avatar}
      />
      <View style={{flex: 1}}>
        {/* Name */}
        <Text style={styles.name}>
          {isEmpty(profileReducer.currentUser?.Name)
            ? 'Unknow'
            : profileReducer.currentUser?.Name}
        </Text>
        {/* Email */}
        <Text style={styles.subItem}>
          {profileReducer.currentUser?.Email ?? 'test@gmail.com'}
        </Text>
      </View>
      <Icon name="chevron-right" size={30} color="black" />
    </View>
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
