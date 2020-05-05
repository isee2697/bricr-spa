import React, { useState } from 'react';

import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks';
import { Box, Checkbox, Typography, Button, Select, MenuItem } from 'ui/atoms';
import { ListHeaderProps } from '../List.types';
import { useStyles } from '../List.styles';

export const ListHeader = ({
  sortOptions,
  checkedKeys,
  checkAllStatus,
  onCheckAll,
  onBulk,
  onSort,
}: ListHeaderProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [sorting, setSorting] = useState(sortOptions[0].key);

  return (
    <Box className={classes.header}>
      <Box>
        <Typography variant="h5" className={classes.selectAll} onClick={onCheckAll}>
          <Checkbox color="primary" className={classes.checkbox} {...checkAllStatus} />
          {formatMessage({ id: AppMessages['list.select_all'] })}
        </Typography>
        {!!checkedKeys.length && (
          <Button variant="outlined" color="primary" onClick={onBulk}>
            {formatMessage({ id: AppMessages['list.bulk_actions'] })}
          </Button>
        )}
      </Box>
      <Select
        className={classes.sorting}
        variant="outlined"
        value={sorting}
        onChange={event => {
          const value = event?.target.value as string;
          setSorting(value);
          onSort(value);
        }}
      >
        {sortOptions.map(({ key, name }) => (
          <MenuItem key={key} value={key}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
