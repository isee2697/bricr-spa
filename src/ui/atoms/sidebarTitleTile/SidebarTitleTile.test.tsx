import React from 'react';

import { EntityType } from 'app/shared/entityType';
import { render } from 'tests';
import { palette } from 'theme/palette';
import { SquareIcon } from '../icons';

import { SidebarTitleTile } from './SidebarTitleTile';

describe('SidebarTitleTile', () => {
  it('render correctly', () => {
    const { getByText } = render(<SidebarTitleTile title={'Test title'} icon={<SquareIcon />} />);

    expect(getByText('Test title')).toBeInTheDocument();
  });

  it('render subtitle', () => {
    const { getByText } = render(
      <SidebarTitleTile title={'Test title'} subtitle={'Test subtitle'} icon={<SquareIcon />} />,
    );

    expect(getByText('Test subtitle')).toBeInTheDocument();
  });

  it('render with category', () => {
    const { getByText } = render(
      <SidebarTitleTile
        title={'Test title'}
        subtitle={'Test subtitle'}
        icon={<SquareIcon />}
        category={EntityType.Project}
      />,
    );

    const element = getByText('Test title');

    const parentElement = element.parentElement?.parentElement;

    expect(parentElement).toBeTruthy();
    expect(parentElement).toHaveStyle(`background-color: ${palette.green.light}`);
  });
});
