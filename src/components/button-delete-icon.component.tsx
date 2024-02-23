import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {RemoveIcon} from '../assets/icon';
import React, {useState} from 'react';
import {AcceptDeleteModal} from './modal/accept-delete.modal';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  styleIcon?: StyleProp<ImageStyle>;
}
export const ButtonDeleteIcon = (props: ButtonProps) => {
  const [open, setOpen] = useState(false);
  const onPress = () => {
    setOpen(!open);
  };
  const onAccept = () => {
    setOpen(false);
    props.onPress?.();
  };
  const onDecline = () => {
    setOpen(false);
  };
  return (
    <>
      <TouchableOpacity
        style={[styles.buttonRemove, props.style ? props.style : {}]}
        onPress={onPress}>
        {RemoveIcon([styles.icon, props.styleIcon ? props.styleIcon : {}])}
      </TouchableOpacity>
      <AcceptDeleteModal
        visible={open}
        onDecline={onDecline}
        onAccept={onAccept}
      />
    </>
  );
};
const styles = StyleSheet.create({
  buttonRemove: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
