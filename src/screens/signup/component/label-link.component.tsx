import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {defaultStyle} from '../../../styles';
import React from 'react';
interface LabelProps {
  label: string;
  link: string;
  onPress?: () => void;
}
export const LabelLinkComponent = (props: LabelProps) => {
  return (
    <TouchableOpacity
      style={styles.viewContainer}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <Text style={defaultStyle.textTitle}>
        {props.label} <Text style={styles.txtLink}>{props.link}</Text>
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  txtLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
});
