import React, { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Typography,
} from 'ui/atoms';
import { CreateWizardStepProps } from '../CreateWizard.types';
import { useLocale } from 'hooks';
import { ArrowDownIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField, GenericField } from 'form/fields';

export const ReservationsAndConditionsStep = ({ onNextStep, onPreviousStep }: CreateWizardStepProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'pim_details.allocate_results.filtering_people.title' })}
          action={
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                label={formatMessage({ id: 'form_section.edit_mode' })}
                labelPlacement="start"
              />
              <Box ml={3} />
              <IconButton variant="roundedContained" aria-label="open" size="small" onClick={() => {}}>
                <ArrowDownIcon color="inherit" />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          <AutosaveForm onSave={handleSave}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.additional_work',
                  })}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="additionalWorkHigherThan"
                      label={formatMessage({
                        id: 'pim_details.allocate_results.reservations_and_conditions.higher_than',
                      })}
                      placeholder={formatMessage({
                        id: 'pim_details.allocate_results.reservations_and_conditions.higher_than.placeholder',
                      })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.constructional_conditions',
                  })}
                </Typography>
                <CheckboxField
                  name="constructionalOnlyRelationsWithNoConditions"
                  label={formatMessage(
                    {
                      id: 'pim_details.allocate_results.reservations_and_conditions.only_relations_with_no_conditions',
                    },
                    {
                      strong: <b>{formatMessage({ id: 'common.no' })}</b>,
                    },
                  )}
                />
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id:
                      'pim_details.allocate_results.reservations_and_conditions.stuff_for_take_over_list_of_movable_property',
                  })}
                </Typography>
                <CheckboxField
                  name="onlyRelationsWantsToTakeSomethingOver"
                  label={formatMessage({
                    id:
                      'pim_details.allocate_results.reservations_and_conditions.only_relations_wants_to_take_something_over',
                  })}
                />
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.financial_conditions',
                  })}
                </Typography>
                <CheckboxField
                  name="financialOnlyRelationsWithNoConditions"
                  label={formatMessage(
                    {
                      id: 'pim_details.allocate_results.reservations_and_conditions.only_relations_with_no_conditions',
                    },
                    {
                      strong: <b>{formatMessage({ id: 'common.no' })}</b>,
                    },
                  )}
                />
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.bidding',
                  })}
                </Typography>
                <CheckboxField
                  name="onlyRelationsWithBiddingHigherThanAskingPrice"
                  label={formatMessage({
                    id:
                      'pim_details.allocate_results.reservations_and_conditions.only_relations_with_bidding_higher_than_asking_price',
                  })}
                />
                <Box ml={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <GenericField
                        name="percentage"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.reservations_and_conditions.percentage',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.reservations_and_conditions.percentage.placeholder',
                        })}
                        InputProps={{ endAdornment: <PercentIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <GenericField
                        name="bidding"
                        label={formatMessage({
                          id: 'pim_details.allocate_results.reservations_and_conditions.bidding',
                        })}
                        placeholder={formatMessage({
                          id: 'pim_details.allocate_results.reservations_and_conditions.bidding.placeholder',
                        })}
                        InputProps={{ endAdornment: <EuroIcon /> }}
                        disabled={!isEditing}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.equity_current_home',
                  })}
                </Typography>
                <CheckboxField
                  name="onlyRelationsWithNoConditions"
                  label={formatMessage({
                    id:
                      'pim_details.allocate_results.reservations_and_conditions.only_relations_with_equity_on_property',
                  })}
                />
              </Box>
              <Box mt={3}>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'pim_details.allocate_results.reservations_and_conditions.property_subject_to_mortgage',
                  })}
                </Typography>
                <CheckboxField
                  name="onlyRelationsWithNoConditions"
                  label={formatMessage(
                    {
                      id:
                        'pim_details.allocate_results.reservations_and_conditions.only_relations_with_no_subject_to_mortgage_on_property',
                    },
                    {
                      strong: <b>{formatMessage({ id: 'common.no' })}</b>,
                    },
                  )}
                />
              </Box>
            </Grid>
          </AutosaveForm>
        </CardContent>
      </Card>
      <Box mt={3} display="flex" justifyContent="space-between" width="100%" onClick={onPreviousStep}>
        <Button variant="outlined" color="primary">
          {formatMessage({ id: 'pim_details.allocate_results.filtering_people.go_to_filtering_people' })}
        </Button>
        <Button variant="outlined" color="primary" onClick={onNextStep}>
          {formatMessage({ id: 'pim_details.allocate_results.filtering_people.go_to_sorting' })}
        </Button>
      </Box>
    </>
  );
};
