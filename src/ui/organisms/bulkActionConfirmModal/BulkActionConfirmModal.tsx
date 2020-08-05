import React from 'react';

import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { ConfirmModal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { BulkActionConfigMapType, BulkActionConfirmModalProps, BulkActionType } from './BulkActionConfirmModal.types';

export const BulkActionConfirmModal = ({
  isOpened,
  onCancel,
  onConfirm,
  count,
  itemName,
  type,
}: BulkActionConfirmModalProps) => {
  const { formatMessage } = useLocale();
  const bulkActionConfigMap: Record<string, BulkActionConfigMapType> = {
    [BulkActionType.DELETE]: {
      messageLineFirst: formatMessage({ id: 'bulk_actions.delete.message_line_1' }, { count, name: itemName }),
      messageLineSecond: formatMessage({ id: 'bulk_actions.delete.message_line_2' }),
      cancelText: formatMessage({ id: 'bulk_actions.delete.cancel' }),
      confirmText: formatMessage({ id: 'bulk_actions.delete.confirm' }, { count }),
      title: formatMessage({ id: 'bulk_actions.delete.title' }, { count }),
      emoji: '😬',
      confirmButtonType: ConfirmButtonType.ERROR,
    },
    [BulkActionType.ARCHIVE]: {
      messageLineFirst: formatMessage({ id: 'bulk_actions.archive.message_line_1' }, { count, name: itemName }),
      messageLineSecond: undefined,
      cancelText: formatMessage({ id: 'bulk_actions.archive.cancel' }),
      confirmText: formatMessage({ id: 'bulk_actions.archive.confirm' }, { count }),
      title: formatMessage({ id: 'bulk_actions.archive.title' }, { count }),
      emoji: '🗃',
      confirmButtonType: ConfirmButtonType.INFO,
    },
  };

  return <ConfirmModal isOpened={isOpened} onCancel={onCancel} onConfirm={onConfirm} {...bulkActionConfigMap[type]} />;
};
