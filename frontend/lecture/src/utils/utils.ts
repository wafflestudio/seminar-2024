export const formatDate = (
  date: Date,
  format: (_: { MM: string; DD: string }) => string,
) =>
  format({
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    DD: date.getDate().toString().padStart(2, '0'),
  });
