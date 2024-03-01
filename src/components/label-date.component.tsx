import {View} from 'react-native';
import React from 'react';
import {LabelComponent} from './label.component';
import {defaultStyle} from '../styles';
import {DateTimeSelected} from './date-time.selected';
import {BoxComponent} from './box.component';
interface LabelDatePickerProps {
  label: string;
  value: Date;
  onDateChange: (text: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}
export const LabelDatePickerComponent = (props: LabelDatePickerProps) => {
  return (
    <View style={defaultStyle.marginLabel}>
      <LabelComponent label={props.label} />
      <BoxComponent />
      <DateTimeSelected
        date={props.value}
        onDateChange={props.onDateChange}
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
      />
    </View>
  );
};
