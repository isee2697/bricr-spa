import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { DashboardHeader } from './DashboardHeader';

describe('DashboardHeader', () => {
  test('renders', () => {
    const onFilterClick = jest.fn();
    const { getByText } = render(<DashboardHeader onFilterClick={onFilterClick}>Welcome</DashboardHeader>);

    const element = getByText('Welcome');

    expect(element).toBeInTheDocument();
  });

  test('render emoji', () => {
    const onFilterClick = jest.fn();
    const { getByAltText } = render(<DashboardHeader onFilterClick={onFilterClick}>🤔</DashboardHeader>);

    const element = getByAltText('🤔');

    expect(element).toBeInTheDocument();
  });

  test('render date time correctly', () => {
    const onFilterClick = jest.fn();
    const { getByAltText } = render(<DashboardHeader onFilterClick={onFilterClick}>🤔</DashboardHeader>);

    const element = getByAltText(DateTime.local().toLocaleString(DateTime.DATE_HUGE));

    expect(element).toBeInTheDocument();
  });
});
