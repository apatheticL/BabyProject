import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LeftIcon} from '../assets/icon';

interface TopNavigationBarProps {
  onBack?: () => void;
  title?: string;
  disableBack?: boolean;
  renderRightComponent?: () => React.ReactNode;
}
export const TopNavigationBar = (props: TopNavigationBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {props.disableBack ? null : (
          <TouchableOpacity onPress={props.onBack} style={styles.viewBackIcon}>
            {LeftIcon(styles.backIcon)}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {!props.renderRightComponent ? null : (
        <View style={styles.rightContainer}>
          {props.renderRightComponent?.()}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1A1F52',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  viewBackIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFFF',
    borderRadius: 20,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
});
