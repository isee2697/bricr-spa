import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { FormSection } from 'ui/organisms';
import { DocumentFormProps } from '../DocumentListOfCaseCommon.types';
import {
  Box,
  Checkbox,
  IconButton,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useStyles } from '../DocumentListOfCaseCommon.styles';
import { DocumentOutsideItem, DocumentOutsideItemState } from '../../DocumentListOfCase.types';

export function DocumentForm({ initOpened, card, onChangeItemState }: DocumentFormProps) {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();

  const handleChangeItemState = (updateItem: DocumentOutsideItem, state: DocumentOutsideItemState) => {
    if (onChangeItemState) {
      onChangeItemState(card?.id as number, updateItem.id, state);
    }
  };

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
              {card?.items?.map((item, index) => (
                <TableRow key={index} className={classes.tableRow}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell padding="none">
                    <Typography variant="h3" className={classes.mediumText}>
                      {item.description}
                    </Typography>
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Radio
                      name={`outsideOption${index}`}
                      color="primary"
                      checked={item.state === DocumentOutsideItemState.StaysBehind}
                      onChange={() => editing && handleChangeItemState(item, DocumentOutsideItemState.StaysBehind)}
                    />
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Radio
                      name={`outsideOption${index}`}
                      color="primary"
                      checked={item.state === DocumentOutsideItemState.GoesWith}
                      onChange={() => editing && handleChangeItemState(item, DocumentOutsideItemState.GoesWith)}
                    />
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Radio
                      name={`outsideOption${index}`}
                      color="primary"
                      checked={item.state === DocumentOutsideItemState.ForTakeover}
                      onChange={() => editing && handleChangeItemState(item, DocumentOutsideItemState.ForTakeover)}
                    />
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Radio
                      name={`outsideOption${index}`}
                      color="primary"
                      checked={item.state === DocumentOutsideItemState.Nvt}
                      onChange={() => editing && handleChangeItemState(item, DocumentOutsideItemState.Nvt)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" variant="rounded">
                      <MenuIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </FormSection>
  );
}
