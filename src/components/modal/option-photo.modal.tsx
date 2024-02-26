import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import {useState} from 'react';
import React from 'react';
import {defaultStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  onCameraPress?: () => void;
  onGalleryPress?: () => void;
  children?: React.ReactNode;
  styleButton?: StyleProp<ViewStyle>;
}

export const OptionPhotoComponent = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={[
          defaultStyle.borderColorDefault,
          styles.btnSelected,
          props.styleButton ? props.styleButton : {},
        ]}
        onPress={() => setIsVisible(!isVisible)}>
        {props.children ? (
          props.children
        ) : (
          <>
            <Text style={[styles.txtSelect, defaultStyle.flex1]}>
              Select Photo
            </Text>
            <Icon name="plus-box-multiple" size={20} color={'#232B5D'} />
          </>
        )}
      </TouchableOpacity>
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
        onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
                props.onCameraPress?.();
              }}
              style={[
                defaultStyle.borderColorDefault,
                styles.btnButtonTakePhoto,
              ]}>
              <Text style={styles.txtButton}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                defaultStyle.borderColorDefault,
                styles.btnButtonSelectGallery,
              ]}
              onPress={() => {
                props.onGalleryPress?.();
                setIsVisible(false);
              }}>
              <Text style={styles.txtButton}>Choose From Gallery</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewCancel}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
                props.onCameraPress?.();
              }}
              style={[defaultStyle.borderColorDefault, styles.btnCancel]}>
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  txtSelect: {color: 'gray', fontSize: 16},
  btnSelected: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    flexDirection: 'row',
  },
  label: {marginTop: 16},
  viewContainer: {width: '90%'},
  modal: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtButton: {textAlign: 'center', fontSize: 18, color: '#1273de'},
  txtCancel: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: '#1273de',
  },
  btnCancel: {
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCancel: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 50,
    marginTop: 14,
  },
  btnButtonTakePhoto: {
    borderWidth: 0,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnButtonSelectGallery: {
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTakePhoto: {
    borderWidth: 0,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  view: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
  },
});
