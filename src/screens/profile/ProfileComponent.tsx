import {View} from 'react-native';
import React from 'react';
import {UserInfoComponent} from './component/UserInfoComponent';
import {ItemSetting} from './component/ItemSetting';
import {defaultStyle} from '../../styles';
import {UserInfo} from '../../core/model/user-info.model';
interface ProfileComponentProps {
  onReminderPress: () => void;
  onLogoutPress: () => void;
  currentUser?: UserInfo;
  onProfilePress?: () => void;
}
export const ProfileComponent = (props: ProfileComponentProps) => {
  return (
    <View style={[defaultStyle.background, {flex: 1}]}>
      <UserInfoComponent
        currentUser={props.currentUser}
        onPress={props.onProfilePress}
      />
      <View style={{backgroundColor: 'white', marginTop: 8}}>
        <ItemSetting
          nameIcon={'alarm-snooze'}
          title={'Reminder'}
          onPress={props.onReminderPress}
        />
        <ItemSetting
          nameIcon={'logout'}
          title={'Sign Out'}
          onPress={props.onLogoutPress}
          isLastItem={true}
        />
      </View>
    </View>
  );
};
