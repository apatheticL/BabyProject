import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Health,
  HealthStatus,
  HealthStatusRequest,
} from '../../../core/model/health.model';
import {defaultStyle} from '../../../styles';
import {TopNavigationBar} from '../../../components/header-tab';
import React from 'react';
import {AdditionalInformationComponent} from './component/additiona-information.component';
import {LabelContentTextComponent} from '../../../components/lable-content-text.component';
import {CardComponent} from '../../../components/card.component';
import {IconHealthComponent} from '../component/icon-health.component';
interface HealthDetailProps {
  onBack: () => void;
  currentHealth?: Health;
  healthStatus: HealthStatus[];
  onAdditionalInformation: (status: HealthStatusRequest) => void;
  onRemoveHealthStatus?: (status: HealthStatus) => void;
}
export const HealthDetailComponent = (props: HealthDetailProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={[defaultStyle.background, defaultStyle.flex1]}>
          <TopNavigationBar title="Health Detail" onBack={props.onBack} />
          {!props.currentHealth ? null : (
            <>
              <CardComponent customStyle={{marginHorizontal: 16, width: '90%'}}>
                <View style={{alignItems: 'center'}}>
                  <IconHealthComponent
                    iconId={props.currentHealth.iconId ?? 0}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <LabelContentTextComponent
                  label="Health Status"
                  value={props.currentHealth.Description}
                />
                <LabelContentTextComponent
                  label="Date"
                  value={props.currentHealth.Date}
                />
              </CardComponent>
              <AdditionalInformationComponent
                listStatus={props.healthStatus}
                onDeleteHealthStatus={props.onRemoveHealthStatus}
                onAdditionalInformation={props.onAdditionalInformation}
              />
            </>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
