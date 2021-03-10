import React from 'react';

import { render } from 'tests';

import { Emoji } from './Emoji';

describe('Emoji', () => {
  it('render correctly', () => {
    const { getByAltText } = render(<Emoji className="emoji">😀</Emoji>);

    expect(getByAltText('😀')).toBeTruthy();
  });
});
