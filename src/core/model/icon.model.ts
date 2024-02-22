import {ImageSourcePropType} from 'react-native';

export class IconModel {
  iconName: string;
  path: ImageSourcePropType | null;
  id: number;
  color?: string;
  constructor() {
    this.iconName = '';
    this.path = null;
    this.id = 0;
  }
}
