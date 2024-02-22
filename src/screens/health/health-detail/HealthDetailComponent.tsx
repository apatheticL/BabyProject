import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Health, HealthStatus} from '../../../core/model/health.model';
import {defaultStyle} from '../../../styles';
import {TopNavigationBar} from '../../../components/header-tab';
import React, {useState} from 'react';
import {CardComponent} from '../../../components/card.component';
import {LabelContentTextComponent} from '../../../components/lable-content-text.component';
import {IconHealthComponent} from '../component/icon-health.component';
import {LabelHeaderComponent} from '../../signup/component/label.header.componet';
import {ButtonComponent} from '../../../components/button.component';
import {LabelInputTextComponent} from '../../../components/label-input-text.component';
interface HealthDetailProps {
  onBack: () => void;
  currentHealth?: Health;
}
export const HealthDetailComponent = (props: HealthDetailProps) => {
  const [healthStauts, setCurrentHealthState] = useState<HealthStatus[]>([]);

  const renderFooter = () => {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <LabelInputTextComponent
            label="Additional Information"
            value={''}
            onChangeText={() => {}}
          />
          <LabelInputTextComponent
            label="Additional Information"
            value={''}
            onChangeText={() => {}}
          />
          <View style={{alignItems: 'center'}}>
            <ButtonComponent
              label="Save"
              onPress={() => {}}
              backgroundColor="#8bc34a"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[defaultStyle.background, defaultStyle.flex1]}>
        <TopNavigationBar title="Health Detail" onBack={props.onBack} />
        {!props.currentHealth ? null : (
          <>
            {/* <CardComponent customStyle={{marginHorizontal: 16, width: '90%'}}>
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
            </CardComponent> */}
            <CardComponent>
              <LabelHeaderComponent
                label="Additional Information"
                title={'Enter additional information'}
              />
              <FlatList
                data={healthStauts}
                renderItem={() => <View />}
                ListFooterComponent={renderFooter}
              />
            </CardComponent>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
