import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDateToString} from '../core/utils/formater';
import {useEffect, useState} from 'react';
import React from 'react';
import {defaultStyle} from '../styles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
interface DateTimeSelectedProps {
  date?: Date;
  onDateChange: (date: Date) => void;
  minimumDate?: Date;
  maximumDate?: Date;
}

export const DateTimeSelected = (props: DateTimeSelectedProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(props.date ?? new Date());
  useEffect(() => {
    setDate(props.date ?? new Date());
  }, [props.date]);
  return (
    <View style={defaultStyle.viewEditText}>
      <TouchableOpacity style={styles.viewDate} onPress={() => setOpen(!open)}>
        <Text style={styles.txtDate}>{formatDateToString(date)}</Text>
        <Icon name="calendar-heart" size={24} color="#1A1F52" />
        {open && (
          <RNDateTimePicker
            mode={'date'}
            value={date}
            display="default"
            is24Hour={true}
            onChange={(event, newDate) => {
              setOpen(false);
              setDate(newDate ?? date);
              props.onDateChange(newDate ?? date);
            }}
            minimumDate={props.minimumDate}
            maximumDate={props.maximumDate}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewDate: {marginVertical: 16, flexDirection: 'row'},
  txtDate: {flex: 1, fontSize: 16, color: '#1A1F52'},
});
