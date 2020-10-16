import React from 'react';

import { render } from 'tests';

import { SelectBox } from './SelectBox';

describe('SelectBox', () => {
  test('renders correctly', () => {
    const { getByText } = render(<SelectBox items={[]} placeholder="Select something" onChange={() => {}} />);

    const element = getByText('Select something');

    expect(element).toBeInTheDocument();
  });
});
