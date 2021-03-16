import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { DashboardHeader } from './DashboardHeader';

describe('DashboardHeader', () => {
  test('renders', () => {
    const { getByText } = render(<DashboardHeader>Welcome</DashboardHeader>);

    const element = getByText('Welcome');

    expect(element).toBeInTheDocument();
  });

  test('render emoji', () => {
    const { getByAltText } = render(<DashboardHeader>🤔</DashboardHeader>);

    const element = getByAltText('🤔');

    expect(element).toBeInTheDocument();
  });

  test('render date time correctly', () => {
    const { getByText } = render(<DashboardHeader>🤔</DashboardHeader>);

    const element = getByText(DateTime.local().toLocaleString(DateTime.DATE_HUGE));

    expect(element).toBeInTheDocument();
  });
});
