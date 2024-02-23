import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  CalendarIcon,
  ImportantIcon,
  LocationPinIcon,
  MilestoneIcon,
  ScheduleIcon,
} from '../../../assets/icon';
import {ReminderType} from '../../../core/utils/contanst';
import {Color} from '../../../styles/color';
import {Schedule} from '../../../core/model/schedule.model';
import {AddNoDataComponent} from './add-no-data.component';
interface ItemReminderComponentProps {
  reminder?: Schedule;
  onAddSchedule?: () => void;
  onPress?: (reminder?: Schedule) => void;
}
export const ItemReminderComponent = (props: ItemReminderComponentProps) => {
  const renderIcon = (style: any) => {
    if (props.reminder?.GestationalWeek.type === ReminderType.Important) {
      return ImportantIcon(style);
    } else {
      return ScheduleIcon(style);
    }
  };
  const renderBackground = () => {
    if (props.reminder?.GestationalWeek.type === ReminderType.Important) {
      return {
        backgroundColor: '#EBF1F6',
      };
    } else {
      return {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCCEDF',
      };
    }
  };
  const renderItem = (
    title: string,
    value: string,
    icon: any,
    isShowIcon?: boolean,
  ) => {
    return (
      <View style={styles.viewRow}>
        {icon(styles.icon)}
        <Text style={styles.titleItem}>{title}</Text>
        <Text style={styles.valueItem}>{value}</Text>
        {isShowIcon ? renderIcon(styles.importantIcon) : null}
      </View>
    );
  };
  //checkup milestone
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Reminder</Text>

      {props.reminder ? (
        <TouchableOpacity
          onPress={() => props.onPress?.(props.reminder)}
          style={[styles.viewContainer, renderBackground()]}>
          <View style={styles.viewRow}>
            <View style={styles.viewContent}>
              {renderItem(
                'Milestone:',
                `${props.reminder?.GestationalWeek.week} weeks`,
                MilestoneIcon,
                props.reminder.GestationalWeek.type === 1,
              )}
              {renderItem('Date:', `${props.reminder?.Date}`, CalendarIcon)}
              {renderItem('Address:', props.reminder?.Address, LocationPinIcon)}
            </View>
          </View>
        </TouchableOpacity>
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

  viewContent: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 4,
  },
  viewContainer: {
    borderRadius: 8,
  },
  viewIcon: {
    backgroundColor: '#7bdcb5',
    borderRadius: 64,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  name: {
    color: Color.MainText,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  titleItem: {
    color: 'black',
    fontSize: 14,
    marginRight: 8,
  },
  valueItem: {
    color: 'black',
    fontSize: 16,
    flex: 1,
    fontWeight: '500',
  },
  icon: {
    paddingVertical: 8,
    height: 20,
    width: 20,
    marginRight: 8,
  },
  importantIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});
