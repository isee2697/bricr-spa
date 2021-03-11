import React from 'react';

import { render } from 'tests';

import { VisitedPage } from './VisitedPage';

describe('VisitedPage', () => {
  it('render correctly', () => {
    const { getByText } = render(<VisitedPage category="PIM" subCategory="Sale" name="Weerschijnvlinder 8: Prijzen" />);

    expect(getByText('Weerschijnvlinder 8: Prijzen')).toBeTruthy();
    expect(getByText(/common.pages.sub_catgeory.Sale/)).toBeTruthy();
    expect(getByText('Weerschijnvlinder 8: Prijzen')).toBeTruthy();
  });
});
