import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';
import React from 'react';

export interface IconSource {
  imageSource: ImageSourcePropType;
}
export const Icon = (
  source: IconSource,
  style: StyleProp<ImageStyle>,
): React.ReactElement<ImageProps> => {
  return (
    <Image resizeMode={'contain'} style={style} source={source.imageSource} />
  );
};
export type IconElement = React.ReactElement<ImageProps>;
