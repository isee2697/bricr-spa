import React, { ReactNode } from 'react';
import { Grid, Table, TableColumnResizing } from '@devexpress/dx-react-grid-material-ui';

import { useStyle } from './ResultTable.styles';

type DataType = {
  selected: ReactNode;
  title: string;
  date: string;
  location: string;
  price: string;
};

type ResultTableProps = {
  data: DataType[];
};

export const ResultTable = ({ data }: ResultTableProps) => {
  const classes = useStyle();
  const rows = data;

  const columns = [
    { name: 'selected', title: 'Selected' },
    { name: 'title', title: 'Title' },
    { name: 'date', title: 'Date' },
    { name: 'location', title: 'Location' },
    { name: 'price', title: 'Price' },
  ];

  const defaultColumnWidths = [
    { columnName: 'selected', width: 60 },
    { columnName: 'title', width: 200 },
    { columnName: 'date', width: 128 },
    { columnName: 'location', width: 128 },
    { columnName: 'price', width: 104 },
  ];

  return (
    <div className={classes.table}>
      <Grid rows={rows} columns={columns}>
        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
      </Grid>
    </div>
  );
};
