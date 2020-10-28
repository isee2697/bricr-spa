import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, FormControlLabel, Grid, Switch } from 'ui/atoms';

import { useStyles } from './Extras.styles';
import { ExtrasColumn } from './ExtrasColumn';
import { ExtrasColumnItems, ExtrasItemStatus, ExtrasItemType } from './Extras.types';

export const Extras = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [columnItems, setColumnItems] = useState<ExtrasColumnItems>({
    [ExtrasItemStatus.Requires]: Object.values(ExtrasItemType),
    [ExtrasItemStatus.Desirable]: [],
    [ExtrasItemStatus.NotSignificant]: [],
  });

  const handleUpdateExtraStatus = (item: ExtrasItemType, status: ExtrasItemStatus) => {
    setColumnItems({
      [ExtrasItemStatus.Requires]: [
        ...columnItems[ExtrasItemStatus.Requires].filter(columnItem => columnItem !== item),
        ...(status === ExtrasItemStatus.Requires ? [item] : []),
      ],
      [ExtrasItemStatus.Desirable]: [
        ...columnItems[ExtrasItemStatus.Desirable].filter(columnItem => columnItem !== item),
        ...(status === ExtrasItemStatus.Desirable ? [item] : []),
      ],
      [ExtrasItemStatus.NotSignificant]: [
        ...columnItems[ExtrasItemStatus.NotSignificant].filter(columnItem => columnItem !== item),
        ...(status === ExtrasItemStatus.NotSignificant ? [item] : []),
      ],
    });
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.extras.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
            className={classes.editSwitcher}
          />
        }
      />
      <CardContent>
        <DndProvider backend={HTML5Backend}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={ExtrasItemStatus.Requires}
                items={columnItems[ExtrasItemStatus.Requires]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={ExtrasItemStatus.Desirable}
                items={columnItems[ExtrasItemStatus.Desirable]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={ExtrasItemStatus.NotSignificant}
                items={columnItems[ExtrasItemStatus.NotSignificant]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
          </Grid>
        </DndProvider>
      </CardContent>
    </Card>
  );
};
