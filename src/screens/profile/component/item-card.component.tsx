import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../styles/color';
import {defaultStyle} from '../../../styles';
import {TextFieldModal} from './modal/TextFieldModal';
import {DateTimeModal} from './modal/DateFieldModal';
import {formatDateToString} from '../../../core/utils/formater';
interface Props {
  icon: any;
  label: string;
  value?: string;
  onSave?: (data?: string) => void;
  disable?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  isDate?: boolean;
}

export const ItemCardComponent = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onSave = (value?: string) => {
    props.onSave?.(value);
    setIsVisible(false);
  };
  return (
    <>
      <TouchableOpacity
        style={styles.viewRow}
        disabled={props.disable}
        onPress={() => setIsVisible(!isVisible)}>
        {props.icon}
        <View style={defaultStyle.flex1}>
          <Text style={styles.titleItem}>{props.label}</Text>
          <Text style={styles.value}>{props.value ?? '...'}</Text>
        </View>
        {!props.disable && (
          <Icon name="chevron-right" size={30} color="black" />
        )}
      </TouchableOpacity>

      {props.isDate ? (
        <DateTimeModal
          date={props.value}
          setOpen={() => setIsVisible(false)}
          open={isVisible}
          onDateChange={date => {
            if (date) {
              onSave(formatDateToString(date));
            }
          }}
        />
      ) : (
        <TextFieldModal
          value={props.value}
          onClose={() => setIsVisible(false)}
          keyboardType={props.keyboardType}
          isVisible={isVisible}
          onValueChange={onSave}
          label={props.label}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCEDF',
  },
  titleItem: {
    fontSize: 16,
    marginLeft: 16,
    color: Color.MainText,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    marginLeft: 16,
    color: Color.MainText,
  },
});
