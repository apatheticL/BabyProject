import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {TopNavigationBar} from '../../../components/header-tab';
import {defaultStyle} from '../../../styles';
import React from 'react';
import {Health} from '../../../core/model/health.model';
import {LabelComponent} from '../../../components/label.component';
import {BoxComponent} from '../../../components/box.component';
import {CardComponent} from '../../../components/card.component';
import {ItemHealthComponent} from './component/item-health.component';
import {NoDataComponent} from '../../../components/no-data.component';
interface HealthProps {
  onBack: () => void;
  healthList?: {key: string; value: Health[]}[];
  onHealthSelected: (health: Health) => void;
}
export const HealthListComponent = (props: HealthProps) => {
  __DEV__ && console.log('props.healthList', props.healthList);
  const renderItem = ({item}) => {
    return (
      <ItemHealthComponent health={item} onHealth={props.onHealthSelected} />
    );
  };
  return (
    <ScrollView>
      <View style={[defaultStyle.background, defaultStyle.flex1]}>
        <TopNavigationBar title="Health List" onBack={props.onBack} />

        <View style={styles.viewContent}>
          {props.healthList ? (
            <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
              {props.healthList.map((item, index) => {
                return (
                  <CardComponent key={index}>
                    <LabelComponent label={item.key} />
                    <BoxComponent style={{height: 16}} />
                    <FlatList
                      scrollEnabled={false}
                      data={item.value}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={2}
                    />
                  </CardComponent>
                );
              })}
            </View>
          ) : (
            <NoDataComponent />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  viewContent: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 16,
  },
});
