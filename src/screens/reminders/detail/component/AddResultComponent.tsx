import {Alert, StyleSheet, View} from 'react-native';
import {ButtonComponent} from '../../../../components/button.component';
import {LabelInputTextComponent} from '../../../../components/label-input-text.component';
import {LabelComponent} from '../../../../components/label.component';
import {ExaminationResultRequest} from '../../../../core/model/examination-result.model';
import React from 'react';
import {EditTextField} from '../../../../components/input-field';
import {BoxComponent} from '../../../../components/box.component';
import {OptionPhotoComponent} from '../../../../components/modal/option-photo.modal';
import {pickImage, takePhoto} from '../../../../core/utils/image-picker';
import {MultipleImageComponent} from './MultipleImageComponent';
import {UserInfo} from '../../../../core/model/user-info.model';
import {formatDateToString} from '../../../../core/utils/formater';
import {isEmpty} from '../../../../core/utils/utils';
import {defaultStyle} from '../../../../styles';
interface AddResultComponent {
  onAddResult?: (request: ExaminationResultRequest) => void;
  currentUser?: UserInfo;
  scheduleId?: string;
}

export const AddResultScheduleComponent = (props: AddResultComponent) => {
  const [motherSystolic, setMotherSystolic] = React.useState('');
  const [motherDiastolic, setMotherDiastolic] = React.useState('');

  const [motherWeight, setMotherWeight] = React.useState('');
  const [babyHeartbeat, setBabyHeartbeat] = React.useState('');
  const [babyWeight, setBabyWeight] = React.useState('');
  const [description, setDes] = React.useState('');
  const [note, setNote] = React.useState('');
  const [images, setImage] = React.useState<string[]>([]);
  const onAddResult = () => {
    if (isEmpty(props.scheduleId)) {
      Alert.alert('Please select reminder');
      return;
    }
    if (isEmpty(props.currentUser?.UserId)) {
      Alert.alert('Cannot add result because user is null');
      return;
    } else {
      props.onAddResult?.({
        HeartbeatBaby: Number.parseInt(babyHeartbeat, 0),
        BabyWeight: Number.parseInt(babyWeight),
        Description: description,
        MotherArm: `${motherSystolic}/${motherDiastolic}`,
        MotherWeight: Number.parseInt(motherWeight),
        Note: note,
        UserId: props?.currentUser?.UserId ?? '',
        Image: images,
        scheduleId: props.scheduleId ?? '',
        Date: formatDateToString(new Date()),
      });
    }
  };
  const onCameraPress = async () => {
    try {
      const result = await takePhoto();
      if (result) {
        setImage([...images, ...result?.data?.map((item: any) => item.uri)]);
      } else {
        console.log('result is null');
      }
    } catch (error) {
      __DEV__ && console.log('dev ~ onCameraPress ~ error:', error);
    }
  };
  const onGalleryPress = async () => {
    try {
      const result = await pickImage();
      if (result) {
        __DEV__ &&
          console.log(
            'JSON.strin',
            result?.data?.map((item: any) => item.uri),
          );
        setImage([...images, ...result?.data?.map((item: any) => item.uri)]);
        __DEV__ && console.log('JSON.strifsdsdfsdfsdn', JSON.stringify(images));
      } else {
        console.log('result is null');
      }
    } catch (error) {
      __DEV__ && console.log('dev ~ onCameraPress ~ error:', error);
    }
  };
  return (
    <View>
      <LabelComponent label="Mother Information" style={styles.styleLabel} />
      <BoxComponent style={styles.paddingItem} />
      <View style={styles.arm}>
        <EditTextField
          value={motherSystolic}
          placeholder="Systolic BP"
          keyboardType="numeric"
          onChangeText={setMotherSystolic}
        />
        <LabelComponent
          label="/"
          style={[defaultStyle.flex1, {textAlign: 'center'}]}
        />
        <EditTextField
          value={motherDiastolic}
          placeholder="Diastolic BP"
          keyboardType="numeric"
          onChangeText={setMotherDiastolic}
        />
      </View>

      <BoxComponent style={styles.paddingComponent} />

      <EditTextField
        value={motherWeight}
        placeholder="Enter Weight"
        keyboardType="numeric"
        onChangeText={setMotherWeight}
      />
      <BoxComponent style={styles.paddingLabel} />

      <LabelComponent label="Baby's Information" style={styles.styleLabel} />
      <BoxComponent style={styles.paddingItem} />

      <EditTextField
        value={babyHeartbeat}
        placeholder="Enter Heartbeat"
        keyboardType="numeric"
        onChangeText={setBabyHeartbeat}
      />
      <BoxComponent style={styles.paddingComponent} />

      <EditTextField
        value={babyWeight}
        placeholder="Enter Weight"
        keyboardType="numeric"
        onChangeText={setBabyWeight}
      />
      <BoxComponent style={styles.paddingItem} />

      <LabelInputTextComponent
        label={'Description'}
        placeholder={'Enter description'}
        value={description}
        onChangeText={setDes}
      />
      <BoxComponent style={styles.paddingComponent} />

      <LabelInputTextComponent
        label={'Note'}
        placeholder={'Enter note'}
        value={note}
        onChangeText={setNote}
      />
      <BoxComponent style={styles.paddingComponent} />
      <LabelComponent label="Images" />
      <BoxComponent style={styles.paddingItem} />
      {images.length === 0 ? (
        <OptionPhotoComponent
          onCameraPress={onCameraPress}
          onGalleryPress={onGalleryPress}
        />
      ) : (
        <MultipleImageComponent
          images={images}
          onCameraPress={onCameraPress}
          onGalleryPress={onGalleryPress}
        />
      )}

      <BoxComponent style={styles.paddingLabel} />

      <ButtonComponent onPress={onAddResult} label="Add Result" />
    </View>
  );
};
const styles = StyleSheet.create({
  arm: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paddingItem: {height: 4},
  paddingComponent: {height: 10},
  paddingLabel: {height: 16},
  styleLabel: {fontWeight: '400'},
});
