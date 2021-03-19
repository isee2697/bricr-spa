import React from 'react';

import { render } from 'tests';

import { CheckboxLoading } from './CheckboxLoading';

describe('CheckboxLoading', () => {
  test('render isLoading false', () => {
    const { container } = render(<CheckboxLoading isLoading={false} />);

    expect(container.querySelector('.MuiCheckbox-root')).toBeInTheDocument();
    expect(container.querySelector('.MuiCircularProgress-root')).toBeNull();
  });

  test('render isLoading true', () => {
    const { container } = render(<CheckboxLoading isLoading />);

    expect(container.querySelector('.MuiCheckbox-root')).toBeNull();
    expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
  });
});
