import React from 'react';

import { render } from 'tests';

import { ProgressFilling } from './ProgressFilling';

describe('ProgressFilling', () => {
  it('render correctly', () => {
    const { container } = render(<ProgressFilling progress={2 / 6} />);

    expect(container.querySelectorAll('.filled').length).toEqual(2);
  });
});
