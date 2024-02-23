import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {defaultStyle} from '../styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  label: string;
  onPress?: () => void;
  disable?: boolean;
}

export const LabelSelectItemComponent = (props: Props) => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      style={[defaultStyle.borderColorDefault, styles.viewContent]}
      onPress={() => {
        props.onPress?.();
      }}>
      <Text style={[defaultStyle.textTitle, defaultStyle.flex1]}>
        {props.label}
      </Text>
      <Icon name="chevron-down" size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewContent: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    height: 22,
    width: 22,
    color: '#232B5D',
  },
});
