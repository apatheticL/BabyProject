import {View} from 'react-native';
import {TopNavigationBar} from '../../../components/header-tab';
import {
  ExaminationResult,
  ExaminationResultRequest,
} from '../../../core/model/examination-result.model';
import {defaultStyle} from '../../../styles';
import {CardComponent} from '../../../components/card.component';
import {LabelContentTextComponent} from '../../../components/lable-content-text.component';
import React from 'react';
import {Schedule} from '../../../core/model/schedule.model';
interface ReminderProps {
  schedule?: Schedule;
  onResultPress?: (result: ExaminationResult) => void;
  onSubmitResult?: (request: ExaminationResultRequest) => void;
  onBack?: () => void;
}

export const ReminderDetailComponent = (props: ReminderProps) => {
  __DEV__ && console.log('props.schedule', props.schedule);
  __DEV__ &&
    console.log(
      'props?.schedule?.GestationalWeek.week?.toString()',
      props?.schedule?.GestationalWeek.week?.toString(),
    );
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <TopNavigationBar title="Reminder Detail" onBack={props.onBack} />
      <CardComponent
        customStyle={{
          marginHorizontal: 16,
          width: '90%',
        }}>
        <LabelContentTextComponent
          label="Milestone"
          value={props?.schedule?.GestationalWeek.week?.toString() + ' Weeks'}
        />
        <LabelContentTextComponent label="Date" value={props?.schedule?.Date} />
        <LabelContentTextComponent
          label="Address"
          value={props?.schedule?.Address}
        />
        <LabelContentTextComponent label="Note" value={props?.schedule?.Note} />
      </CardComponent>
    </View>
  );
};
