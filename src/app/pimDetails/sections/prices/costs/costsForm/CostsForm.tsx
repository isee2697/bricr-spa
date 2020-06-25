import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Grid } from 'ui/atoms';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { CostPaymentFrequency } from 'api/types';

import { CostSection } from './costSection/CostSection';
import { FormProps } from './CostsForm.types';
import { useStyles } from './CostsForm.styles';

export const CostsForm = ({ cost, editing, onSave }: FormProps) => {
  const { formatMessage } = useLocale();
  const styles = useStyles();

  const vatOptions = [21, 9, 0].map(value => ({
    label: formatMessage({ id: 'pim_details.prices.costs.vat_percentage_option' }, { vat: value }),
    value: value,
  }));

  const paymentFrequency = [CostPaymentFrequency.Monthly, CostPaymentFrequency.Yearly].map(value => ({
    label: formatMessage({ id: `dictionaries.prices.frequency.${value}` }),
    value: value,
  }));

  const getTitle = () => {
    const title = cost.type;

    if (cost.name) {
      return `${title} (${cost.name})`;
    }

    return title;
  };

  return (
    <AutosaveForm initialValues={cost} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
      <Box>
        <FormSubSection title={getTitle()} onOptionsClick={() => {}} initiallyOpened={false}>
          <Box pb={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} className={styles.sections}>
                <CostSection
                  title={formatMessage({ id: 'pim_details.prices.costs.payments' })}
                  subtitle={formatMessage({ id: 'pim_details.prices.costs.set_price' })}
                  costLabel={
                    <>{formatMessage({ id: 'pim_details.prices.costs.service_costs' }, { name: cost.type })}</>
                  }
                  costName="serviceCosts"
                  selectLabelId="pim_details.prices.costs.payment_frequency"
                  selectName="paymentsFrequency"
                  options={paymentFrequency}
                  disabled={!editing}
                />
                <CostSection
                  title={formatMessage({ id: 'pim_details.prices.costs.vats' })}
                  subtitle={formatMessage({ id: 'pim_details.prices.costs.set_price' })}
                  costLabel="pim_details.prices.costs.vat_costs"
                  costName="vatTaxedServiceCosts"
                  selectLabelId="pim_details.prices.costs.vat_percentage"
                  selectName="vatPercentage"
                  options={vatOptions}
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={12}>
                <GenericField
                  id="notes"
                  name="notes"
                  label="pim_details.prices.costs.notes"
                  placeholder="pim_details.prices.costs.notes_placeholder"
                  size="medium"
                  margin="none"
                  disabled={!editing}
                />
              </Grid>
            </Grid>
          </Box>
        </FormSubSection>
      </Box>
    </AutosaveForm>
  );
};
