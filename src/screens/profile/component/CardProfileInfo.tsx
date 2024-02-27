import {StyleSheet} from 'react-native';
import {UserInfo} from '../../../core/model/user-info.model';
import {CardComponent} from '../../../components/card.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ItemCardComponent} from './item-card.component';
import {Color} from '../../../styles/color';
import React from 'react';
interface Props {
  currentUser?: UserInfo;
  onChange?: (user: UserInfo) => void;
}
export const CardProfileInfo = (props: Props) => {
  return (
    <CardComponent customStyle={styles.cartDefault}>
      <ItemCardComponent
        icon={<Icon name="account-outline" size={24} color={Color.MainText} />}
        label="Name"
        value={props.currentUser?.Name}
        onPress={() => {}}
      />
      <ItemCardComponent
        icon={<Icon name="phone-outline" size={24} color={Color.MainText} />}
        label="Phone"
        value={props.currentUser?.Phone}
        onPress={() => {}}
      />
      <ItemCardComponent
        icon={<Icon name="email-outline" size={24} color={Color.MainText} />}
        label="Email"
        value={props.currentUser?.Email}
        disable={true}
        onPress={() => {}}
      />
      <ItemCardComponent
        icon={<Icon name="calendar-range" size={24} color={Color.MainText} />}
        label="Due Date"
        value={props.currentUser?.DueDate}
        onPress={() => {}}
      />
      <ItemCardComponent
        icon={
          <Icon name="map-marker-outline" size={24} color={Color.MainText} />
        }
        label="Address"
        value={props.currentUser?.Address}
        onPress={() => {}}
      />
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  cartDefault: {borderRadius: 0},
});
