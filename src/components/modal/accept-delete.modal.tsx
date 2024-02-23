import Modal from 'react-native-modal';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {BoxComponent} from '../box.component';
import {defaultStyle} from '../../styles';
import {SmallButtonComponent} from '../small-button.component';
interface Props {
  onAccept: () => void;
  onDecline: () => void;
  visible: boolean;
  label?: string;
  title?: string;
}
export function AcceptDeleteModal(props: Props) {
  return (
    <Modal
      isVisible={props.visible}
      onBackdropPress={props.onDecline}
      onBackButtonPress={props.onDecline}
      style={styles.viewModal}>
      <View style={styles.view}>
        <View style={styles.viewHeader}>
          <Text style={styles.txtTitle}>{props.label ?? 'Delete'}</Text>
          <Text style={styles.txtSubTitle}>
            {props.title ?? 'Are you sure delete information?'}
          </Text>
        </View>

        <View style={[defaultStyle.row, {height: 32}]}>
          <SmallButtonComponent
            customStyle={styles.customButton}
            label="Accept"
            onPress={props.onAccept}
            backgroundColor="blue"
          />
          <BoxComponent style={{width: 16}} />
          <SmallButtonComponent
            customStyle={styles.customButton}
            label="Decline"
            onPress={props.onDecline}
          />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  viewHeader: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  view: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    minHeight: 200,
  },
  viewModal: {justifyContent: 'center', alignItems: 'center', padding: 0},
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  txtSubTitle: {fontSize: 16, color: 'gray', marginBottom: 8},
  customButton: {
    paddingVertical: 4,
  },
});
