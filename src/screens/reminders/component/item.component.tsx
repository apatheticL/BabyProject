import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  CalendarIcon,
  ImportantIcon,
  LocationPinIcon,
  MilestoneIcon,
  ScheduleIcon,
} from '../../../assets/icon';
import {Schedule} from '../../../core/model/schedule.model';
import React = require('react');
import {ReminderType} from '../../../core/utils/contanst';
interface Props {
  schedule: Schedule;
  onPress?: (schedule: Schedule) => void;
}
export const ScheduleItemComponent = (props: Props) => {
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

  /**
   *
   * @param style
   * @returns
   * render icon based on the schedule type
   * if type is important then show icon important
   * else show schedule icon
   */
  const renderIcon = (style: any) => {
    return props.schedule?.GestationalWeek.type === ReminderType.Important
      ? ImportantIcon(style)
      : ScheduleIcon(style);
  };
  const renderBackground = () => {
    return props.schedule?.GestationalWeek.type === ReminderType.Important
      ? {
          backgroundColor: '#e5b6b3',
        }
      : {
          backgroundColor: 'white',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#CCCEDF',
        };
  };

  return (
    <TouchableOpacity
      onPress={() => props.onPress?.(props.schedule)}
      style={[styles.viewContainer, renderBackground()]}>
      <View style={styles.viewRow}>
        <View style={styles.viewContent}>
          {renderItem(
            'Milestone:',
            `${props.schedule?.GestationalWeek.week} weeks`,
            MilestoneIcon,
            props.schedule.GestationalWeek.type === 1,
          )}
          {renderItem('Date:', `${props.schedule?.Date}`, CalendarIcon)}
          {renderItem('Address:', props.schedule?.Address, LocationPinIcon)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },

  btnAdd: {
    backgroundColor: '#f6c1ce',
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
});
