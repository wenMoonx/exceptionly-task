import moment from 'moment';

export const getCurrentTime = () => {
  return moment().format();
};

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getMonth = () => {
  const date = new Date();
  return date.getMonth();
};

export const getDay = () => {
  const date = new Date();
  return date.getDay();
};

export const convertDate = (localTime: string) => {
  const date = new Date(localTime);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
