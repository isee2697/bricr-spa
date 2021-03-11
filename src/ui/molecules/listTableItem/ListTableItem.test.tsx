import React from 'react';

import { fireEvent, render } from 'tests';

import { ListTableItem } from './ListTableItem';

describe('ListTableItem', () => {
  const data = {
    id: '0001',
    name: 'Christian van Gils',
  };
  const headerCells = [
    {
      field: 'id',
      label: 'id',
      sortable: true,
    },
    {
      field: 'name',
      label: 'name',
      sortable: true,
    },
  ];

  test('render as item', () => {
    const { getByText } = render(
      <ListTableItem item={data} headerCells={headerCells} renderCell={(fieldName, item) => <>{item[fieldName]}</>} />,
    );

    expect(getByText(data.id)).toBeInTheDocument();
    expect(getByText(data.name)).toBeInTheDocument();
  });

  test('render as header', () => {
    const { getByText } = render(
      <ListTableItem
        item={data}
        headerCells={headerCells}
        renderCell={(fieldName, item) => <>{item[fieldName]}</>}
        isHeader
      />,
    );

    expect(getByText('id')).toBeInTheDocument();
    expect(getByText('name')).toBeInTheDocument();
  });

  test('onSort called', () => {
    const onSort = jest.fn();

    const { getByText } = render(
      <ListTableItem
        item={data}
        headerCells={headerCells}
        renderCell={(fieldName, item) => <>{item[fieldName]}</>}
        onSort={onSort}
      />,
    );

    const element = getByText(data.name);

    fireEvent.click(element);

    expect(onSort).toBeCalled();
  });

  test('renderCell work', () => {
    const renderCell = jest.fn();

    render(<ListTableItem item={data} headerCells={headerCells} renderCell={renderCell} />);

    expect(renderCell).toBeCalled();
  });
});
