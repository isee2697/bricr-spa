import React from 'react';

import { fireEvent, render, act, wait } from 'tests';

import { ActionTabs } from './ActionTabs';
import { ActionTab } from './ActionTabs.types';

describe('ActionTabs', () => {
  test('render correctly', () => {
    const tabs: ActionTab[] = [
      {
        value: 'active',
        label: 'common.active',
      },
      {
        value: 'inactive',
        label: 'common.inactive',
      },
    ];

    const { getByText } = render(<ActionTabs tabs={tabs} status="active" onStatusChange={() => {}} />);

    expect(getByText('common.active')).toBeInTheDocument();
    expect(getByText('common.inactive')).toBeInTheDocument();
  });

  test('render count numbers', () => {
    const tabs: ActionTab[] = [
      {
        value: 'active',
        label: 'common.active',
        amount: 12,
      },
      {
        value: 'inactive',
        label: 'common.inactive',
        amount: 28,
      },
    ];

    const { getByText } = render(<ActionTabs tabs={tabs} status="active" onStatusChange={() => {}} />);

    expect(getByText('common.active (12)')).toBeInTheDocument();
    expect(getByText('common.inactive (28)')).toBeInTheDocument();
  });

  test('render count numbers in badge', () => {
    const tabs: ActionTab[] = [
      {
        value: 'active',
        label: 'common.active',
        amount: 12,
        hasBadge: true,
      },
      {
        value: 'inactive',
        label: 'common.inactive',
        amount: 28,
        hasBadge: true,
      },
    ];

    const { getByText } = render(<ActionTabs tabs={tabs} status="active" onStatusChange={() => {}} />);

    expect(getByText('12')).toBeInTheDocument();
    expect(getByText('28')).toBeInTheDocument();
  });

  test('render count numbers in badge', () => {
    const tabs: ActionTab[] = [
      {
        value: 'active',
        label: 'common.active',
        amount: 12,
        hasBadge: true,
      },
      {
        value: 'inactive',
        label: 'common.inactive',
        amount: 28,
        hasBadge: true,
      },
    ];
    const onStatusChange = jest.fn();

    const { getByText } = render(<ActionTabs tabs={tabs} status="active" onStatusChange={onStatusChange} />);

    const activeTabButton = getByText('common.active').closest('button');

    expect(activeTabButton?.classList).toContain('Mui-selected');

    const inactiveTabButton = getByText('common.inactive').closest('button');

    act(() => {
      fireEvent.click(inactiveTabButton!);
    });

    wait(() => {
      expect(inactiveTabButton?.classList).toContain('Mui-selected');
    });
  });
});
