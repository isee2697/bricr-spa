import React from 'react';
import classNames from 'classnames';
import { useStyles } from '../Pagination.styles';
import { PaginationProps } from '../Pagination.types';
import { useLocale } from 'hooks/useLocale/useLocale';

export const PerPage = ({ perPageOptions, currentPerPage, onPerPageChange }: PaginationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <div className={classes.perPage}>
      <span className={classes.perPageTitle}>{formatMessage({ id: 'pagination.views' })}:</span>
      {perPageOptions &&
        perPageOptions.map(item => (
          <span
            key={item}
            onClick={() => onPerPageChange && onPerPageChange(item)}
            className={classNames({ [classes.selected]: item === currentPerPage })}
          >
            {item}
          </span>
        ))}
    </div>
  );
};
