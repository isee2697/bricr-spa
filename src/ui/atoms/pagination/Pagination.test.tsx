import React from 'react';

import { fireEvent, render } from 'tests';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('render correctly', () => {
    const onPerPageChange = jest.fn();

    const { getByText } = render(
      <Pagination count={8} currentPerPage={10} perPageOptions={[10, 20, 'All']} onPerPageChange={onPerPageChange} />,
    );

    expect(getByText('1')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('8')).toBeTruthy();

    const prevButton = getByText('prev');
    const nextButton = getByText('next');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(getByText('2')).toHaveAttribute('aria-current', 'true');

    fireEvent.click(prevButton);
    expect(getByText('1')).toHaveAttribute('aria-current', 'true');
  });
});
