import React from 'react';

import { render } from 'tests';

import { List } from './List';
import { ListProps } from './List.types';

const listProps: ListProps<{ title: string; price: number }> = {
  items: [
    { title: 'Foo', price: 375500 },
    { title: 'Bar', price: 358000 },
    { title: 'Baz', price: 790000 },
  ],
  itemIndex: 'title',
  renderItem: (item, isSelected) => <div>{JSON.stringify(item)}</div>,
  onBulk: () => {},
  sortOptions: [
    { key: 'foo', name: 'Foo' },
    { key: 'bar', name: 'Bar' },
  ],
  onSort: () => {},
  pagination: {
    count: 8,
    currentPerPage: 10,
    perPageOptions: [10, 25, 'All'],
    onPerPageChange: () => {},
  },
};

describe('List', () => {
  test('renders', () => {
    const { getByText } = render(<List {...listProps} />);

    const element = getByText('Foo');

    expect(element).toBeInTheDocument();
  });

  test('renders loading items', () => {
    const { getAllByText } = render(<List {...listProps} loading loadingItem={<div>LoadingItem</div>} />);

    const elements = getAllByText('LoadingItem');

    expect(elements.length).toEqual(3);
  });
});
