export const formatDate = (
  date: Date,
  format: (_: {
    MM: string;
    DD: string;
    HH: string;
    mm: string;
    ss: string;
  }) => string,
) =>
  format({
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    DD: date.getDate().toString().padStart(2, '0'),
    HH: date.getHours().toString().padStart(2, '0'),
    mm: date.getMinutes().toString().padStart(2, '0'),
    ss: date.getSeconds().toString().padStart(2, '0'),
  });
