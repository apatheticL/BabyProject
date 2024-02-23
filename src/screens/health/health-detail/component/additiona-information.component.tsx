import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  HealthStatus,
  HealthStatusRequest,
} from '../../../../core/model/health.model';
import {LabelContentTextComponent} from '../../../../components/lable-content-text.component';
import {CardComponent} from '../../../../components/card.component';
import {LabelHeaderComponent} from '../../../signup/component/label.header.componet';
import {FooterAdditionalComponent} from './footer-additional.component';
import {ButtonDeleteIcon} from '../../../../components/button-delete-icon.component';
interface AdditionalInformationProps {
  onAdditionalInformation?: (healthStatus: HealthStatusRequest) => void;
  listStatus?: HealthStatus[];
  onDeleteHealthStatus?: (status: HealthStatus) => void;
}
export const AdditionalInformationComponent = (
  props: AdditionalInformationProps,
) => {
  /**
   * Renders the footer UI.
   * @returns {JSX.Element} - The footer UI.
   */
  const renderFooter = () => {
    return (
      <FooterAdditionalComponent
        onAdditionalInformation={props.onAdditionalInformation}
      />
    );
  };
  /**
   * Renders each item in the list.
   * @param {Object} item - The item to render.
   * @returns {JSX.Element} - The rendered item UI.
   */
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.styleItem}>
        <LabelContentTextComponent
          label={'Health Condition:'}
          customStyle={{marginBottom: 4}}
          value={item.Key}
        />
        <LabelContentTextComponent
          label={'Health Status Details:'}
          customStyle={{marginTop: 4}}
          value={item.Value}
        />
        <ButtonDeleteIcon onPress={() => props.onDeleteHealthStatus?.(item)} />
      </View>
    );
  };

  return (
    <CardComponent>
      <LabelHeaderComponent
        label="Additional Information"
        title={'Enter additional information'}
      />
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={props.listStatus}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
      />
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  styleItem: {
    borderColor: '#CCCEDF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: '#d9e3f0',
  },
  icon: {
    width: 16,
    height: 15,
  },
});
