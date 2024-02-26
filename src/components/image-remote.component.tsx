import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {getImageDownloadUrl} from '../core/services/upload-image.service';
import {Color} from '../styles/color';
interface Props {
  image: string;
  disable?: boolean;
  onImagePress?: (image: string) => void;
  size?: {
    width?: number;
    height?: number;
  };
}
export const RemoteImageComponent = (props: Props) => {
  const [uri, setUri] = React.useState<string | undefined>();
  useEffect(() => {
    getUrl();
  }, [props.image]);

  const getUrl = async () => {
    try {
      const url = await getImageDownloadUrl(props.image);
      setUri(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{marginTop: 8}}>
      {uri ? (
        <TouchableOpacity
          disabled={props.disable}
          onPress={() => props.onImagePress?.(props.image)}>
          <Image
            source={{uri: uri}}
            style={{
              width: props.size?.width ?? 50,
              height: props.size?.height ?? 50,
            }}
          />
        </TouchableOpacity>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'small'} color={Color.MainText} />
        </View>
      )}
    </View>
  );
};
