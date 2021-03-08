import React from 'react';

import { render } from 'tests';

import { ColoredImage } from './ColoredImage';

describe('ColoredImage', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<ColoredImage role="test-colored-image" />);

    expect(getByRole('test-colored-image')).toBeTruthy();
  });

  test('renders variant correctly', () => {
    const { getByRole } = render(<ColoredImage variant="green" role="test-colored-image" />);

    expect(getByRole('test-colored-image')).toHaveClass('green');
  });
});
