import React from 'react';

import { Entities } from 'api/types';
import { render } from 'tests';

import { EmptyStateFilter } from './EmptyStateFilter';

describe('EmptyStateFilter', () => {
  test('isFiltered empty list', () => {
    const { getByText } = render(<EmptyStateFilter type={Entities.Pim} isFiltered />);

    expect(getByText('common.filtered_list.empty_title')).toBeInTheDocument();
    expect(getByText('common.filtered_list.empty_description')).toBeInTheDocument();
  });

  test('items empty list', () => {
    const { getByText } = render(<EmptyStateFilter type={Entities.Pim} />);

    expect(getByText('common.list.empty_title')).toBeInTheDocument();
    expect(getByText('common.list.empty_description')).toBeInTheDocument();
  });
});
