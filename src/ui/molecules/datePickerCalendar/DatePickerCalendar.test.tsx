import { DateTime } from 'luxon';
import React from 'react';

import { fireEvent, render } from 'tests';

import { DatePickerCalendar } from './DatePickerCalendar';

describe('DatePickerCalendar', () => {
  test('renders correctly', () => {
    const onChangeDate = jest.fn();
    const currentDate = DateTime.local();
    const { getByText, getAllByText } = render(
      <DatePickerCalendar currentDate={currentDate} onChangeDate={onChangeDate} />,
    );

    Array.from(new Array(currentDate.daysInMonth), (value, index) => index).forEach(day => {
      expect(getAllByText(`${day + 1}`).length).toBeGreaterThanOrEqual(1);
    });

    fireEvent.click(getByText('24')!);

    expect(onChangeDate).toBeCalled();
  });
});
