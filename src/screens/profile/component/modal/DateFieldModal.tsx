import {View} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {convertStringToDate} from '../../../../core/utils/formater';
interface DateTimeSelectedProps {
  date?: Date | string;
  onDateChange: (date?: Date) => void;
  minimumDate?: Date;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export const DateTimeModal = (props: DateTimeSelectedProps) => {
  const [date, setDate] = useState<Date | undefined>();
  __DEV__ && console.log('props.date', props.date);
  useEffect(() => {
    if (typeof props.date === 'string') {
      var _date = convertStringToDate(props.date);
      setDate(_date);
    } else {
      setDate(props.date ?? new Date());
    }
  }, [props.date]);
  return (
    <View>
      {props.open && (
        <RNDateTimePicker
          mode={'date'}
          value={date ?? new Date()}
          display="default"
          is24Hour={true}
          onChange={(event, newDate) => {
            if (event.type === 'dismissed') {
              props.setOpen?.(false);
            }
            if (newDate && newDate.getTime() !== date?.getTime()) {
              props.setOpen?.(false);
              props.onDateChange(newDate);
            }
          }}
          minimumDate={props.minimumDate}
        />
      )}
    </View>
  );
};
