import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {getImageDownloadUrl} from '../core/services/upload-image.service';
import {ImageSource} from '../assets/images';

interface Props {
  url?: string;
  size?: {width: number; height: number};
  onImagePress?: (image?: string) => void;
  disable?: boolean;
}

export const AvatarComponent = (props: Props) => {
  const [uri, setUri] = React.useState<string | undefined>();
  useEffect(() => {
    if (props.url) {
      getUrl();
    }
  }, [props.url]);

  const getUrl = async () => {
    try {
      if (props.url?.includes('file://')) {
        setUri(props.url);
      } else {
        const url = await getImageDownloadUrl(props.url);
        setUri(url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{marginTop: 8}}>
      {uri ? (
        <TouchableOpacity
          disabled={props.disable}
          onPress={() => props.onImagePress?.(props.url)}>
          <Image
            source={{uri: uri}}
            style={[
              {
                width: props.size?.width ?? 50,
                height: props.size?.height ?? 50,
              },
              styles.imageDefault,
            ]}
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={ImageSource.avatarDefault}
          style={[
            {width: props.size?.width ?? 50, height: props.size?.height ?? 50},
            styles.imageDefault,
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageDefault: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
});
