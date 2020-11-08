import React from 'react';
import { DateTime } from 'luxon';

import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Button, Table, TableCell, TableBody, TableHead, TableRow, Typography } from 'ui/atoms';
import { TiaraMessageType, TiaraMutationStatusType } from 'api/types';
import { InfoSection } from 'ui/molecules';

import { TiaraProps } from './Tiara.types';

export const Tiara = ({ mutations, sendMessage }: TiaraProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb urlBase={baseUrl} to="/tiara" title={formatMessage({ id: 'tiara.title' })} />
      {mutations.length === 0 && (
        <InfoSection>
          <Typography variant="h3">
            {formatMessage({
              id: 'tiara.empty_title',
            })}
          </Typography>
          <Typography variant="h3">
            {formatMessage({
              id: 'tiara.empty_description',
            })}
          </Typography>
        </InfoSection>
      )}
      {mutations.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{formatMessage({ id: `tiara.date` })}</TableCell>
              <TableCell>{formatMessage({ id: `tiara.message_type` })}</TableCell>
              <TableCell>{formatMessage({ id: `tiara.status` })}</TableCell>
              <TableCell>{formatMessage({ id: `tiara.errors` })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mutations.map(({ date, messageType, status, errors }) => (
              <TableRow>
                <TableCell>{DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)}</TableCell>
                <TableCell>{formatMessage({ id: `dictionaries.tiara.message_type.${messageType}` })}</TableCell>
                <TableCell>{formatMessage({ id: `dictionaries.tiara.status.${status}` })}</TableCell>
                <TableCell>
                  {errors?.map(error => (
                    <div>{error}</div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {mutations?.some(
        ({ messageType, status }) =>
          messageType === TiaraMessageType.Aanmelden && status === TiaraMutationStatusType.Success,
      ) ? (
        <Button onClick={() => sendMessage(TiaraMessageType.Wijzigen)}>
          {formatMessage({ id: 'dictionaries.tiara.message_type.Wijzigen' })}
        </Button>
      ) : (
        <Button onClick={() => sendMessage(TiaraMessageType.Aanmelden)}>
          {formatMessage({ id: 'dictionaries.tiara.message_type.Aanmelden' })}
        </Button>
      )}
    </>
  );
};
