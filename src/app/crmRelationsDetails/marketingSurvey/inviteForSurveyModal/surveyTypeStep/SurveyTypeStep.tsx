import { DialogActions, useTheme } from '@material-ui/core';
import React from 'react';
import { Field, useFormState } from 'react-final-form';

import { requireValidator } from 'form/validators';
import { Avatar, DialogContent, Grid, Box } from 'ui/atoms';
import { BuildingIcon, ComplexBuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { SurveyCategory, SurveyType } from '../../MarketingSurvey.types';
import { InviteForSurveyStepProps } from '../InviteForSurveyModal.types';
import { SelectCard, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';

import { useStyles } from './SurveyTypeStep.styles';

export const SurveyTypeStep = ({ onNext, options }: InviteForSurveyStepProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });

  const SurveyCategories = [
    {
      type: SurveyCategory.Nps,
      translation: 'survey_type',
      icon: <BuildingIcon color="inherit" />,
      color: theme.palette.red,
      disabled: false,
    },
    {
      type: SurveyCategory.Viewing,
      translation: 'survey_type',
      icon: <NewConstructionIcon color="inherit" />,
      color: theme.palette.green,
      disabled: false,
    },
    {
      type: SurveyCategory.Process,
      translation: 'survey_type',
      icon: <ComplexBuildingIcon color="inherit" />,
      color: theme.palette.purple,
      disabled: false,
    },
  ];

  const getTypes = (): { label: string; value: string }[] => {
    const category = values.category;

    if (category === SurveyCategory.Nps) {
      if (options?.isLinkedProperty) {
        return [SurveyType.Branding].map(p => ({
          label: `dictionaries.survey_type.${p}`,
          value: p,
        }));
      }

      const types =
        options?.availableSurveyTypes && options.availableSurveyTypes.length > 1
          ? options.availableSurveyTypes
          : Object.values(SurveyType);

      return types.map(p => ({ label: `dictionaries.survey_types.${p}`, value: p }));
    } else if (category === SurveyCategory.Viewing) {
      return [];
    }

    return [];
  };

  return (
    <Field name="category" validate={requireValidator}>
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2}>
              {SurveyCategories.filter(c => !input.value || input.value === c.type).map(c => (
                <Grid xs={12} item key={c.type}>
                  <SelectCard
                    className={classes.selectCard}
                    fullWidth
                    withButton={!options?.disableChange}
                    onClick={() => {
                      if (!!options?.disableChange) {
                        return;
                      }

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
                    {formatMessage({ id: `dictionaries.survey_categories.${c.translation}` })}
                  </SelectCard>
                </Grid>
              ))}
            </Grid>
            {input.value && (
              <Field name="surveyType" validate={requireValidator}>
                {({ input: category }) => (
                  <Box mt={2}>
                    <Grid container justify="center" spacing={1}>
                      {getTypes().map(p => (
                        <Grid item xs={6} md={3} key={p.value}>
                          <SelectCard
                            selected={category.value === p.value}
                            centered
                            onClick={() => category.onChange(p.value)}
                          >
                            {formatMessage({ id: p.label })}
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
                disabled={!values.surveyType}
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
