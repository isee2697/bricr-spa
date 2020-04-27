import React from 'react';

import { render, fireEvent } from 'tests';

import { DashboardHeader } from './DashboardHeader';

describe('DashboardHeader', () => {
  test('renders', () => {
    const onFilterClick = jest.fn();
    const { getByText, getByRole } = render(<DashboardHeader onFilterClick={onFilterClick}>Welcome</DashboardHeader>);

    const element = getByText('Welcome');
    fireEvent.click(getByRole('button'));

    expect(element).toBeInTheDocument();
    expect(onFilterClick).toHaveBeenCalled();
  });
});
