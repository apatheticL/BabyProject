import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {UserInfo} from '../../../core/model/user-info.model';
import {getPercentageGestational} from '../../../core/utils/utils';
interface Props {
  currentUser: UserInfo;
}
export const ChartComponent = (props: Props) => {
  const [currentDay, setCurrentDay] = useState(0);
  const [totalDays, setTotalDay] = useState(0);
  const piaData = useMemo(() => {
    const weeks = props.currentUser.GestationalAge?.weeks ?? 0;
    const days = props.currentUser.GestationalAge?.days ?? 0;

    const value = getPercentageGestational(weeks, days);
    setCurrentDay(value.currentDay);
    setTotalDay(value.totalDay);
    return [
      {
        value: value.currentPercentage,
        color: '#4caf50',
        gradientCenterColor: '#009FFF',
      },
      {
        value: value.totalPercentage,
        color: '#f6ed99',
        gradientCenterColor: '#FFA5BA',
      },
    ];
  }, [props.currentUser]);

  const renderDot = (color: string) => {
    return <View style={[styles.dot, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.viewLegend}>
          <View style={styles.viewLegendItem}>
            {renderDot('#4caf50')}
            <Text style={styles.txtLegend}>{`Fetus: ${currentDay} days`}</Text>
          </View>
          <View style={styles.viewRemaining}>
            {renderDot('#f8cd8c')}
            <Text
              style={styles.txtLegend}>{`Remaining: ${totalDays} days`}</Text>
          </View>
        </View>
      </>
    );
  };
  const renderCenter = () => {
    return (
      <View style={styles.viewContentDate}>
        <Text style={styles.valueDate}>
          {`${props.currentUser.GestationalAge.weeks} weeks`}
        </Text>
        {props.currentUser.GestationalAge.days > 0 && (
          <Text style={styles.valueDate}>
            {`${props.currentUser.GestationalAge.days} days`}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <View style={styles.viewHeader}>
          <Text style={styles.dueDateTitle}>Due Date: </Text>
          <Text style={styles.dueDate}>{props.currentUser.DueDate}</Text>
        </View>
        <View style={styles.viewChart}>
          <PieChart
            data={piaData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={renderCenter}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewChart: {padding: 16, alignItems: 'center'},
  viewContentDate: {justifyContent: 'center', alignItems: 'center'},
  valueDate: {fontSize: 22, color: 'white', fontWeight: '500'},
  txtLegend: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewContent: {
    margin: 20,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#232B5D',
  },
  viewContainer: {
    paddingTop: 10,
  },
  viewRemaining: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
  },
  viewLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    marginRight: 20,
  },
  dueDateTitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 16,
    fontWeight: '600',
  },
  dueDate: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  viewLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
