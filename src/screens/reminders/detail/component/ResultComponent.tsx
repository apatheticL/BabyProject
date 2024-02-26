import {StyleSheet, View} from 'react-native';
import {LabelComponent} from '../../../../components/label.component';
import {LabelContentTextComponent} from '../../../../components/lable-content-text.component';
import {ExaminationResult} from '../../../../core/model/examination-result.model';
import React from 'react';
import {MultipleImageComponent} from './MultipleImageComponent';
import {BoxComponent} from '../../../../components/box.component';
interface Props {
  result?: ExaminationResult;
  onResultPress?: (result: ExaminationResult) => void;
}

export const ResultComponent = (props: Props) => {
  return props.result ? (
    <View>
      <LabelComponent label="Mother Health" />
      <View style={styles.row}>
        <LabelContentTextComponent
          label="Arm"
          value={props.result.MotherArm?.toString()}
        />
        <LabelContentTextComponent
          label="Weight"
          value={
            props.result.MotherWeight
              ? `${props.result.MotherWeight} kg`
              : undefined
          }
        />
      </View>
      <BoxComponent style={styles.marginBottom16} />

      <LabelComponent label="Baby Health" />
      <View style={styles.row}>
        <LabelContentTextComponent
          label="Heartbeat"
          value={`${props.result.HeartbeatBaby} bpm`}
        />
        <LabelContentTextComponent
          label="Weight"
          value={`${props.result.BabyWeight} g`}
        />
      </View>
      <BoxComponent style={styles.marginBottom16} />

      <LabelContentTextComponent
        label="Description"
        value={props.result.Description}
      />
      <BoxComponent style={styles.marginBottom16} />
      <LabelContentTextComponent label="Note" value={props.result.Note} />
      <BoxComponent style={styles.marginBottom16} />
      {props.result.Image ? (
        <>
          <LabelComponent label="Images" />
          <MultipleImageComponent images={props.result.Image} isRemote={true} />
        </>
      ) : null}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  marginBottom16: {
    marginBottom: 16,
  },
});
