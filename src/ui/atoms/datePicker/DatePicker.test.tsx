import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  test('renders correctly', () => {
    const onChange = jest.fn((date?: DateTime | null) => {});

    const { getByRole } = render(<DatePicker role="date-picker" value={new Date()} onChange={onChange} />);

    expect(getByRole('date-picker')).toBeTruthy();
  });

  test('renders label and placeholder correctly', () => {
    const onChange = jest.fn((date?: DateTime | null) => {});

    const { getByRole } = render(
      <DatePicker
        role="date-picker"
        value={new Date()}
        onChange={onChange}
        label={'DatePickerLabel'}
        placeholder={'Date Picker Placeholder'}
      />,
    );

    const element = getByRole('date-picker');
    const inputElements = element.getElementsByClassName('MuiInputBase-input');

    expect(element).toHaveTextContent('DatePickerLabel');
    expect(inputElements.length).toBeGreaterThan(0);
    expect(inputElements[0]).toHaveAttribute('placeholder', 'Date Picker Placeholder');
  });
});
