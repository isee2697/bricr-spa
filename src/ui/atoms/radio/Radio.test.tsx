import React from 'react';

import { fireEvent, render } from 'tests';

import { Radio } from './Radio';

import { FormControlLabel } from '..';

describe('Radio', () => {
  test('render correctly', () => {
    const onChange = jest.fn();

    const { container } = render(
      <FormControlLabel control={<Radio onChange={onChange} value={false} />} label="Primary" />,
    );

    fireEvent.click(container.querySelector('.MuiFormControlLabel-root')!);

    expect(onChange).toBeCalled();
  });
});
