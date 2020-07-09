import React from 'react';

import { CostPaymentFrequency } from 'api/types';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { EuroIcon } from 'ui/atoms/icons';
import { FormSubSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, DropdownField } from 'form/fields';

import { CostItemProps } from './CostItem.types';

const generateTitle = (title: string, name?: string) => {
  return name ? `${title} (${name})` : title;
};

export const CostItem = ({ cost, index, inEditMode }: CostItemProps) => {
  const { formatMessage } = useLocale();

  const paymentFrequencies = [CostPaymentFrequency.Monthly, CostPaymentFrequency.Yearly].map(value => ({
    label: formatMessage({ id: `dictionaries.prices.frequency.${value}` }),
    value,
  }));

  const vatOptions = [21, 9, 0].map(value => ({
    label: formatMessage({ id: 'pim_details.prices.costs.vat_percentage_option' }, { vat: value }),
    value: value,
  }));

  return (
    <FormSubSection
      title={generateTitle(formatMessage({ id: `dictionaries.prices.cost_type.${cost.type}` }), cost.name)}
      initiallyOpened={false}
      onOptionsClick={() => {}}
      counter={index}
    >
      <GenericField
        name={`${cost.type}.customName`}
        label="project_details.prices.costs.custom_name"
        placeholder="project_details.prices.costs.custom_name_placeholder"
        size="medium"
        margin="none"
        disabled={!inEditMode}
      />

      <Box mt={2} mb={1}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'project_details.prices.costs.rental_price' })}
          subtitle={formatMessage({ id: 'project_details.prices.costs.set_the_price_and_choose_the_option' })}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            name={`${cost.type}.rentalFrom`}
            label="project_details.prices.costs.service_costs_from"
            placeholder="common.big_price_placeholder"
            size="medium"
            type="number"
            InputProps={{
              endAdornment: <EuroIcon />,
            }}
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField
            name={`${cost.type}.rentalTill`}
            label="project_details.prices.costs.service_costs_till"
            placeholder="common.big_price_placeholder"
            size="medium"
            type="number"
            InputProps={{
              endAdornment: <EuroIcon />,
            }}
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={4}>
          <DropdownField
            name={`${cost.type}.paymentFrequency`}
            items={paymentFrequencies}
            label="project_details.prices.costs.payments_frequency"
            placeholder="common.select_placeholder"
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
      </Grid>

      <Box mt={2} mb={1}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'project_details.prices.costs.vat' })}
          subtitle={formatMessage({ id: 'project_details.prices.costs.set_the_price_and_choose_the_option' })}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            name={`${cost.type}.vatFrom`}
            label="project_details.prices.costs.vat_costs_from"
            placeholder="common.big_price_placeholder"
            size="medium"
            type="number"
            InputProps={{
              endAdornment: <EuroIcon />,
            }}
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField
            name={`${cost.type}.vatTill`}
            label="project_details.prices.costs.vat_costs_till"
            placeholder="common.big_price_placeholder"
            size="medium"
            type="number"
            InputProps={{
              endAdornment: <EuroIcon />,
            }}
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
        <Grid item xs={4}>
          <DropdownField
            name={`${cost.type}.vatPercentage`}
            items={vatOptions}
            label="project_details.prices.costs.vat_percentage"
            placeholder="common.select_placeholder"
            margin="none"
            disabled={!inEditMode}
          />
        </Grid>
      </Grid>

      <Box mt={1} mb={2}>
        <GenericField
          name={`${cost.type}.notes`}
          label="common.notes"
          placeholder="project_details.prices.costs.information_about_costs_placeholder"
          size="medium"
          disabled={!inEditMode}
        />
      </Box>
    </FormSubSection>
  );
};
