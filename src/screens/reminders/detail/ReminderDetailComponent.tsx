import {ScrollView, StyleSheet, View} from 'react-native';
import {TopNavigationBar} from '../../../components/header-tab';
import {
  ExaminationResult,
  ExaminationResultRequest,
} from '../../../core/model/examination-result.model';
import {defaultStyle} from '../../../styles';
import {CardComponent} from '../../../components/card.component';
import {LabelContentTextComponent} from '../../../components/lable-content-text.component';
import React, {useMemo} from 'react';
import {Schedule} from '../../../core/model/schedule.model';
import {LabelHeaderComponent} from '../../signup/component/label.header.componet';
import {AddResultScheduleComponent} from './component/AddResultComponent';
import {UserInfo} from '../../../core/model/user-info.model';
import {ResultComponent} from './component/ResultComponent';
import {checkOverdueSchedule, deviceHeight} from '../../../core/utils/utils';
import {BoxComponent} from '../../../components/box.component';
import {StatusSchedule} from '../../../core/utils/contanst';
import {NoDataComponent} from '../../../components/no-data.component';
interface ReminderProps {
  schedule?: Schedule;
  onResultPress?: (result: ExaminationResult) => void;
  onSubmitResult?: (request: ExaminationResultRequest) => void;
  onBack?: () => void;
  currentUser?: UserInfo;
}

export const ReminderDetailComponent = (props: ReminderProps) => {
  const renderStatus = useMemo(() => {
    if (!props?.schedule) {
      return undefined;
    }
    if (props?.schedule?.Status === 2) {
      return 'Examined';
    }
    if (props?.schedule?.Status === 3) {
      return 'Overdue';
    } else {
      return 'Coming Soon';
    }
  }, [props.schedule]);
  const isShowAdd = useMemo(() => {
    return (
      props?.schedule?.Status === StatusSchedule.ComingSoon ||
      (props?.schedule &&
        checkOverdueSchedule(props?.schedule?.Date) &&
        !props?.schedule?.Results) ||
      (props.schedule?.Status === StatusSchedule.Overdue &&
        !props?.schedule?.Results)
    );
  }, [props.schedule]);
  return (
    <View style={[defaultStyle.flex1, defaultStyle.background]}>
      <TopNavigationBar title="Reminder Detail" onBack={props.onBack} />
      <ScrollView>
        {props.schedule ? (
          <CardComponent customStyle={styles.cardView}>
            <LabelContentTextComponent
              label="Milestone"
              value={
                props?.schedule?.GestationalWeek.week
                  ? `${props?.schedule?.GestationalWeek.week} Weeks`
                  : null
              }
            />
            <LabelContentTextComponent
              label="Date"
              value={props?.schedule?.Date}
            />
            <LabelContentTextComponent
              label="Address"
              value={props?.schedule?.Address}
            />
            <LabelContentTextComponent
              label="Note"
              value={props?.schedule?.Note}
            />
            <LabelContentTextComponent label="Status" value={renderStatus} />
          </CardComponent>
        ) : (
          <View style={styles.viewNoData}>
            <NoDataComponent />
          </View>
        )}
        {!props.schedule?.Results ? null : (
          <CardComponent customStyle={styles.card}>
            <LabelHeaderComponent label="Result Information" title={''} />
            <ResultComponent result={props.schedule?.Results} />
          </CardComponent>
        )}
        {isShowAdd ? (
          <CardComponent customStyle={styles.card}>
            <LabelHeaderComponent
              label="Add Result Information"
              title={'Enter add result information'}
            />
            <AddResultScheduleComponent
              onAddResult={props?.onSubmitResult}
              currentUser={props.currentUser}
              scheduleId={props.schedule?.Id}
            />
          </CardComponent>
        ) : null}
        <BoxComponent style={styles.box} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 16,
    width: '90%',
  },
  card: {
    marginHorizontal: 16,
    width: '90%',
  },
  box: {height: 16},
  viewNoData: {height: deviceHeight - 66, marginTop: 16},
});
