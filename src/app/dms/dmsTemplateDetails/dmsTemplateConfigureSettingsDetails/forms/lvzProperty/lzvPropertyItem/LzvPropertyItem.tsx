import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, ClockIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddLvzPropertyGroupItemModal } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal';
import { AddLvzPropertyGroupItemBody } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal.types';
import { InfoSection, ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { LvzPropertyGroupItem, LzvPropertyItemProps } from './LzvPropertyItem.types';
import { useStyles } from './LzvPropertyItem.styles';

export const LzvPropertyItem = ({ group }: LzvPropertyItemProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [lvzGroupItems, setLvzGroupItems] = useState<LvzPropertyGroupItem[]>([]);
  const classes = useStyles();
  const { open, close } = useModalDispatch();
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
              <Box ml={1.5} />
              <IconButton
                aria-label="add"
                color="primary"
                size="small"
                onClick={() => open('add-lvz-property-group-item')}
              >
                <AddIcon color="inherit" />
              </IconButton>
              <Box ml={1.5} />
              <ListOptionsMenu id={`lvz-property-item-${id}`} onDeleteClick={() => {}} hideEditButton>
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.clone',
                  })}
                  icon={<ClockIcon />}
                />
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.inactive',
                  })}
                  icon={<ClockIcon />}
                />
              </ListOptionsMenu>
              <Box ml={1.5} />
              <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </IconButton>
            </Box>
          }
        />
        {isExpanded ? (
          <CardContent>
            <AutosaveForm onSave={handleSave} initialValues={initialValues}>
              <Grid item xs={12}>
                <GenericField
                  fullWidth
                  name="name"
                  label={formatMessage({ id: 'dms.templates.lvz_property.item.name_lvz_group' })}
                  placeholder={formatMessage({ id: 'dms.templates.lvz_property.item.name_lvz_group.placeholder' })}
                  disabled={!isEditing}
                />
              </Grid>
            </AutosaveForm>
            {lvzGroupItems.length === 0 && (
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({ id: 'dms.templates.lvz_property.item.empty.title' })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: 'dms.templates.lvz_property.item.empty.description' })}
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
        ) : (
          <Box mt={2} />
        )}
      </Card>
      <AddLvzPropertyGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-lvz-property-group-item')}
        onSubmit={handleAddLvzGroupItem}
      />
    </>
  );
};
