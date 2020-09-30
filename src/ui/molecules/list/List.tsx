import React, { useState } from 'react';
import classNames from 'classnames';

import { BulkActionConfirmModal } from 'ui/organisms';
import { Box, Checkbox, Pagination, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { ActionModalForm } from 'ui/organisms/actionModal/ActionModalForm';
import { BulkOperations } from 'api/types';

import { ListProps } from './List.types';
import { useStyles } from './List.styles';
import { useSelect } from './useSelect/useSelect';
import { ListHeader } from './listHeader/ListHeader';

export const List: <T>(p: ListProps<T>) => React.ReactElement<ListProps<T>> = ({
  items,
  itemIndex,
  renderItem,
  sortOptions,
  pagination,
  loading,
  loadingItem,
  emptyTitle,
  emptyDescription,
  className,
  checkboxProps,
  disabled,
  onOperation,
  onBulk,
  onSort,
  renderDeleteTitle = () => '',
  bulkActions,
  onBulkOpen,
  bulkData = null,
  bulkSubmitText,
  bulkTitle,
  isShowHeader = true,
}) => {
  const classes = useStyles();
  const [isActionModalOpened, setActionModalOpened] = useState(false);

  const [bulkActionProps, setBulkActionProps] = useState({
    itemName: '',
    type: BulkOperations.Delete,
    count: 0,
    onConfirm: () => Promise.resolve(),
  });

  const [isModalOpened, setModalOpened] = useState(false);

  const { checkedKeys, checkAllStatus, handleCheck, handleCheckAll, handleClearAll } = useSelect(
    items,
    itemIndex,
    disabled,
  );

  if (!loading && !items.length && emptyTitle && emptyDescription) {
    return (
      <InfoSection emoji="🤔">
        <Typography variant="h3">{emptyTitle}</Typography>
        <Typography variant="h3">{emptyDescription}</Typography>
      </InfoSection>
    );
  }

  const handleOperation = (operation: BulkOperations) => {
    if (onOperation) {
      const filtered = items.filter(item => checkedKeys.includes(`${item[itemIndex]}`));
      setBulkActionProps({
        itemName: filtered.length === 1 ? renderDeleteTitle(filtered[0]) : '',
        type: operation,
        count: filtered.length,
        onConfirm: async () => {
          await onOperation(operation, filtered);
          setModalOpened(false);
          handleClearAll();
        },
      });

      setModalOpened(true);
    }

    return undefined;
  };

  const handleBulk = () => {
    const filtered = items.filter(item => checkedKeys.includes(`${item[itemIndex]}`));

    if (onBulkOpen) {
      onBulkOpen(filtered);
    }

    setActionModalOpened(true);
  };

  const handleBulkSubmit = async (values: Record<string, string | string[]>) => {
    const filtered = items.filter(item => checkedKeys.includes(`${item[itemIndex]}`));

    if (onBulk) {
      await onBulk(filtered, values);
    }

    return undefined;
  };

  return (
    <Box className={classNames(classes.container, className)}>
      {isShowHeader && (
        <ListHeader
          sortOptions={sortOptions ?? []}
          checkedKeys={checkedKeys}
          checkAllStatus={checkAllStatus}
          disabled={disabled}
          onCheckAll={handleCheckAll}
          onArchive={() => handleOperation(BulkOperations.Archive)}
          onDelete={() => handleOperation(BulkOperations.Delete)}
          onBulk={handleBulk}
          onSort={!!onSort ? onSort : () => {}}
        />
      )}
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
              disabled={disabled}
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
      {isModalOpened && (
        <BulkActionConfirmModal {...bulkActionProps} isOpened={isModalOpened} onCancel={() => setModalOpened(false)} />
      )}
      {!!bulkActions && (
        <ActionModalForm
          title={bulkTitle ?? ''}
          isOpened={isActionModalOpened}
          submitText={bulkSubmitText ?? ''}
          actions={bulkActions}
          onClose={() => setActionModalOpened(false)}
          onSubmit={handleBulkSubmit}
          initialValues={bulkData}
        />
      )}
    </Box>
  );
};
