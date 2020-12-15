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
  Switch,
} from 'ui/atoms';
import { Header } from '../header/Header';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { AddIcon, EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';

import { CostItem, CostsProps, CostType, CostVatCondition } from './Costs.types';

export const Costs = ({ isSidebarVisible, onSidebarOpen }: CostsProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const costItems: CostItem[] = [
    {
      id: '0001',
      title: 'Start-up',
    },
  ];

  const costTypes: RadioDataType[] = Object.keys(CostType).map(key => ({
    value: key,
    label: formatMessage({ id: `dictionaries.type_of_cost.${key}` }),
    icon: <SquareIcon />,
  }));

  const handleSave = async () => {
    return undefined;
  };

  const vatOptions = [21, 9, 0].map(value => ({
    label: formatMessage({ id: 'sales_details.costs.vat_percentage_option' }, { vat: value }),
    value: value,
  }));

  const vatConditions = Object.keys(CostVatCondition).map(key => ({
    label: formatMessage({ id: `dictionaries.vat_condition.${key}` }),
    value: key,
  }));

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.costs.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales_details.costs.title' })}
              action={
                <Box display="flex" alignItems="center">
                  <FormControlLabel
                    control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                    label={formatMessage({ id: 'form_section.edit_mode' })}
                    labelPlacement="start"
                  />
                  <Box ml={3} />
                  <IconButton size="small" variant="circle" color="primary">
                    <AddIcon />
                  </IconButton>
                </Box>
              }
            />
            <CardContent>
              <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
                {costItems.map((costItem, index) => (
                  <FormSubSection counter={index + 1} title={costItem.title} onOptionsClick={() => {}}>
                    <FormSubSectionHeader
                      title={formatMessage({ id: 'sales_details.costs.type_of_cost' })}
                      subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
                      noBorder
                    />
                    <RadioGroupField name="costType" options={costTypes} disabled={!isEditing} />
                    <Box mt={2} />
                    <FormSubSectionHeader
                      title={formatMessage({ id: 'sales_details.costs.vat' })}
                      subtitle={formatMessage({ id: 'sales_details.costs.set_the_price_and_choose_one_option' })}
                      noBorder
                    />
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <GenericField
                          name="vatTaxedCosts"
                          label={formatMessage({ id: 'sales_details.costs.vat_taxed_costs' })}
                          InputProps={{ endAdornment: <EuroIcon /> }}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Box mt={2}>
                          <DropdownField
                            name="vatPercentage"
                            items={vatOptions}
                            label="sales_details.costs.vat_percentage"
                            placeholder="common.select_placeholder"
                            margin="none"
                            disabled={!isEditing}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box mt={2}>
                          <DropdownField
                            name="vatCondition"
                            items={vatConditions}
                            label="sales_details.costs.vat_conditions"
                            placeholder="common.select_placeholder"
                            margin="none"
                            disabled={!isEditing}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box mt={2}>
                      <GenericField
                        name="costCenter"
                        label={formatMessage({ id: 'sales_details.costs.different_cost_center' })}
                        disabled={!isEditing}
                      />
                    </Box>
                    <Box mt={2}>
                      <GenericField
                        name="notes"
                        label={formatMessage({ id: 'sales_details.costs.notes.placeholder' })}
                        disabled={!isEditing}
                      />
                    </Box>
                  </FormSubSection>
                ))}
              </AutosaveForm>
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
