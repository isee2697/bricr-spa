import { TableRow, TableCell, Table } from '@material-ui/core';
import { DateTime } from 'luxon';
import React from 'react';

import { useLocale } from 'hooks';

import { TiaraMutationUpdatedNotificationsGroupItemProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';

export const TiaraMutationUpdatedNotificationsGroupItem = ({
  description,
  date,
  messageType,
  status,
  errors,
}: TiaraMutationUpdatedNotificationsGroupItemProps) => {
  const { formatMessage } = useLocale();

  return (
    <Table>
      <TableRow>
        <TableCell>{description}</TableCell>
        <TableCell>{DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)}</TableCell>
        <TableCell>{formatMessage({ id: `dictionaries.tiara.message_type.${messageType}` })}</TableCell>
        <TableCell>{formatMessage({ id: `dictionaries.tiara.status.${status}` })}</TableCell>
        <TableCell>
          {errors?.map(error => (
            <div>{error}</div>
          ))}
        </TableCell>
      </TableRow>
    </Table>
  );
};
