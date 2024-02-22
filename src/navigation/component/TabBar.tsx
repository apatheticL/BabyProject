import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
// link search icon name https://pictogrammers.com/library/mdi/
export function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors ? descriptors[route.key] : null;
        const label =
          options?.tabBarLabel !== undefined
            ? options?.tabBarLabel
            : options?.title !== undefined
            ? options?.title
            : route.name;

        const isFocused = state.index === index;
        let imageSource;

        switch (index) {
          case 0:
            imageSource = isFocused ? (
              <Icon size={28} color={'#232B5D'} name="home-account" />
            ) : (
              <Icon size={28} color={'gray'} name="home-account" />
            );
            break;
          case 1:
            imageSource = isFocused ? (
              <Icon size={28} color={'#232B5D'} name="history" />
            ) : (
              <Icon size={28} color={'gray'} name="history" />
            );
            break;
          case 2:
            imageSource = isFocused ? (
              <Icon size={28} color={'#232B5D'} name="account" />
            ) : (
              <Icon size={28} color={'gray'} name="account" />
            );
            break;
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options?.tabBarAccessibilityLabel}
            testID={options?.tabBarTestID}
            onPress={onPress}
            key={label}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            {imageSource}
            <Text
              style={{
                color: isFocused ? '#232B5D' : '#222',
                fontSize: 14,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
