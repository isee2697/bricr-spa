import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, FormControlLabel, Grid, Switch, Typography } from 'ui/atoms';
import { CreateWizardStepProps } from '../CreateWizard.types';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField } from 'form/fields';
import { CriteriaOrder } from 'api/types';

import { useStyles } from './SortingStep.styles';

export const SortingStep = ({ onNextStep, onPreviousStep }: CreateWizardStepProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isUsingSalesSettings, setIsUsingSalesSettings] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const sortCriterias = Object.keys(CriteriaOrder).map(key => ({
    label: formatMessage({ id: `dictionaries.criteria_order.${key}` }),
    value: key,
  }));

  const handleSave = async () => {
    return undefined;
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="h2">
              {formatMessage({ id: 'project_details.allocate_results.sorting.title' })}
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isUsingSalesSettings}
                  onChange={() => setIsUsingSalesSettings(!isUsingSalesSettings)}
                  color="primary"
                />
              }
              label={formatMessage({ id: 'project_details.allocate_results.sorting.use_sales_settings' })}
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
                        id: 'project_details.allocate_results.sorting.sort_criteria_order',
                      })}
                    </Typography>
                    <Typography variant="h5" className={classes.gray}>
                      {formatMessage({
                        id: 'project_details.allocate_results.sorting.drag_drop_in_preferred_order',
                      })}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    {sortCriterias.map((sortCriteria, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        mb={sortCriterias.length - 1 === index ? 0 : 2}
                      >
                        <Typography variant="h4" className={classes.criteriaRowIndex}>
                          {index + 1}
                        </Typography>
                        <Box width="100%" ml={2}>
                          <CheckboxField
                            labelPlacement="start"
                            name="sortCriteriaOrder"
                            label={sortCriteria.label}
                            value={sortCriteria.value}
                            containerClassName={classes.criteriaRow}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </AutosaveForm>
          </Box>
        </CardContent>
      </Card>
      <Box mt={3} display="flex" justifyContent="space-between" width="100%">
        <Button variant="outlined" color="primary" onClick={onPreviousStep}>
          {formatMessage({ id: 'project_details.allocate_results.steps.go_to_step3' })}
        </Button>
        <Button variant="outlined" color="primary" onClick={onNextStep}>
          {formatMessage({ id: 'project_details.allocate_results.steps.go_to_results' })}
        </Button>
      </Box>
    </>
  );
};
