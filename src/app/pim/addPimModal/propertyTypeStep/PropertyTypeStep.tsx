import React from 'react';
import { useTheme, DialogActions } from '@material-ui/core';
import { Field, useFormState } from 'react-final-form';

import { Grid, DialogContent, Avatar, Box } from 'ui/atoms';
import { SelectCard, SubmitButton } from 'ui/molecules';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { NewConstructionIcon } from 'ui/atoms/icons/newConstruction/NewConstructionIcon';
import { ComplexBuildingIcon } from 'ui/atoms/icons/complexBuilding/ComplexBuildingIcon';
import { useLocale } from 'hooks';
import { requireValidator } from 'form/validators';
import { AddPimStepProps } from '../AddPimModal.types';
import { PropertyType } from 'api/types';

import { useStyles } from './PropertyTypeStep.styles';

export const PropertyTypeStep = ({ onNext }: AddPimStepProps) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });

  const CATEGORIES = [
    {
      type: 'Property',
      translation: 'property',
      icon: <BuildingIcon color="inherit" />,
      color: theme.palette.red,
      disabled: false,
    },
    {
      type: 'Project',
      translation: 'new_construction_project',
      icon: <NewConstructionIcon color="inherit" />,
      color: theme.palette.green,
      disabled: true,
    },
    {
      type: 'Complex',
      translation: 'complex_buildings',
      icon: <ComplexBuildingIcon color="inherit" />,
      color: theme.palette.purple,
      disabled: true,
    },
  ];

  return (
    <Field name="category" validate={requireValidator}>
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2}>
              {CATEGORIES.filter(c => !input.value || input.value === c.type).map(c => (
                <Grid xs={12} item key={c.type}>
                  <SelectCard
                    className={classes.selectCard}
                    fullWidth
                    withButton
                    onClick={() => {
                      if (input.value === c.type) {
                        input.onChange('');
                      } else {
                        input.onChange(c.type);
                      }
                    }}
                    disabled={c.disabled}
                    selected={input.value === c.type}
                  >
                    <Avatar variant="rounded" bgcolor={c.color.light}>
                      <Box color={c.color.main}>{c.icon}</Box>
                    </Avatar>
                    {formatMessage({ id: `property_categories.${c.translation}` })}
                  </SelectCard>
                </Grid>
              ))}
            </Grid>
            {input.value && (
              <Field name="propertyType" validate={requireValidator}>
                {({ input: category }) => (
                  <Box mt={2}>
                    <Grid container justify="center" spacing={1}>
                      {Object.keys(PropertyType).map(p => (
                        <Grid item xs={6} md={3} key={p}>
                          <SelectCard
                            disabled={p !== PropertyType.House}
                            selected={category.value === p}
                            centered
                            onClick={() => category.onChange(p)}
                          >
                            {formatMessage({ id: `property_types.${p}` })}
                          </SelectCard>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Field>
            )}
          </DialogContent>
          {input.value && (
            <DialogActions>
              <SubmitButton
                disabled={!values.propertyType}
                size="large"
                color="primary"
                variant="contained"
                onClick={onNext}
              >
                {formatMessage({ id: 'common.next' })}
              </SubmitButton>
            </DialogActions>
          )}
        </>
      )}
    </Field>
  );
};
