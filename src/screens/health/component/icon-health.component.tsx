import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {listIcon} from '../../../core/utils/data';
import {IconModel} from '../../../core/model/icon.model';
import React from 'react';
interface IconHealthProps {
  iconId: number;
  style?: StyleProp<ImageStyle>;
  styleContainer?: StyleProp<ViewStyle>;
}
export const IconHealthComponent = (props: IconHealthProps) => {
  const getIcon = (): IconModel => {
    const iconPath = listIcon.find(icon => icon.id === props.iconId);
    if (iconPath) {
      return iconPath;
    } else {
      return {
        path: require('../../../assets/icon/source/health-good.png'),
        id: 0,
        iconName: 'health-good.png',
        color: '#b5f2b7',
      };
    }
  };

  return (
    <View
      style={[
        styles.viewIcon,
        {backgroundColor: getIcon().color},
        props.styleContainer ? props.styleContainer : {},
      ]}>
      <Image
        style={[styles.icon, props.style ? props.style : {}]}
        source={getIcon().path}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  viewIcon: {
    backgroundColor: '#b5f2b7',
    borderRadius: 100,
    padding: 14,
  },
});
