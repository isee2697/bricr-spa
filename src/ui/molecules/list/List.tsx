import React from 'react';

import { Box, Pagination } from 'ui/atoms';

import { ListProps } from './List.types';
import { useStyles } from './List.styles';
import { useSelect } from './useSelect/useSelect';
import { ListHeader } from './listHeader/ListHeader';
import { ListRow } from './listRow/ListRow';

export const List: <T>(p: ListProps<T>) => React.ReactElement<ListProps<T>> = ({
  items,
  itemIndex,
  renderItem,
  onBulk,
  sortOptions,
  onSort,
  pagination,
}) => {
  const classes = useStyles();

  const { checkedKeys, checkAllStatus, handleCheck, handleCheckAll } = useSelect(items, itemIndex);

  return (
    <Box className={classes.container}>
      <ListHeader
        sortOptions={sortOptions}
        checkedKeys={checkedKeys}
        checkAllStatus={checkAllStatus}
        onCheckAll={handleCheckAll}
        onBulk={() => onBulk(items.filter(item => checkedKeys.includes(`${item[itemIndex]}`)))}
        onSort={onSort}
      />
      <Box>
        {items.map(item => {
          const key = `${item[itemIndex]}`;
          const checked = checkedKeys.includes(key);

          return (
            <ListRow key={key} checked={checked} onCheck={() => handleCheck(key)} item={item} renderItem={renderItem} />
          );
        })}
      </Box>
      <Box className={classes.pagination}>
        <Pagination {...pagination} />
      </Box>
    </Box>
  );
};
