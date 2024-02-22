import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

export const ChartComponent = () => {
  const pieData = [
    {
      value: 45.54,
      color: '#4caf50',
      gradientCenterColor: '#009FFF',
    },
    {value: 54.46, color: '#f6ed99', gradientCenterColor: '#FFA5BA'},
  ];

  const renderDot = (color: string) => {
    return <View style={[styles.dot, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.viewLegend}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#4caf50')}
            <Text style={{color: 'white'}}>Fetus: 127 days</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#f8cd8c')}
            <Text style={{color: 'white'}}>Remaining: 150 days</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        paddingTop: 10,
      }}>
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: '#232B5D',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={styles.dueDateTitle}>Due Date: </Text>
          <Text style={styles.dueDate}>21-07-2024</Text>
        </View>
        <View style={{padding: 16, alignItems: 'center'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: '500'}}>
                    18 weeks
                  </Text>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: '500'}}>
                    1 day
                  </Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
