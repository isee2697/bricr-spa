import { DateView } from 'ui/molecules/calendar/Calandar.types';

export type ViewRange = { startDate: Date; endDate: Date };

export const getMonday = (date: Date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday

  return new Date(d.setDate(diff));
};

export const getSunday = (date: Date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) + 6; // adjust when day is sunday

  return new Date(d.setDate(diff));
};

export const getViewRange = (view: DateView, currentDate: Date): ViewRange => {
  const date = new Date(new Date(currentDate).toDateString());

  switch (view) {
    case DateView.Day:
      return { startDate: date, endDate: date };
    case DateView.Week:
      return { startDate: getMonday(date), endDate: getSunday(date) };
    case DateView.Month:
      return {
        startDate: new Date(date.getFullYear(), date.getMonth(), 1),
        endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0),
      };
  }

  return { startDate: date, endDate: date };
};
