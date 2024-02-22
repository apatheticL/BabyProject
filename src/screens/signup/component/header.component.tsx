import {Image, StyleSheet, View} from 'react-native';
import {ImageSource} from '../../../assets/images';
import React from 'react';
export const HeaderAuth = props => {
  return (
    <View style={styles.viewHeader}>
      <Image source={ImageSource.logo} style={styles.imageLogo} />
    </View>
  );
};
const styles = StyleSheet.create({
  viewHeader: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {width: 100, height: 100, resizeMode: 'contain'},
});
