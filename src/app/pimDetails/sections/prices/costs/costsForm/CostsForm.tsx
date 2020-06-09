import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Collapse, Grid } from 'ui/atoms';
import { SubSectionHeader } from 'ui/molecules';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';

import { CostSection } from './costSection/CostSection';
import { CostPaymentFrequency, FormProps } from './CostsForm.types';
import { useStyles } from './CostsForm.styles';

export const CostsForm = ({ cost, editing, onSave }: FormProps) => {
  const { formatMessage } = useLocale();
  const styles = useStyles();
  const [isToggled, setToggled] = useState(false);

  const vatOptions = [21, 9, 0].map(value => ({
    label: formatMessage({ id: 'pim_details.prices.costs.vat_percentage_option' }, { vat: value }),
    value: (value / 100).toString(),
  }));

  const paymentFrequency = [CostPaymentFrequency.Monthly, CostPaymentFrequency.Yearly].map(value => ({
    label: formatMessage({ id: `pim_details.prices.costs.frequency_${value}` }),
    value: value,
  }));

  return (
    <AutosaveForm initialValues={{}} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
      <Box>
        <SubSectionHeader
          toggled={isToggled}
          onToggleClick={() => {
            setToggled(t => !t);
          }}
          onOptionsClick={() => {}}
        >
          {cost.title}
        </SubSectionHeader>

        <Collapse style={{ width: '100%' }} in={isToggled} timeout="auto" unmountOnExit>
          <Grid container spacing={4}>
            <Grid item xs={12} className={styles.sections}>
              <CostSection
                title={formatMessage({ id: 'pim_details.prices.costs.payments' })}
                subtitle={formatMessage({ id: 'pim_details.prices.costs.set_price' })}
                costLabel={formatMessage({ id: 'pim_details.prices.costs.service_costs' }, { name: cost.type })}
                costName="serviceCosts"
                selectLabelId="pim_details.prices.costs.payment_frequency"
                selectName="paymentsFrequency"
                options={paymentFrequency}
                disabled={!editing}
              />
              <CostSection
                title={formatMessage({ id: 'pim_details.prices.costs.vats' })}
                subtitle={formatMessage({ id: 'pim_details.prices.costs.set_price' })}
                costLabel={formatMessage({ id: 'pim_details.prices.costs.vat_costs' })}
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
        </Collapse>
      </Box>
    </AutosaveForm>
  );
};
