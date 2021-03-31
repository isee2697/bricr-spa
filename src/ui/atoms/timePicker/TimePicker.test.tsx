import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
  it('render correctly', () => {
    const onChange = jest.fn();
    const date = new Date();

    const { container } = render(<TimePicker value={date} onChange={onChange} />);

    expect(container.querySelector('.MuiInputBase-input')).toHaveAttribute(
      'value',
      DateTime.fromJSDate(date).toLocaleString(DateTime.TIME_SIMPLE),
    );
  });
});
