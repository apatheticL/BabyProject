import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Schedule} from '../../../core/model/schedule.model';
import {defaultStyle} from '../../../styles';
import React from 'react';
import {ItemScheduleComponent} from '../component/item-schedule.component';
import {TopNavigationBar} from '../../../components/header-tab';
import {PlusIcon} from '../../../assets/icon';
interface Props {
  schedules: Schedule[];
  onSchedulePress: (schedule: Schedule) => void;
  onAddSchedule: () => void;
}

export const ListReminderComponent = (props: Props) => {
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <TopNavigationBar title="My Reminder" disableBack={true} />
      <FlatList
        data={props.schedules}
        renderItem={({item}) => {
          return (
            <ItemScheduleComponent
              schedule={item}
              onPress={props.onSchedulePress}
            />
          );
        }}
      />
      <TouchableOpacity style={styles.btnPlus} onPress={props.onAddSchedule}>
        {PlusIcon(styles.iconPlus)}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconPlus: {
    width: 42,
    height: 42,
  },
  btnPlus: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 8,
    zIndex: 99,
    elevation: 99,
  },
});
