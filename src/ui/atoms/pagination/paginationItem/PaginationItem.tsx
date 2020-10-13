import classNames from 'classnames';
import React from 'react';
import { useStyles } from '../Pagination.styles';

import { PaginationItemProps } from './Pagination.types';

export const PaginationItem = ({ page, type, selected, disabled, ...rest }: PaginationItemProps) => {
  const classes = useStyles();

  if (type === 'start-ellipsis' || type === 'end-ellipsis') {
    return (
      <li key={`${type}${page}`}>
        <div className={classes.ellipsis}>…</div>
      </li>
    );
  }

  if (type === 'page') {
    return (
      <li key={`${type}${page}`}>
        <button className={classNames({ [classes.selected]: selected }, classes.page)} disabled={disabled}>
          <div {...rest}>{page}</div>
        </button>
      </li>
    );
  }

  return (
    <li key={`${type}${page}`}>
      <button className={classes.nav} disabled={disabled}>
        <div {...rest}>{type === 'previous' ? 'prev' : type}</div>
      </button>
    </li>
  );
};
