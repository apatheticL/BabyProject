import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

export const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 6,
    elevation: 6,
  },
});
