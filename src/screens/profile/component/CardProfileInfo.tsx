import {StyleSheet} from 'react-native';
import {UserInfo} from '../../../core/model/user-info.model';
import {CardComponent} from '../../../components/card.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ItemCardComponent} from './item-card.component';
import {Color} from '../../../styles/color';
import React from 'react';
import {isEmpty} from '../../../core/utils/utils';
import { User } from '../../../core/model/user';
interface Props {
  currentUser?: UserInfo;
  onChange?: (user: UserInfo) => void;
  userProfile?: User;
}
export const CardProfileInfo = (props: Props) => {
  return (
    <CardComponent customStyle={styles.cartDefault}>
      <ItemCardComponent
        icon={<Icon name="account-outline" size={24} color={Color.MainText} />}
        label="Name"
        value={props.currentUser?.Name}
        onSave={value => {
          if (!isEmpty(value)) {
            props.onChange?.({
              ...props.currentUser,
              DueDate: props.currentUser?.DueDate,
              Name: value ?? '',
            });
          }
        }}
      />
      <ItemCardComponent
        icon={<Icon name="phone-outline" size={24} color={Color.MainText} />}
        label="Phone"
        keyboardType="phone-pad"
        value={props.currentUser?.Phone}
        onSave={value => {
          if (!isEmpty(value)) {
            props.onChange?.({
              ...props.currentUser,
              DueDate: props.currentUser?.DueDate,
              Phone: value ?? '',
            });
          }
        }}
      />
      <ItemCardComponent
        icon={<Icon name="email-outline" size={24} color={Color.MainText} />}
        label="Email"
        value={props.currentUser?.Email ?? props.userProfile?.email}
        disable={true}
      />
      <ItemCardComponent
        icon={<Icon name="calendar-range" size={24} color={Color.MainText} />}
        label="Due Date"
        isDate={true}
        value={props.currentUser?.DueDate}
        onSave={data => {
          if (!isEmpty(data)) {
            props.onChange?.({
              ...props.currentUser,
              DueDate: data ?? '',
              GestationalAge: props.currentUser?.GestationalAge,
              Name: props.currentUser?.Name,
            });
          }
        }}
      />
      <ItemCardComponent
        icon={
          <Icon name="map-marker-outline" size={24} color={Color.MainText} />
        }
        label="Address"
        value={props.currentUser?.Address}
        onSave={value => {
          if (!isEmpty(value)) {
            props.onChange?.({
              ...props.currentUser,
              Address: value ?? '',
              DueDate: props.currentUser?.DueDate,
            });
          }
        }}
      />
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  cartDefault: {borderRadius: 0},
});
