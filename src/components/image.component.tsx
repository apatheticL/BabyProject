import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ButtonDeleteIcon} from './button-delete-icon.component';
interface Props {
  image: string;
  disable?: boolean;
  allowDelete?: boolean;
  onRemoveImage?: (image: string) => void;
  onImagePress?: (image: string) => void;
  size?: {
    width?: number;
    height?: number;
  };
}
export const ImageComponent = (props: Props) => {
  return (
    <View style={{marginTop: 8}}>
      <TouchableOpacity
        disabled={props.disable}
        onPress={() => props.onImagePress?.(props.image)}>
        <Image
          source={{uri: props.image}}
          style={{
            width: props.size?.width ?? 50,
            height: props.size?.height ?? 50,
          }}
        />
      </TouchableOpacity>
      <ButtonDeleteIcon
        disable={props.disable || props.allowDelete}
        style={{top: -10, right: -7}}
        onPress={() => props.onRemoveImage?.(props.image)}
        labelDelete="Delete Image"
        titleDelete="Are you sure delete image?"
      />
    </View>
  );
};
