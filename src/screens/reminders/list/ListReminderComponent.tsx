import {FlatList, View} from 'react-native';
import {Schedule} from '../../../core/model/schedule.model';
import {defaultStyle} from '../../../styles';
import {ScheduleItemComponent} from '../component/item.component';
import React from 'react';
interface Props {
  schedules: Schedule[];
  onSchedulePress: (schedule: Schedule) => void;
}

export const ListReminderComponent = (props: Props) => {
  __DEV__ && console.log('props.sche', props.schedules);
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <FlatList
        data={props.schedules}
        renderItem={({item}) => {
          return (
            <View style={{padding: 16}}>
              <ScheduleItemComponent
                schedule={item}
                onPress={props.onSchedulePress}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
