import React from 'react';

import { render } from 'tests';

import { Chip } from './Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Chip label={'Chip content'} />);

    const element = getByText('Chip content');

    expect(element).toBeInTheDocument();
  });
});
