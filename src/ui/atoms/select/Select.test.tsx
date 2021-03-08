import React from 'react';

import { render } from 'tests';

import { Select } from './Select';

describe('Select', () => {
  it('render with label', () => {
    const { getByText } = render(<Select label="test-label" />);

    expect(getByText('test-label')).toBeTruthy();
  });

  it('render without label', () => {
    const { container } = render(<Select />);

    expect(container.querySelectorAll('.MuiFormLabel-root').length).toEqual(0);
  });
});
