import React from 'react';
import classNames from 'classnames';

import { Box, Checkbox } from 'ui/atoms';
import { ListRowProps } from '../List.types';
import { useStyles } from '../List.styles';

export const ListRow: <T>(p: ListRowProps<T>) => React.ReactElement<ListRowProps<T>> = ({
  checked,
  onCheck,
  item,
  renderItem,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.rowContainer}>
      <Box className={classNames(classes.row, { [classes.rowChecked]: checked })}>
        <Checkbox color="primary" className={classes.checkbox} onChange={onCheck} checked={checked} />
        <Box component="span" className={classes.item}>
          {renderItem(item, checked)}
        </Box>
      </Box>
    </Box>
  );
};
