import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';

import { PageType } from 'hooks/usePages/usePages.types';
import { render, act, fireEvent, wait } from 'tests';

import { VisitedPage } from './VisitedPage';

describe('VisitedPage', () => {
  it('render correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/">
          <VisitedPage path="/pim" category={PageType.Pim} subCategory="Sale" name="Weerschijnvlinder 8: Prijzen" />,
        </Route>
        <Route exact path="/pim">
          <div>PIM Page</div>
        </Route>
      </MemoryRouter>,
    );

    expect(getByText('Weerschijnvlinder 8: Prijzen')).toBeTruthy();

    act(() => {
      fireEvent.click(getByText('Weerschijnvlinder 8: Prijzen').parentElement?.parentElement!);
    });

    wait(() => {
      expect(getByText('PIM Page')).toBeInTheDocument();
    });
  });
});
