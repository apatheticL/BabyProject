import {View} from 'react-native';
import {EditTextField} from './input-field';
import React from 'react';
import {LabelComponent} from './label.component';
import {defaultStyle} from '../styles';
import {BoxComponent} from './box.component';
interface LabelInputTextProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  secureTextEntry?: boolean;
  placeholder?: string;
}
export const LabelInputTextComponent = (props: LabelInputTextProps) => {
  return (
    <View style={defaultStyle.marginLabel}>
      <LabelComponent label={props.label} />
      <BoxComponent />
      <EditTextField
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
      />
    </View>
  );
};
