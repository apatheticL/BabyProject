import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../styles/color';
import {Schedule} from '../../../core/model/schedule.model';
import {AddNoDataComponent} from './add-no-data.component';
import {ScheduleItemComponent} from '../../reminders/component/item.component';
import {LoadingComponent} from '../../../components/loading.component';
import { defaultStyle } from '../../../styles';
interface ItemReminderComponentProps {
  reminder?: Schedule;
  onAddSchedule?: () => void;
  onPress?: (reminder?: Schedule) => void;
  loading?: boolean;
}
export const ItemReminderComponent = (props: ItemReminderComponentProps) => {
  //checkup milestone
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Reminder</Text>

      {props.reminder ? (
        <ScheduleItemComponent
          schedule={props.reminder}
          onPress={props.onPress}
        />
      ) : props.loading ? (
        <View style={defaultStyle.height50}>
          <LoadingComponent />
        </View>
      ) : (
        <AddNoDataComponent
          label="No Reminder information"
          title="Please ddd your Reminder information"
          labelButton="Add Reminder"
          styleButton={styles.btnAdd}
          onPress={props.onAddSchedule}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: '#f6c1ce',
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
  },
  name: {
    color: Color.MainText,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
});
