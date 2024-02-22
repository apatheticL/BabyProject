import {View} from 'react-native';
import React from 'react';
import {UserInfoComponent} from './component/UserInfoComponent';
import {ItemSetting} from './component/ItemSetting';
import {defaultStyle} from '../../styles';
interface ProfileComponentProps {
  onReminderPress: () => void;
  onLogoutPress: () => void;
}
export const ProfileComponent = (props: ProfileComponentProps) => {
  return (
    <View style={[defaultStyle.background, {flex: 1}]}>
      <UserInfoComponent />
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
