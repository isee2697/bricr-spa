import React from 'react';

import { render } from 'tests';

import { DashboardHeader } from './DashboardHeader';

describe('DashboardHeader', () => {
  test('renders', () => {
    const onFilterClick = jest.fn();
    const { getByText } = render(<DashboardHeader onFilterClick={onFilterClick}>Welcome</DashboardHeader>);

    const element = getByText('Welcome');

    expect(element).toBeInTheDocument();
    expect(onFilterClick).toHaveBeenCalled();
  });
});
