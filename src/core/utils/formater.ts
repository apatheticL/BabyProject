import moment from 'moment';

// format type dd-mm-yyyy
export const formatDate = (date: string) => {
  const d = new Date(date);
  var formattedDate = moment(d).format('MMMM do, yyyy');
  return formattedDate;
};
export const formatDateToString = (date: Date) => {
  var formattedDate = moment(date).format('DD-MM-yyyy');
  return formattedDate;
};

export const convertStringToDate = (date?: string) => {
  if (date) {
    const _date = moment(date, 'DD-MM-yyyy').toDate();
    return _date;
  } else {
    return new Date();
  }
};

export const getEndDate = (date?: string) => {
  if (date) {
    const _date = moment(date, 'DD-MM-yyyy').add(1, 'days').toDate();
    return _date;
  } else {
    return new Date();
  }
};
export const getStartDateSend = (date?: string) => {
  if (date) {
    const _date = moment(date, 'DD-MM-yyyy').toDate();
    return _date;
  } else {
    return new Date();
  }
};
