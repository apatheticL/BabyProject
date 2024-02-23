import {StyleSheet, Text, View} from 'react-native';
import {NoDataIcon} from '../assets/icon';
import React from 'react';

export const NoDataComponent = () => {
  return (
    <View style={styles.viewContent}>
      {NoDataIcon(styles.icon)}
      <Text style={styles.text}>There is no data</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    color: '#1A1F52',
    fontWeight: 'bold',
    marginTop: 16,
  },
});
