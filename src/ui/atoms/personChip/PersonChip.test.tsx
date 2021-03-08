import React from 'react';

import { render } from 'tests';

import { PersonChip } from './PersonChip';

describe('PersonChip', () => {
  it('render correctly without image', () => {
    const name = 'Christian van Gils';

    const { getByText } = render(<PersonChip name={name} />);

    expect(getByText(name)).toBeTruthy();
  });

  it('render correctly with image', () => {
    const name = 'Christian van Gils';
    const image = 'https://source.unsplash.com/featured/?person';

    const { getByText, getByAltText } = render(<PersonChip name={name} image={image} />);

    expect(getByText(name)).toBeTruthy();
    expect(getByAltText(name)).toHaveAttribute('src', image);
  });
});
