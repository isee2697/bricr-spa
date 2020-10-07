import { usePagination } from '@material-ui/lab/Pagination';
import React from 'react';

import { Box } from 'ui/atoms';

import { PaginationProps } from './Pagination.types';
import { useStyles } from './Pagination.styles';
import { PerPage } from './perPage/PerPage';
import { PaginationItem } from './paginationItem/PaginationItem';

export const Pagination = (props: PaginationProps) => {
  const { items } = usePagination(props);
  const classes = useStyles();

  return (
    <Box
      className="pagination-container"
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <ul className={classes.ul}>
        {items.map(item => (
          <PaginationItem key={`${item.type}_${item.page}`} {...item} />
        ))}
      </ul>
      {props.perPageOptions && (
        <Box>
          <PerPage
            currentPerPage={props.currentPerPage}
            perPageOptions={props.perPageOptions}
            onPerPageChange={props.onPerPageChange}
          />
        </Box>
      )}
    </Box>
  );
};
