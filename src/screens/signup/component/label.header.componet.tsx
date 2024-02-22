import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface LabelHeaderProps {
  label: string;
  title: string;
}
export const LabelHeaderComponent = (props: LabelHeaderProps) => {
  return (
    <View style={styles.viewTitleHeader}>
      <Text style={styles.txtTitle}>{props.label}</Text>
      <Text style={styles.txtSubTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewTitleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  txtTitle: {fontSize: 24, fontWeight: 'bold', color: 'black'},
  txtSubTitle: {fontSize: 16, color: 'gray'},
});
