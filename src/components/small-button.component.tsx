import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
interface ButtonComponentProps {
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
  customStyle?: StyleProp<ViewStyle>;
}
export const SmallButtonComponent = (props: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnSubmit,
        props.customStyle ? props.customStyle : {},
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
  },
  txtButton: {fontSize: 16, color: 'white'},
});
