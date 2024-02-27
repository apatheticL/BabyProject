import Modal from 'react-native-modal';
import {GestationalWeek} from '../../../core/model/gestational-week.model';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useState} from 'react';
import {listGestationalWeek} from '../../../core/utils/data';
import React from 'react';
import {defaultStyle} from '../../../styles';
import {ContentTextComponent} from '../../../components/content.text.component';
import {ChangeTimeIcon} from '../../../assets/icon';
import {LabelSelectItemComponent} from '../../../components/label.select.item.component';
interface Props {
  onPress: (value: GestationalWeek) => void;
  currentWeeks?: GestationalWeek;
}

export const GestationalWeekModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GestationalWeek | undefined>(
    props.currentWeeks,
  );

  const onPress = (value: GestationalWeek) => {
    props.onPress(value);
    setOpen(false);
    setSelected(value);
  };

  /**
   * Determines the background color style to use based on the given GestationalWeek item.
   *
   * @param {GestationalWeek} item - the GestationalWeek item to determine the background color style for
   * @return {object | ViewStyle} the background color style based on the given GestationalWeek item
   */
  const renderBackground = (item: GestationalWeek): ViewStyle => {
    if (props.currentWeeks && item.week === props.currentWeeks.week) {
      return {backgroundColor: 'red'};
    }

    return item.type === 1
      ? styles.backgroundImportant
      : styles.backgroundDefault;
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log('Select Icon');
          setOpen(!open);
        }}>
        {selected ? (
          <View style={defaultStyle.row}>
            <ContentTextComponent value={selected.week.toString()} />
            {ChangeTimeIcon(styles.iconChange)}
          </View>
        ) : (
          <LabelSelectItemComponent
            disable={true}
            label="Select Gestational Week"
          />
        )}
      </TouchableOpacity>
      <Modal
        isVisible={open}
        onBackdropPress={() => {
          setOpen(false);
        }}
        style={styles.viewModal}>
        <View style={styles.viewContent}>
          <Text style={[defaultStyle.textLabelModal, styles.margin]}>
            Select Gestational Week
          </Text>
          <FlatList
            data={listGestationalWeek()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  defaultStyle.borderColorDefault,
                  styles.item,
                  renderBackground(item),
                ]}
                onPress={() => onPress(item)}>
                <Text
                  style={[
                    styles.txt,
                    props.currentWeeks?.week === item.week
                      ? {color: 'white'}
                      : {},
                  ]}>
                  {item.week}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.week.toString()}
            numColumns={5}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconChange: {
    width: 24,
    height: 24,
    marginLeft: 32,
  },
  viewModal: {margin: 0, justifyContent: 'center', alignItems: 'center'},
  margin: {marginVertical: 24},
  txt: {fontSize: 14, fontWeight: '400', color: '#1A1F52'},
  viewContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 16,
    paddingBottom: 52,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 4,
  },
  backgroundImportant: {
    backgroundColor: '#fad0c3',
  },
  backgroundDefault: {
    backgroundColor: 'white',
  },
});
