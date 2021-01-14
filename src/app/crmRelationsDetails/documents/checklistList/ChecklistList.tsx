import React from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';

import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { AddIcon, CheckIcon, CloseIcon, ManageIcon, MenuIcon, ShareIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { AddChecklistItemModal } from '../addChecklistItemModal/AddChecklistItemModal';

import { ChecklistListProps } from './ChecklistList.types';
import { useStyles } from './ChecklistList.styles';

export const ChecklistList = ({
  onSidebarOpen,
  isSidebarVisible,
  path,
  list,
  onAddNewChecklistItem,
}: ChecklistListProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();
  const { push } = useHistory();

  const { title, type } = list;
  const sortOptions = ['last_edited'];

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded" className={classes.rotatedButton} onClick={() => push(path)}>
              <ShareIcon />
            </IconButton>
          </Box>
        }
      />
      <Page title={title} titleActions={<></>}>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'crm.details.documents.checklist.list.title' }, { type })}
              action={
                <Box display="flex" alignItems="center">
                  <IconButton
                    size="small"
                    variant="circle"
                    color="primary"
                    onClick={() => open('add-document-checklist-item')}
                  >
                    <AddIcon color="inherit" />
                  </IconButton>
                  <Box ml={2} />
                  <IconButton size="small" variant="roundedContained">
                    <ManageIcon color="inherit" />
                  </IconButton>
                </Box>
              }
            />
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label={formatMessage({ id: 'common.select_all' })}
                />
                <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
                  {sortOptions.map(option => (
                    <MenuItem key={option} value={option}>
                      {formatMessage({ id: `crm.details.timeline.sort_options.${option}` })}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Table className={classes.checklistTable}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.noBorder} />
                    <TableCell className={classes.noBorder}>
                      <Box mt={2} />
                      <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'crm.details.documents.checklist.list.type_of_document' })}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.noBorder}>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {list.items.filter(item => item.isUploaded).length}/{list.items.length}
                      </Typography>
                      <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'crm.details.documents.checklist.list.uploaded' })}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.noBorder}>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {list.items.filter(item => item.isAccepted).length}/{list.items.length}
                      </Typography>
                      <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'crm.details.documents.checklist.list.accepted' })}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.noBorder}>
                      <Box mt={2} />
                      <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'crm.details.documents.checklist.list.condition' })}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.noBorder}>
                      <Box mt={2} />
                      <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'crm.details.documents.checklist.list.settings' })}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.items.map(item => (
                    <TableRow onClick={() => push(`${path}/${list.id}/${item.id}`)}>
                      <TableCell padding="checkbox" className={classes.noBorder}>
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell className={classes.borderLeft}>
                        <Typography variant="h5" className={classes.fontWeightBold}>
                          {formatMessage({ id: `dictionaries.type_of_document.${item.type}` })}
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.borderMiddle}>
                        {!item.isUploaded && (
                          <Box display="flex" alignItems="center">
                            <CloseIcon color="error" className={classes.deleteIcon} />
                          </Box>
                        )}
                        {item.isUploaded && (
                          <Box display="flex" alignItems="center">
                            <CheckIcon color="action" className={classes.checkIcon} />
                            <Box ml={1} />
                            <Typography variant="h6" color="textSecondary">
                              {item.uploadedAt?.toLocaleString(DateTime.DATE_SHORT)}
                            </Typography>
                          </Box>
                        )}
                      </TableCell>
                      <TableCell className={classes.borderMiddle}>
                        {!item.isAccepted && (
                          <Box display="flex" alignItems="center">
                            <CloseIcon color="error" className={classes.deleteIcon} />
                          </Box>
                        )}
                        {item.isAccepted && (
                          <Box display="flex" alignItems="center">
                            <CheckIcon color="action" className={classes.checkIcon} />
                            <Box ml={1} />
                            <Typography variant="h6" color="textSecondary">
                              {item.acceptedAt?.toLocaleString(DateTime.DATE_SHORT)}
                            </Typography>
                          </Box>
                        )}
                      </TableCell>
                      <TableCell className={classes.borderMiddle}>
                        <Chip
                          size="small"
                          variant="outlined"
                          label={formatMessage({
                            id: `dictionaries.document_condition.${item.condition}`,
                          })}
                          className={classes.chip}
                        />
                      </TableCell>
                      <TableCell className={classes.borderRight}>
                        <IconButton variant="roundedContained" size="small">
                          <MenuIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Page>
      <AddChecklistItemModal onAddNewChecklistItem={onAddNewChecklistItem} />
    </>
  );
};
