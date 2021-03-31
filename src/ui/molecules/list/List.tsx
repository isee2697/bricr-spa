import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { BulkActionConfirmModal } from 'ui/organisms';
import { Box, Checkbox, Pagination, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { ActionModalForm } from 'ui/organisms/actionModal/ActionModalForm';
import { BulkOperations } from 'api/types';
import { SelectState } from 'ui/molecules/list/useSelect/useSelect.types';

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
  emptyPlaceholder,
  className,
  checkboxProps,
  selectedItems = [],
  disabled,
  onOperation,
  onBulk,
  onSort,
  onSelectItems,
  renderDeleteTitle = () => '',
  bulkActions,
  onBulkOpen,
  bulkData = null,
  bulkSubmitText,
  bulkTitle,
  isShowHeader = true,
  listIndexHeader,
  hideArchive = false,
  hideDelete = false,
  hideBulkActions = false,
}) => {
  const classes = useStyles();
  const [isActionModalOpened, setActionModalOpened] = useState(false);
  const [amountItems, setAmountItems] = useState<number>();
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
    selectedItems,
  );

  useEffect(() => {
    if (!!onSelectItems) {
      onSelectItems(checkedKeys);
    }
  }, [checkedKeys, onSelectItems]);

  useEffect(() => {
    if (items.length > 0 && (!amountItems || amountItems !== items.length)) {
      setAmountItems(items.length);
    }

    if (amountItems === checkedKeys.length && amountItems !== items.length) {
      handleCheckAll();
    } else if (!!amountItems && amountItems !== items.length) {
      const newKeys: SelectState = [];
      checkedKeys.forEach(key => {
        if (items.find(item => `${item[itemIndex]}` === key)) {
          newKeys.push(key);
        }
      });
      handleClearAll();
      newKeys.forEach(key => handleCheck(key));
    }
  }, [items, amountItems, setAmountItems, checkedKeys, handleClearAll, itemIndex, handleCheck, handleCheckAll]);

  if (!loading && !items.length && emptyTitle && emptyDescription) {
    return (
      <InfoSection emoji="🤔">
        <Typography variant="h3">{emptyTitle}</Typography>
        <Typography variant="h3">{emptyDescription}</Typography>
      </InfoSection>
    );
  }

  if (!loading && !items.length && emptyPlaceholder) {
    return <>{emptyPlaceholder}</>;
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
          onArchive={!hideArchive ? () => handleOperation(BulkOperations.Archive) : undefined}
          onDelete={!hideDelete ? () => handleOperation(BulkOperations.Delete) : undefined}
          onBulk={!hideBulkActions ? handleBulk : undefined}
          onSort={!!onSort ? onSort : () => {}}
        />
      )}
      {!loading && !!listIndexHeader && <Box className={classes.listIndex}>{listIndexHeader}</Box>}
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
