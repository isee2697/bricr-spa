import React from 'react';

import { render } from 'tests';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('render correctly', () => {
    const onPerPageChange = jest.fn();

    const { getByText } = render(
      <Pagination
        count={8}
        currentPerPage={10}
        perPageOptions={[10, 20, 'All']}
        onPerPageChange={value => onPerPageChange()}
      />,
    );

    expect(getByText('1')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('8')).toBeTruthy();
  });
});
