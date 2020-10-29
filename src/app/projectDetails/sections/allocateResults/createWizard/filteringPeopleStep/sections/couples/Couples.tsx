import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { ArrowDownIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../../FilteringPeopleStep.styles';
import { CriteriaOrder } from 'api/types';

export const Couples = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const sortCriterias = Object.keys(CriteriaOrder).map(key => ({
    label: formatMessage({ id: `dictionaries.criteria_order.${key}` }),
    value: key,
  }));

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'project_details.allocate_results.couples.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton variant="roundedContained" aria-label="open" size="small" onClick={() => {}}>
              <ArrowDownIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
          <Grid item xs={12}>
            <Box>
              <CheckboxField
                name="determineCoupleUsedToAssign"
                label={formatMessage({
                  id: 'project_details.allocate_results.filtering_people.determine_which_of_a_couple_you_use_to_assign',
                })}
              />
            </Box>
            <Box className={classes.marginTopFour}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_people.sort_criteria_order',
                  })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: 'project_details.allocate_results.filtering_people.drag_drop_in_preferred_order',
                  })}
                </Typography>
              </Box>
              <Box mt={2}>
                {sortCriterias.map((sortCriteria, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={sortCriterias.length - 1 === index ? 0 : 2}>
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
      </CardContent>
    </Card>
  );
};
