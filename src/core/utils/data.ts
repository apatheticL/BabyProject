import {GestationalWeek} from '../model/gestational-week.model';
import {IconModel} from '../model/icon.model';

export const listIcon: IconModel[] = [
  {
    id: 1,
    iconName: 'acne.png',
    path: require('../../assets/icon/source/acne.png'),
    color: '#b6e77d',
  },
  {
    id: 2,
    iconName: 'arm.png',
    path: require('../../assets/icon/source/arm.png'),
    color: '#b3e0e5',
  },

  {
    id: 3,
    iconName: 'back-pain.png',
    path: require('../../assets/icon/source/back-pain.png'),
    color: '#e5b6b3',
  },
  {
    id: 4,
    iconName: 'bleeding.png',
    path: require('../../assets/icon/source/bleeding.png'),
    color: '#d9d9d9',
  },
  {
    id: 5,
    iconName: 'chest-pain.png',
    path: require('../../assets/icon/source/chest-pain.png'),
    color: '#79d2ca',
  },
  {
    color: '#e1e5b3',
    id: 6,
    iconName: 'fainting.png',
    path: require('../../assets/icon/source/fainting.png'),
  },
  {
    color: '#d4c4fb',
    id: 7,
    iconName: 'headache.png',
    path: require('../../assets/icon/source/headache.png'),
  },
  {
    color: '#c4def6',
    id: 8,
    iconName: 'stomach-ache.png',
    path: require('../../assets/icon/source/stomach-ache.png'),
  },
  {
    color: '#bed3f3',
    id: 9,
    iconName: 'weight.png',
    path: require('../../assets/icon/source/weight.png'),
  },
];

export const listGestationalWeek = (): GestationalWeek[] => {
  const gestationalWeeks = [];
  const importantWeeks = [4, 12, 16, 22, 26, 30, 34, 36, 38, 39, 40];
  for (let week = 1; week <= 40; week++) {
    // Create a gestational week object
    const gestationalWeek = {
      type: importantWeeks.includes(week) ? 1 : 0,
      week: week,
    };

    // Push the gestational week object into the array
    gestationalWeeks.push(gestationalWeek);
  }
  return gestationalWeeks;
};
