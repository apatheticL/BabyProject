import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
interface ButtonComponentProps {
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
}
export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnSubmit,
        props.backgroundColor ? {backgroundColor: props.backgroundColor} : {},
      ]}
      onPress={() => {
        props.onPress?.();
      }}>
      <Text style={styles.txtButton}>{props.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: '#f47373',
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 16,
  },
  txtButton: {fontSize: 16, color: 'white'},
});
