import React from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import { useLocale, useModalDispatch } from 'hooks';
import { FormSection } from 'ui/organisms';
import { DocumentFormProps } from '../DocumentListOfCaseCommon.types';
import { Box, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography } from 'ui/atoms';
import { useStyles } from '../DocumentListOfCaseCommon.styles';

import { DocumentFormRow } from './DocumentFormRow';
import { DocumentFormRowDragObject } from './DocumentFormRowDragObject';

export function DocumentForm({ initOpened, card, onChangeItemState }: DocumentFormProps) {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();

  return (
    <FormSection
      title={card?.name}
      isExpandable
      isInitExpanded={initOpened}
      onAdd={() => open('add-lvz-item', { id: card?.id })}
      onOptionsClick={() => {}}
    >
      {editing => (
        <>
          <Box display="flex" alignItems="center" className={classes.tableTopHeader}>
            <Checkbox color="primary" />
            <Typography variant="h5" className={classes.mediumText}>
              {formatMessage({ id: 'common.select_all' })}
            </Typography>
          </Box>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                <TableCell padding="none">
                  <Typography variant="h5" className={classes.mediumText}>
                    {formatMessage({ id: 'pim_details.specification.outside.description' })}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.mediumText}>
                    {formatMessage({ id: 'pim_details.specification.outside.stays_behind' })}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.mediumText}>
                    {formatMessage({ id: 'pim_details.specification.outside.goes_with' })}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.mediumText}>
                    {formatMessage({ id: 'pim_details.specification.outside.for_takeover' })}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5" className={classes.mediumText}>
                    {formatMessage({ id: 'pim_details.specification.outside.nvt' })}
                  </Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
                <DocumentFormRowDragObject />
                {card?.items?.map((item, index) => (
                  <DocumentFormRow item={item} editing={editing} />
                ))}
              </DndProvider>
            </TableBody>
          </Table>
        </>
      )}
    </FormSection>
  );
}
