import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ScheduleRequest} from '../../../core/model/schedule.model';
import {UserInfo} from '../../../core/model/user-info.model';
import {defaultStyle} from '../../../styles';
import {TopNavigationBar} from '../../../components/header-tab';
import {LabelInputTextComponent} from '../../../components/label-input-text.component';
import React, {useState} from 'react';
import {ButtonComponent} from '../../../components/button.component';
import {
  getDateFromWeek,
  getMaximumDateWeeks,
  isEmpty,
} from '../../../core/utils/utils';
import {formatDateToString} from '../../../core/utils/formater';
import {LabelDatePickerComponent} from '../../../components/label-date.component';
import {LabelViewComponent} from '../../../components/label-view.component';
import {GestationalWeek} from '../../../core/model/gestational-week.model';
import {GestationalWeekModal} from '../component/gestational-week.modal';
interface Props {
  currentUser: UserInfo;
  onSubmit: (schedule: ScheduleRequest) => void;
  onBack: () => void;
}
export const AddReminderComponent = (props: Props) => {
  const [date, setDate] = useState(new Date());
  const [gestationalWeek, setGestationalWeek] = useState<
    GestationalWeek | undefined
  >();
  const [address, setAddress] = useState('');

  const [note, setNote] = useState('');
  const onSubmitPress = () => {
    if (!gestationalWeek) {
      Alert.alert('Please select gestational week');
      return;
    } else if (!isEmpty(props?.currentUser?.UserId)) {
      props.onSubmit?.({
        Address: address,
        Date: formatDateToString(date),
        GestationalWeek: gestationalWeek,
        Note: note,
        UserId: props?.currentUser?.UserId ?? 'unknown',
        Status: 1,
      });
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[defaultStyle.background, defaultStyle.flex1]}>
        <TopNavigationBar title="Add Reminder" onBack={props.onBack} />
        <ScrollView style={defaultStyle.flex1}>
          <View style={[defaultStyle.viewContent]}>
            <LabelViewComponent label="Gestational Week">
              <GestationalWeekModal
                onPress={item => {
                  setGestationalWeek(item);
                  const _date = getDateFromWeek(
                    item.week,
                    props.currentUser.DueDate,
                  );
                  setDate(_date);
                }}
                currentWeeks={gestationalWeek}
              />
            </LabelViewComponent>
            <LabelDatePickerComponent
              label="Date"
              value={date}
              onDateChange={setDate}
              minDate={date}
              maxDate={getMaximumDateWeeks(date)}
            />
            <LabelInputTextComponent
              label="Address"
              value={address}
              onChangeText={setAddress}
            />
            <LabelInputTextComponent
              label="Note"
              value={note}
              onChangeText={setNote}
            />
            <View style={styles.viewFooter}>
              <ButtonComponent label="Submit" onPress={onSubmitPress} />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  viewFooter: {
    minHeight: 300,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
