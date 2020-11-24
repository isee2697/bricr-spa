import React, { useState } from 'react';
import clsx from 'classnames';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from 'ui/atoms';
import { AddIcon, ArrowUpIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddLvzPropertyGroupItemModal } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal';
import { AddLvzPropertyGroupItemBody } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal.types';
import { InfoSection } from 'ui/molecules';

import { LvzPropertyGroupItem, LzvPropertyItemProps } from './LzvPropertyItem.types';
import { useStyles } from './LzvPropertyItem.styles';

export const LzvPropertyItem = ({ group }: LzvPropertyItemProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [lvzGroupItems, setLvzGroupItems] = useState<LvzPropertyGroupItem[]>([]);
  const classes = useStyles();
  const { open, close } = useModalDispatch();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { isOpen: isModalOpen } = useModalState('add-lvz-property-group-item');

  const { id, name } = group;

  const initialValues = {
    name,
  };

  const handleSave = async () => {
    return undefined;
  };

  const handleAddLvzGroupItem = async (body: AddLvzPropertyGroupItemBody) => {
    setLvzGroupItems([
      ...lvzGroupItems,
      {
        id: `${lvzGroupItems.length}`,
        name: body.name,
      },
    ]);

    close('add-lvz-property-group-item');

    return undefined;
  };

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={name}
          action={
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                label={formatMessage({ id: 'form_section.edit_mode' })}
                labelPlacement="start"
              />
              <Box ml={1} />
              <IconButton
                aria-label="add"
                color="primary"
                size="small"
                onClick={() => open('add-lvz-property-group-item')}
              >
                <AddIcon color="inherit" />
              </IconButton>
              <Box ml={1} />
              <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
              <Box ml={1} />
              <IconButton size="small" variant="roundedContained">
                <ArrowUpIcon />
              </IconButton>
              <Menu
                id={`lvz-property-item-${id}`}
                open={Boolean(menuEl)}
                onClose={onMenuClose}
                anchorEl={menuEl}
                placement="bottom-end"
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                  }}
                >
                  <ClockIcon />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'common.copy',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem
                  className={clsx(classes.menuItem, 'red')}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                  }}
                >
                  <DeleteIcon color="inherit" />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'common.delete',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          }
        />
        <CardContent>
          <AutosaveForm onSave={handleSave} initialValues={initialValues}>
            <Grid item xs={12}>
              <GenericField
                fullWidth
                name="name"
                label={formatMessage({ id: 'settings.documents.lvz_property.item.name_lvz_group' })}
                placeholder={formatMessage({ id: 'settings.documents.lvz_property.item.name_lvz_group.placeholder' })}
                disabled={!isEditing}
              />
            </Grid>
          </AutosaveForm>
          {lvzGroupItems.length === 0 && (
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.item.empty.title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.item.empty.description' })}
              </Typography>
            </InfoSection>
          )}
          {lvzGroupItems.map((item, index) => (
            <Box
              mt={3}
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.itemRow}
            >
              <Box display="flex">
                <Typography variant="h4" color="textSecondary" className={classes.counter}>
                  {index + 1}
                </Typography>
                <Box ml={0.5} />
                <Typography variant="h3">{item.name}</Typography>
              </Box>
              <IconButton size="small" variant="rounded">
                <MenuIcon />
              </IconButton>
            </Box>
          ))}
        </CardContent>
      </Card>
      <AddLvzPropertyGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-lvz-property-group-item')}
        onSubmit={handleAddLvzGroupItem}
      />
    </>
  );
};
