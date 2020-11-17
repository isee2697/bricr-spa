import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from 'ui/atoms';
import { CreateWizardStepProps } from '../CreateWizard.types';
import { AutosaveForm } from 'ui/organisms';
import { CriteriaOrder } from 'api/types';

import { useStyles } from './SortingStep.styles';
import { SortCriteriaItem } from './SortCriteriaItem';

export const SortingStep = ({ onNextStep, onPreviousStep }: CreateWizardStepProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isUsingSalesSettings, setIsUsingSalesSettings] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [sortCriteriaItems, setSortCriteriaItems] = useState(Object.keys(CriteriaOrder));

  const handleSave = async () => {
    return undefined;
  };

  const handleUpdateSortCriteriaOrder = (value: string, position: number) => {
    const currentPosition = sortCriteriaItems.findIndex(item => item === value);
    const items = [...sortCriteriaItems];
    items.splice(currentPosition, 1);
    items.splice(position, 0, value);
    setSortCriteriaItems([...items]);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.allocate_results.sorting.title' })}</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isUsingSalesSettings}
                  onChange={() => setIsUsingSalesSettings(!isUsingSalesSettings)}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'pim_details.allocate_results.sorting.use_sales_settings' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
          </Box>
          <Box>
            <AutosaveForm onSave={handleSave}>
              <Grid item xs={12}>
                <Box mt={4}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'pim_details.allocate_results.sorting.sort_criteria_order',
                      })}
                    </Typography>
                    <Typography variant="h5" className={classes.gray}>
                      {formatMessage({
                        id: 'pim_details.allocate_results.sorting.drag_drop_in_preferred_order',
                      })}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <DndProvider backend={HTML5Backend}>
                      {sortCriteriaItems.map((sortCriteria, index) => (
                        <SortCriteriaItem
                          sortCriteria={sortCriteria}
                          index={index}
                          disabled={!isEditing}
                          onUpdateItemOrder={handleUpdateSortCriteriaOrder}
                        />
                      ))}
                    </DndProvider>
                  </Box>
                </Box>
              </Grid>
            </AutosaveForm>
          </Box>
        </CardContent>
      </Card>
      <Box mt={3} display="flex" justifyContent="space-between" width="100%" onClick={onPreviousStep}>
        <Button variant="outlined" color="primary">
          {formatMessage({ id: 'pim_details.allocate_results.sorting.go_to_conditions' })}
        </Button>
        <Button variant="outlined" color="primary" onClick={onNextStep}>
          {formatMessage({ id: 'pim_details.allocate_results.sorting.go_to_results' })}
        </Button>
      </Box>
    </>
  );
};
