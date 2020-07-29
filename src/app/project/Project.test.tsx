import React from 'react';

import { render } from 'tests';

import { Project } from './Project';

describe('Project', () => {
  test('renders correctly', () => {
    const onStatusChange = jest.fn();
    const onTypeChange = jest.fn();

    render(
      <Project
        status="active"
        type="nc_sale"
        onTypeChange={onTypeChange}
        onStatusChange={onStatusChange}
        isLoading={false}
        isError={false}
        sorting={{
          sortOptions: [{ name: 'Lowest sale price', key: 'salePriceAsc' }],
          onSort: () => {},
        }}
        pagination={{}}
        listData={[]}
      />,
    );
  });
});
