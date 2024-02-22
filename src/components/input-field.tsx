import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {defaultStyle} from '../styles';
interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  secureTextEntry?: boolean;
}
export const EditTextField = (props: InputFieldProps) => {
  return (
    <View style={defaultStyle.viewEditText}>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder ?? 'Enter text here...'}
        style={styles.editText}
        value={props.value}
        onChangeText={value => {
          props.onChangeText(value);
        }}
        keyboardType={props.keyboardType ?? 'default'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  editText: {fontSize: 16, color: '#1A1F52'},
});
