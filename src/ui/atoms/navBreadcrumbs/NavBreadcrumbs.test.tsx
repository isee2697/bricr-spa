import React from 'react';

import { render } from 'tests';
import { NavBreadcrumb } from '../navBreadcrumb/NavBreadcrumb';

import { NavBreadcrumbs } from './NavBreadcrumbs';

describe('NavBreadcrumb and NavBreadcrumbs', () => {
  it('render correctly', () => {
    const { getByText } = render(
      <>
        <NavBreadcrumb title={'Test NavBreadcrumb'} />
        <NavBreadcrumbs />
      </>,
    );

    expect(getByText('Test NavBreadcrumb')).toBeTruthy();
  });
});
