import React from 'react';

import { render } from 'tests';

import { Placeholder } from './Placeholder';

describe('Placeholder', () => {
  it('render correctly', () => {
    const { getByRole } = render(<Placeholder role="placeholder" />);
    expect(getByRole('placeholder')).toBeTruthy();
    expect(getByRole('placeholder')).toHaveStyle(`border-radius: ${4}px`);
  });

  it('with border radius', () => {
    const { getByRole } = render(<Placeholder role="placeholder" borderRadius={1} />);
    expect(getByRole('placeholder')).toBeTruthy();
    expect(getByRole('placeholder')).toHaveStyle(`border-radius: ${8}px`);
  });

  it('with margin', () => {
    const { getByRole } = render(<Placeholder role="placeholder" marginLeft={1} marginRight={0.5} mt={2} mb={1.5} />);
    expect(getByRole('placeholder')).toBeTruthy();
    expect(getByRole('placeholder')).toHaveStyle(`margin-left: ${8}px`);
    expect(getByRole('placeholder')).toHaveStyle(`margin-right: ${4}px`);
    expect(getByRole('placeholder')).toHaveStyle(`margin-top: ${16}px`);
    expect(getByRole('placeholder')).toHaveStyle(`margin-bottom: ${12}px`);
  });
});
