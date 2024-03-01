import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {LabelInputTextComponent} from '../../../../components/label-input-text.component';
import {ButtonComponent} from '../../../../components/button.component';
import {BoxComponent} from '../../../../components/box.component';
interface Props {
  isVisible: boolean;
  onClose: () => void;
  label: string;
  value?: string;
  onValueChange?: (value?: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}
export const TextFieldModal = (props: Props) => {
  const [value, setValue] = React.useState(props.value);
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.onClose}
      style={styles.modal}>
      <View style={styles.view}>
        <LabelInputTextComponent
          label={props.label}
          value={value ?? ''}
          onChangeText={setValue}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
        />
        <BoxComponent style={{height: 10}} />
        <ButtonComponent
          label={'Save'}
          onPress={() => {
            props.onValueChange?.(value);
          }}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  view: {
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
