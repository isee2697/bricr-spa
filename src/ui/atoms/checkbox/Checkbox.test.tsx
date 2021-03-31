import React from 'react';

import { fireEvent, render, wait } from 'tests';
import { palette } from 'theme/palette';

import { Checkbox } from './Checkbox';

import { FormControlLabel } from '..';

describe('Checkbox', () => {
  test('render correctly', () => {
    const onChange = jest.fn();

    const { container } = render(
      <FormControlLabel control={<Checkbox onChange={onChange} value={false} />} label="Primary" />,
    );

    fireEvent.click(container.querySelector('.MuiFormControlLabel-root')!);

    expect(onChange).toBeCalled();
  });

  test('primary color', () => {
    const { container } = render(<Checkbox color="primary" value={true} />);

    wait(() => {
      expect(container.querySelector('.MuiCheckbox-root')).toHaveStyle(`color: ${palette.blue.main}`);
    });
  });

  test('secondary color', () => {
    const { container } = render(<Checkbox color="secondary" value={true} />);

    wait(() => {
      expect(container.querySelector('.MuiCheckbox-root')).toHaveStyle(`color: ${palette.red.main}`);
    });
  });

  test('default color', () => {
    const { container } = render(<Checkbox color="default" value={true} />);

    wait(() => {
      expect(container.querySelector('.MuiCheckbox-root')).toHaveStyle(`color: ${palette.gray.main}`);
    });
  });
});
