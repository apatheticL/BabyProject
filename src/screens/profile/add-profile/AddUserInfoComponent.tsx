import {Alert, StyleSheet, View} from 'react-native';
import {UserInfo} from '../../../core/model/user-info.model';
import {TopNavigationBar} from '../../../components/header-tab';
import {defaultStyle} from '../../../styles';
import React from 'react';
import {ButtonComponent} from '../../../components/button.component';
import {formatDateToString} from '../../../core/utils/formater';
import {
  getGestationalOld,
  validateEmail,
  validatePhone,
} from '../../../core/utils/utils';
import {User} from '../../../core/model/user';
import {LabelInputTextComponent} from '../../../components/label-input-text.component';
import {LabelDatePickerComponent} from '../../../components/label-date.component';
interface AddUserInfoComponentProps {
  onSaveUserInfo?: (userInfo: UserInfo) => void;
  onBack?: () => void;
  user?: User;
}
export const AddUserInfoComponent = (props: AddUserInfoComponentProps) => {
  const [date, setDate] = React.useState(new Date());
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');

  /*
  handle submit press
    validate the input fields
    if the input fields are empty, show alert error
    if the email is not valid, show alert error
    if the phone is not valid, show alert error
    if the user is registered , save the user info
  */
  const onSubmitPress = () => {
    const GestationalAge = getGestationalOld(date);

    if (name === '' || phone === '' || email === '') {
      Alert.alert('Please fill all the fields');
      return;
    } else if (validateEmail(email) === false) {
      Alert.alert('Email is not valid');
      return;
    } else if (validatePhone(phone) === false) {
      Alert.alert('Phone is not valid');
      return;
    } else if (props.user?.uid) {
      props.onSaveUserInfo?.({
        Name: name,
        Phone: phone,
        Email: email,
        DueDate: formatDateToString(date),
        GestationalAge: GestationalAge,
        UserId: props.user?.uid,
      });
    }
  };

  return (
    <View style={[defaultStyle.background, defaultStyle.flex1]}>
      <TopNavigationBar title="Add User Info" onBack={props.onBack} />
      <View style={styles.viewContainer}>
        <LabelInputTextComponent
          label="Name"
          value={name}
          onChangeText={setName}
        />
        <LabelInputTextComponent
          label="Phone"
          value={phone}
          onChangeText={setPhone}
        />
        <LabelInputTextComponent
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <LabelDatePickerComponent
          label="Due Date"
          value={date}
          onDateChange={setDate}
          minDate={new Date()}
        />

        <View style={styles.viewButton}>
          <ButtonComponent label="Save" onPress={onSubmitPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTitle: {marginBottom: 8, marginTop: 16},
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    marginTop: 16,
    padding: 16,
  },
  viewButton: {flex: 1, justifyContent: 'center'},
});
