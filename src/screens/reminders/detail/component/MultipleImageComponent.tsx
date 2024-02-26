import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {ImageComponent} from '../../../../components/image.component';
import {deviceWidth} from '../../../../core/utils/utils';
import {OptionPhotoComponent} from '../../../../components/modal/option-photo.modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RemoteImageComponent} from '../../../../components/image-remote.component';
interface Props {
  images: string[];
  onRemoveImage?: (image: string) => void;
  onImagePress?: (image: string) => void;
  onCameraPress?: () => void;
  onGalleryPress?: () => void;
  isRemote?: boolean;
}

export const MultipleImageComponent = (props: Props) => {
  const renderFooter = () => {
    if (props.isRemote) {
      return null;
    }
    return (
      <OptionPhotoComponent
        onCameraPress={props.onCameraPress}
        onGalleryPress={props.onGalleryPress}
        children={<Icon name="plus-box-multiple" size={24} color={'#232B5D'} />}
        styleButton={styles.viewButton}
      />
    );
  };
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={props.images}
        renderItem={({item}) => (
          <View style={{margin: 5}}>
            {props.isRemote ? (
              <RemoteImageComponent
                image={item}
                onImagePress={props.onImagePress}
                size={{width: deviceWidth / 6, height: deviceWidth / 6}}
              />
            ) : (
              <ImageComponent
                image={item}
                onRemoveImage={props.onRemoveImage}
                onImagePress={props.onImagePress}
                size={{width: deviceWidth / 6, height: deviceWidth / 6}}
              />
            )}
          </View>
        )}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewButton: {
    width: deviceWidth / 6,
    height: deviceWidth / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
