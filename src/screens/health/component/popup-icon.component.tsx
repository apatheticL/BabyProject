import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {listIcon} from '../../../core/utils/data';
import {Icon, IconSource} from '../../../assets/icon/icon.component';
import {PlusIcon} from '../../../assets/icon';
import {defaultStyle} from '../../../styles';
import {IconModel} from '../../../core/model/icon.model';
import Modal from 'react-native-modal';
interface SelectIconModalProps {
  onSelectIcon?: (icon: IconModel) => void;
}
export const SelectIconModal = (props: SelectIconModalProps) => {
  const [open, setOpen] = useState(false);
  const renderIcon = ({item}) => {
    const source: IconSource = {
      imageSource:
        item.path ?? require('../../../assets/icon/source/health-good.png'),
    };
    return (
      <TouchableOpacity
        style={{
          marginBottom: 18,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          props.onSelectIcon?.(item);
          setOpen(false);
        }}>
        {Icon(source, {width: 50, height: 50})}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log('Select Icon');
          setOpen(!open);
        }}>
        {PlusIcon({width: 24, height: 24})}
      </TouchableOpacity>
      <Modal
        isVisible={open}
        onDismiss={() => setOpen(false)}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'white', width: '100%'}}>
          <Text
            style={[
              defaultStyle.textTitle,
              {textAlign: 'center', marginVertical: 16},
            ]}>
            Select Icon
          </Text>
          <FlatList
            style={{marginHorizontal: 16, width: '90%', marginBottom: 16}}
            data={listIcon}
            renderItem={renderIcon}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    </>
  );
};
