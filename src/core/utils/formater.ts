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
