import React from 'react';

import { render } from 'tests';

import { ShowMore } from './ShowMore';

describe('ShowMore', () => {
  it('render correct amount', () => {
    const { getByText } = render(<ShowMore amount={5} data={[]} />);

    expect(getByText(`+5 common.show_more`)).toBeTruthy();
  });
});
