import React from 'react';
import classNames from 'classnames';

import { Box, Pagination, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';

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
  loading,
  loadingItem,
  emptyTitle,
  emptyDescription,
  className,
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
        sortOptions={sortOptions}
        checkedKeys={checkedKeys}
        checkAllStatus={checkAllStatus}
        onCheckAll={handleCheckAll}
        onBulk={() => onBulk(items.filter(item => checkedKeys.includes(`${item[itemIndex]}`)))}
        onSort={onSort}
      />
      {!loading && items.length > 0 && (
        <Box>
          {items.map(item => {
            const key = `${item[itemIndex]}`;
            const checked = checkedKeys.includes(key);

            return (
              <ListRow
                key={key}
                checked={checked}
                onCheck={() => handleCheck(key)}
                item={item}
                renderItem={renderItem}
              />
            );
          })}
        </Box>
      )}
      {loading && loadingItem && (
        <>
          {Array.from({ length: 3 }).map((i, k) => (
            <ListRow key={k} checked={false} onCheck={() => {}} item={i} renderItem={() => loadingItem} />
          ))}
        </>
      )}
      <Box className={classes.pagination}>
        <Pagination {...pagination} />
      </Box>
    </Box>
  );
};
