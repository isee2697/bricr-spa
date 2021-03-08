import React from 'react';

import { render } from 'tests';

import { SideSubMenuItem } from './SideSubMenuItem';

describe('SideSubMenuItem', () => {
  it('render correctly', () => {
    const { getByText } = render(<SideSubMenuItem title={'Side Menu Test Item'} selected />);

    expect(getByText('Side Menu Test Item')).toBeTruthy();
  });

  it('render selected', () => {
    const { getByText } = render(<SideSubMenuItem title={'Side Menu Test Item'} selected badge={25} />);

    expect(getByText('25')).toBeInTheDocument();
  });
});
