import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'classnames';

import { useLocale, useModalDispatch } from 'hooks';
import { AddDocumentTypeModalContainer } from '../addDocumentTypeModal/AddDocumentTypeModalContainer';
import { LivingSituationDocumentTypeSubmitBody } from '../addDocumentTypeModal/AddDocumentTypeModal.types';
import { Page } from 'ui/templates';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Checkbox,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  Box,
} from 'ui/atoms';
import { AddIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { LivingSituationType } from '../baseChecklist/BaseChecklist.types';

import { DocumentCondition, DocumentDeliverer, DocumentItem } from './Checklist.types';
import { useStyles } from './Checklist.styles';

export const Checklist = () => {
  const classes = useStyles();
  const { open, close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const { type } = useParams<{ type: LivingSituationType }>();
  const [documentItems, setDocumentItems] = useState<DocumentItem[]>([]);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'archive',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  const handleSubmitDocumentType = async (value: LivingSituationDocumentTypeSubmitBody) => {
    close('add-living-situation-document-type');

    setDocumentItems([
      ...documentItems,
      {
        id: `${documentItems.length}`,
        type: value.type,
        deliveryBy: DocumentDeliverer.Broker,
        missingDocument: 3,
        condition: DocumentCondition.Mandatory,
      },
    ]);

    return undefined;
  };

  const headCells = [
    {
      id: 'type',
      label: formatMessage({ id: 'settings.checklist.type_of_document' }),
    },
    {
      id: 'deliverBy',
      label: formatMessage({ id: 'settings.checklist.deliver_by' }),
    },
    {
      id: 'missingDocuments',
      label: formatMessage({ id: 'settings.checklist.missing_documents' }),
    },
    {
      id: 'condition',
      label: formatMessage({ id: 'settings.checklist.condition' }),
    },
    {
      id: 'settings',
      disablePadding: true,
      label: formatMessage({ id: 'settings.checklist.settings' }),
    },
  ];

  return (
    <>
      <Page
        title={formatMessage({ id: 'settings.checklist.title' }, { type })}
        titleActions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={() => open('add-living-situation-document-type')}
          >
            {formatMessage({ id: 'settings.checklist.add_document_type' })}
          </Button>
        }
      >
        {documentItems.length === 0 && (
          <Card>
            <CardContent>
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'settings.checklist.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'settings.checklist.empty_description',
                  })}
                </Typography>
              </InfoSection>
            </CardContent>
          </Card>
        )}
        {documentItems.length > 0 && (
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    {headCells.map((headCell, index) => (
                      <TableCell key={index} className={clsx(classes.columnHeader)}>
                        <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                          {headCell.label}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documentItems.map((documentItem, index) => {
                    const labelId = `checklist-document-list-checkbox-${index}`;
                    const { id, type, deliveryBy, missingDocument, condition } = documentItem;

                    return (
                      <TableRow key={index} className={classes.row}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={checkedItems.includes(id)}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={event =>
                              event.target.checked
                                ? setCheckedItems([...checkedItems, id])
                                : setCheckedItems([...checkedItems.filter(item => item !== id)])
                            }
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {formatMessage({ id: `dictionaries.type_of_document.${type}` })}
                        </TableCell>
                        <TableCell>{formatMessage({ id: `dictionaries.deliver_by.${deliveryBy}` })}</TableCell>
                        <TableCell>
                          {formatMessage({ id: 'settings.checklist.missing_documents' }, { missingDocument })}
                        </TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            label={formatMessage({ id: `dictionaries.condition.${condition}` })}
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                            <MenuIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </Page>
      <AddDocumentTypeModalContainer
        onClose={() => close('add-living-situation-document-type')}
        onSubmit={handleSubmitDocumentType}
      />
      <Menu id="checklist-menu" open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        {actions.map((action, index) => (
          <MenuItem
            key={index}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `calendar.action.${action.value}`,
                })}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
