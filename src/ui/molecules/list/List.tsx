import React from 'react';
import classNames from 'classnames';

import { Box, Pagination, Typography, Checkbox } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';

import { ListProps } from './List.types';
import { useStyles } from './List.styles';
import { useSelect } from './useSelect/useSelect';
import { ListHeader } from './listHeader/ListHeader';

export const List: <T>(p: ListProps<T>) => React.ReactElement<ListProps<T>> = ({
  items,
  itemIndex,
  renderItem,
  onBulk,
  sortOptions,
  onSort,
  pagination,
  loading,
  loadingItem,
  emptyTitle,
  emptyDescription,
  className,
  checkboxProps,
}) => {
  const classes = useStyles();

  const { checkedKeys, checkAllStatus, handleCheck, handleCheckAll } = useSelect(items, itemIndex);

  if (!loading && !items.length && emptyTitle && emptyDescription) {
    return (
      <InfoSection emoji="🤔">
        <Typography variant="h3">{emptyTitle}</Typography>
        <Typography variant="h3">{emptyDescription}</Typography>
      </InfoSection>
    );
  }

  return (
    <Box className={classNames(classes.container, className)}>
      <ListHeader
        sortOptions={sortOptions ?? []}
        checkedKeys={checkedKeys}
        checkAllStatus={checkAllStatus}
        onCheckAll={handleCheckAll}
        onBulk={() => onBulk(items.filter(item => checkedKeys.includes(`${item[itemIndex]}`)))}
        onSort={!!onSort ? onSort : () => {}}
      />
      {!loading &&
        items.length > 0 &&
        items.map(item => {
          const key = `${item[itemIndex]}`;
          const checked = checkedKeys.includes(key);
          const checkbox = (
            <Checkbox
              color="primary"
              className={classes.checkbox}
              onChange={() => handleCheck(key)}
              checked={checked}
              {...checkboxProps}
            />
          );

          return renderItem(item, checked, checkbox);
        })}
      {loading && loadingItem && (
        <>
          {Array.from({ length: 3 }).map((i, k) => (
            <div className={classes.loading} key={k}>
              <Checkbox color="primary" className={classes.checkbox} disabled checked={false} />
              {loadingItem}
            </div>
          ))}
        </>
      )}
      {pagination && (
        <Box className={classes.pagination}>
          <Pagination {...pagination} />
        </Box>
      )}
    </Box>
  );
};
