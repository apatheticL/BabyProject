import moment from 'moment';
import {Health} from '../model/health.model';
import {Dimensions} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
const getCurrentGestationalOld = (
  tuan1: number,
  ngay1: number,
  tuan2: number,
  ngay2: number,
) => {
  // Chuyển đổi số ngày thành tuần
  let tuanNgay1 = tuan1 + ngay1 / 7;
  let tuanNgay2 = tuan2 + ngay2 / 7;

  // Tính hiệu
  let hieuTuan = tuanNgay1 - tuanNgay2;

  // Lấy phần nguyên và phần thập phân
  let nguyen = Math.floor(hieuTuan);
  let thapPhan = hieuTuan - nguyen;

  // Chuyển đổi phần thập phân thành ngày
  let ngay = Math.round(thapPhan * 7);

  return {weeks: nguyen, days: ngay};
};

// Sử dụng hàm

export const getGestationalOld = (dueDate: string | Date) => {
  let due = new Date(dueDate);
  if (dueDate instanceof Date) {
    due = dueDate;
  }
  const today = moment();
  let currentTime = moment(due);

  // Trừ đi 7 ngày
  const weeks = currentTime.diff(today, 'weeks');
  const days = currentTime.diff(today, 'days') % 7;
  const result = getCurrentGestationalOld(40, 0, weeks, days);
  return result;
};

export const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};

export const validateEmail = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email) === true;
};
export const validatePhone = (phone: string) => {
  let reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  return reg.test(phone) === true;
};

export const groupHealthList = (healthList: Health[]) => {
  const groupedByDate = Object.entries(
    healthList.reduce((acc: any, obj) => {
      const date = obj.Date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(obj);
      return acc;
    }, {}),
  ).map(([key, value]) => ({key, value}));
  return groupedByDate;
};

export const getPercentageGestational = (weeks: number, days: number) => {
  const currentDay = weeks * 7 + days;
  const totalDay = 280 - currentDay;
  const currentPercentage = (currentDay / 280) * 100;
  const totalPercentage = 100 - currentPercentage;
  return {currentPercentage, totalPercentage, totalDay, currentDay};
};
export const checkOverdueSchedule = (date: string) => {
  try {
    const _newDate = new Date(date);
    const currentDate = new Date();
    return _newDate < currentDate;
  } catch (error) {
    __DEV__ && console.log('dev ~ checkOverdueSchedule ~ error:', error);
    return false;
  }
};
