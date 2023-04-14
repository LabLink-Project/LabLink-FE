export const convertToShortDate = dateAndTime => {
  // date의 형식 : YYYY-MM-DD HH:MM
  const [fullDate, time] = dateAndTime.split(' ');
  const [year, month, date] = fullDate.split('-');

  return `${month}/${date}`;
};
