export const convertToShortDate = dateAndTime => {
  // date의 형식 : YYYY-MM-DD HH:MM
  if (!dateAndTime) return;
  const [fullDate, time] = dateAndTime.split(' ');
  const [year, month, date] = fullDate.split('-');

  return `${month}/${date}`;
};

export default function formatDate(time) {
  const today = {
    year: time.getFullYear(),
    month: (time.getMonth() + 1).toString().padStart(2, '0'),
    day: time.getDate().toString().padStart(2, '0'),
    hour: time.getHours().toString().padStart(2, '0'),
    min: time.getMinutes().toString().padStart(2, '0'),
  };

  const date = `${today.year}-${today.month}-${today.day} ${today.hour}:${today.min}`;
  return date;
}
