import {StyleSheet, View} from 'react-native';
import {ButtonComponent} from '../../../../components/button.component';
import {LabelInputTextComponent} from '../../../../components/label-input-text.component';
import {useState} from 'react';
import {HealthStatusRequest} from '../../../../core/model/health.model';
import React from 'react';
interface FooterAdditionalProps {
  onAdditionalInformation?: (healthStatus: HealthStatusRequest) => void;
}
export const FooterAdditionalComponent = (props: FooterAdditionalProps) => {
  const [nameHealth, setNameHealth] = useState('');
  const [statusHealth, setStatusHealth] = useState('');
  return (
    <View style={styles.viewFooter}>
      <LabelInputTextComponent
        label="Health Condition"
        value={nameHealth}
        onChangeText={setNameHealth}
      />
      <LabelInputTextComponent
        label="Health Status Details"
        value={statusHealth}
        onChangeText={setStatusHealth}
      />
      <View style={styles.viewButton}>
        <ButtonComponent
          label="Save"
          onPress={() => {
            props.onAdditionalInformation?.({
              Key: nameHealth,
              Value: statusHealth,
            });
          }}
          backgroundColor="#8bc34a"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewButton: {
    alignItems: 'center',
  },
  viewFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
