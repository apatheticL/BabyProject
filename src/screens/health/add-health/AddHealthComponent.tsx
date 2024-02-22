import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HealthRequest} from '../../../core/model/health.model';
import {useState} from 'react';
import React from 'react';
import {formatDateToString} from '../../../core/utils/formater';
import {useSelector} from 'react-redux';
import {SelectIconModal} from '../component/popup-icon.component';
import {defaultStyle} from '../../../styles';
import {TopNavigationBar} from '../../../components/header-tab';
import {IconModel} from '../../../core/model/icon.model';
import {ImageSource} from '../../../assets/images';
import {ButtonComponent} from '../../../components/button.component';
import {LabelInputTextComponent} from '../../../components/label-input-text.component';
import {LabelDatePickerComponent} from '../../../components/label-date.component';
import {LabelComponent} from '../../../components/label.component';
import {isEmpty} from '../../../core/utils/utils';
import { Box } from '@shopify/react-native-skia';
import { BoxComponent } from '../../../components/box.component';
interface AddHealthComponentProps {
  onSubmit?: (health: HealthRequest) => void;
  onBack?: () => void;
}
export const AddHealthComponent = (props: AddHealthComponentProps) => {
  const [statusHealth, setStatusHealth] = useState('');
  const [date, setDate] = useState(new Date());
  const user = useSelector(state => state?.profileReducer);
  const [icon, setIcon] = useState<IconModel | undefined>();
  // handle submit press send the health request to the parent component
  const onSubmitPress = () => {
    if (!isEmpty(user?.currentUser?.UserId)) {
      props.onSubmit?.({
        Date: formatDateToString(date),
        Description: statusHealth,
        iconId: icon?.id,
        UserId: user?.currentUser?.UserId ?? 'unknown',
      });
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[defaultStyle.background, defaultStyle.flex1]}>
        <TopNavigationBar title="Add Health" onBack={props.onBack} />
        <View style={styles.viewContainer}>
          <LabelInputTextComponent
            label="Health Status"
            value={statusHealth}
            onChangeText={setStatusHealth}
          />
          <LabelDatePickerComponent
            label="Date"
            value={date}
            onDateChange={setDate}
          />
          <View style={styles.viewSelectIcon}>
            {!icon ? (
              <>
                <LabelComponent label="Select Icon" />
                <BoxComponent style={styles.box} />
                <SelectIconModal onSelectIcon={setIcon} />
              </>
            ) : (
              <>
                <LabelComponent label="Icon" />
                <BoxComponent style={styles.box} />
                <Image
                  source={icon?.path ?? ImageSource.avatarDefault}
                  style={styles.iconSelected}
                />
              </>
            )}
          </View>
          <View style={styles.viewFooter}>
            <ButtonComponent label="Submit" onPress={onSubmitPress} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {width: 16},
  iconSelected: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  viewFooter: {flex: 1, justifyContent: 'center', alignContent: 'center'},

  viewSelectIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  marginTitle: {marginTop: 16},
  viewDate: {marginVertical: 16, flexDirection: 'row'},
  txtDate: {flex: 1, fontSize: 16, color: '#1A1F52'},
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    marginTop: 16,
    paddingVertical: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1A1F52',
    marginVertical: 8,
  },
  textTItle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1A1F52',
    marginRight: 32,
  },
});
