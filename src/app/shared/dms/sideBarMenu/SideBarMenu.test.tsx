import React from 'react';

import { render } from 'tests';

import { DmsDetailsSidebarMenu } from './SideBarMenu';

describe('DmsDetailsSidebarMenu', () => {
  test('renders correctly', () => {
    const onHide = jest.fn();

    const { getByText } = render(<DmsDetailsSidebarMenu onHide={onHide} isVisible type={'LVZ'} />);

    expect(getByText('dms.menu.back_to_list')).toBeInTheDocument();
  });

  test('hide when isVisible false', () => {
    const onHide = jest.fn();

    const { queryByText } = render(<DmsDetailsSidebarMenu onHide={onHide} isVisible={false} type={'LVZ'} />);

    expect(queryByText('dms.menu.back_to_list')).toBeNull();
  });
});
