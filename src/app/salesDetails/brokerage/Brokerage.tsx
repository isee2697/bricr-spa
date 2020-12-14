import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  NavBreadcrumb,
  Radio,
  Switch,
} from 'ui/atoms';
import { Header } from '../header/Header';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { ArrowUpIcon, EuroIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { DropdownField, GenericField } from 'form/fields';

import { BrokerageProps } from './Brokerage.types';

export const Brokerage = ({ isSidebarVisible, onSidebarOpen }: BrokerageProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [brokerageType, setBrokerageType] = useState<'percentage' | 'fixedAmount'>();

  const handleSave = async () => {
    return undefined;
  };

  const vatOptions = [21, 9, 0].map(value => ({
    label: formatMessage({ id: 'sales_details.brokerage.vat_percentage_option' }, { vat: value }),
    value: value,
  }));

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.brokerage.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales_details.brokerage.title' })}
              action={
                <Box display="flex" alignItems="center">
                  <FormControlLabel
                    control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                    label={formatMessage({ id: 'form_section.edit_mode' })}
                    labelPlacement="start"
                  />
                  <Box ml={3} />
                  <IconButton size="small" variant="roundedContained" onClick={() => {}}>
                    <ArrowUpIcon />
                  </IconButton>
                </Box>
              }
            />
            <CardContent>
              <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <Radio
                          disabled={!isEditing}
                          checked={brokerageType === 'percentage'}
                          color="primary"
                          value="percentage"
                          onChange={() => setBrokerageType('percentage')}
                        />
                      }
                      label={formatMessage({ id: 'sales_details.brokerage.percentage' })}
                      name="brokerageType"
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <Radio
                          disabled={!isEditing}
                          checked={brokerageType === 'fixedAmount'}
                          color="primary"
                          value="fixedAmount"
                          onChange={() => setBrokerageType('fixedAmount')}
                        />
                      }
                      label={formatMessage({ id: 'sales_details.brokerage.fixedAmount' })}
                      name="brokerageType"
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="percentage"
                      disabled={!isEditing}
                      label={formatMessage({ id: 'common.percentage' })}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="fixedAmount"
                      disabled={!isEditing}
                      label={formatMessage({ id: 'common.fixed_amount' })}
                      InputProps={{ endAdornment: <EuroIcon /> }}
                    />
                  </Grid>
                </Grid>
                <Box mt={4} />
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <DropdownField
                      name="vatPercentage"
                      items={vatOptions}
                      label="sales_details.brokerage.vat_percentage"
                      placeholder="common.select_placeholder"
                      margin="none"
                      disabled={!isEditing}
                    />
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <GenericField
                      name="reservationRate"
                      disabled={!isEditing}
                      label={formatMessage({ id: 'sales_details.brokerage.reservation_rate' })}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="partialCommission"
                      disabled={!isEditing}
                      label={formatMessage({ id: 'sales_details.brokerage.partial_commission' })}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="bonusPercentage"
                      disabled={!isEditing}
                      label={formatMessage({ id: 'sales_details.brokerage.bonus_percentage' })}
                    />
                  </Grid>
                </Grid>
                <Box mt={2} />
                <GenericField
                  name="notes"
                  label="common.notes"
                  placeholder="sales_details.brokerage.extra_information.placeholder"
                  size="medium"
                  disabled={!isEditing}
                />
              </AutosaveForm>
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
