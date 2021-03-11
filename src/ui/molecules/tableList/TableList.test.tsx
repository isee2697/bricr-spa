import React from 'react';

import { render } from 'tests';
import { TableHead, TableCell, TableRow } from 'ui/atoms';

import { TableList } from './TableList';

const items = [
  {
    id: '0001',
    name: 'Item 1',
  },
];

describe('TableList', () => {
  test('render correctly', () => {
    const { getByText } = render(
      <TableList
        items={items}
        itemIndex={'id'}
        header={
          <TableHead>
            <TableCell padding="checkbox" />
            <TableCell>Name</TableCell>
          </TableHead>
        }
        renderItem={(item, checked, checkbox) => (
          <TableRow>
            <TableCell padding="checkbox">{checkbox}</TableCell>
            <TableCell>{item['name']}</TableCell>
          </TableRow>
        )}
        emptyTitle={'Empty title'}
        emptyDescription={'Empty Description'}
      />,
    );

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Item 1')).toBeInTheDocument();
  });

  test('without items', () => {
    const { getByText, queryByText } = render(
      <TableList
        items={[]}
        itemIndex={'id'}
        header={
          <TableHead>
            <TableCell padding="checkbox" />
            <TableCell>Name</TableCell>
          </TableHead>
        }
        renderItem={(item, checked, checkbox) => (
          <TableRow>
            <TableCell padding="checkbox">{checkbox}</TableCell>
            <TableCell>{item['name']}</TableCell>
          </TableRow>
        )}
        emptyTitle={'Empty title'}
        emptyDescription={'Empty Description'}
      />,
    );

    expect(getByText('Empty title')).toBeInTheDocument();
    expect(getByText('Empty Description')).toBeInTheDocument();
    expect(queryByText('Name')).toBeNull();
  });
});
