import React from 'react';

import { render, fireEvent } from 'tests';

import { PimList } from './PimList';

describe('Pim', () => {
  test('renders correctly', () => {
    const onStatusChange = jest.fn();

    const { getByText } = render(
      <PimList
        status="archived"
        type="sale"
        onStatusChange={onStatusChange}
        isLoading={false}
        sorting={{
          sortOptions: [{ name: 'Lowest sale price', key: 'salePriceAsc' }],
          onSort: () => {},
        }}
        pagination={{}}
      />,
    );

    fireEvent.click(getByText('pim.status.active'));
    expect(onStatusChange).toHaveBeenCalledWith('active');
  });
});
