import React from 'react';

import { render, fireEvent } from 'tests';

import { PimList } from './Pim';

describe('Pim', () => {
  test('renders correctly', () => {
    const onStatusChange = jest.fn();
    const onTypeChange = jest.fn();

    const { getByText } = render(
      <PimList
        status="archived"
        type="sale"
        onTypeChange={onTypeChange}
        onStatusChange={onStatusChange}
        isLoading={false}
        isError={false}
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
