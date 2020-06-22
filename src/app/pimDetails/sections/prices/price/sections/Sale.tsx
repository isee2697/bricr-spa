import React from 'react';
import { FormSpy } from 'react-final-form';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { FormSubSection as SubSectionHeader } from 'ui/molecules';
import { FormSection, FormSubSection } from 'ui/organisms';
import { GenericField, CheckboxField, DatePickerField, DropdownField, RadioGroupField } from 'form/fields';

import * as dictionaries from './dictionaries';

export const Sale = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.prices.sale' })} isExpandable>
      {inEditMode => (
        <>
          <FormSubSection
            title={formatMessage({ id: 'pim_details.prices.general_information' })}
            onOptionsClick={() => {}}
          >
            <SubSectionHeader
              title={formatMessage({ id: 'pim_details.prices.price_settings' })}
              subtitle={formatMessage({ id: 'pim_details.prices.select_prefix' })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <DropdownField
                  name="sale.general.prefix"
                  items={dictionaries.salePrefixes.map(prefix => ({
                    label: formatMessage({ id: `dictionaries.prices.sale_prefix.${prefix}` }),
                    value: prefix,
                  }))}
                  label="pim_details.prices.prefix"
                  placeholder="common.select_placeholder"
                  disabled={!inEditMode}
                />
              </Grid>
              <Grid item xs={4}>
                <GenericField
                  name="sale.general.price"
                  label="pim_details.prices.price"
                  placeholder="pim_details.prices.price_placeholder"
                  size="medium"
                  type="number"
                  InputProps={{
                    endAdornment: <EuroIcon />,
                  }}
                  disabled={!inEditMode}
                />
              </Grid>
              <Grid item xs={4}>
                <DropdownField
                  name="sale.general.suffix"
                  items={dictionaries.saleSufixes.map(sufix => ({
                    label: formatMessage({ id: `dictionaries.prices.sale_sufix.${sufix}` }),
                    value: sufix,
                  }))}
                  label="pim_details.prices.sufix"
                  placeholder="common.select_placeholder"
                  disabled={!inEditMode}
                />
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" alignItems="flex-end" pb={1.25} height="100%">
                  <CheckboxField
                    name="sale.general.executionSale"
                    label="pim_details.prices.execution_sale"
                    disabled={!inEditMode}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <FormSpy subscription={{ values: true }}>
                  {({ values }) => (
                    <DatePickerField
                      name="sale.general.dateOfExecutionSale"
                      label="pim_details.prices.execution_sale_date"
                      placeholder="common.from_placeholder"
                      size="medium"
                      disabled={!inEditMode || !values?.sale?.general.executionSale}
                    />
                  )}
                </FormSpy>
              </Grid>
            </Grid>
            <Box mb={4} />

            <SubSectionHeader
              title={formatMessage({ id: 'pim_details.prices.conditions' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              noBorder
            />
            <Box mb={2} />
            <RadioGroupField
              spacing={1}
              disabled={!inEditMode}
              xs={4}
              md={3}
              lg={2}
              name="sale.general.conditions"
              options={dictionaries.saleConditions.map(condition => ({
                label: `dictionaries.prices.sale_conditions.${condition}`,
                value: condition,
                icon: <SquareIcon />,
              }))}
            />
            <Box mb={4} />

            <SubSectionHeader
              title={formatMessage({ id: 'pim_details.prices.purchase_mix' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              noBorder
            />
            <Box mb={2} />
            <RadioGroupField
              spacing={1}
              disabled={!inEditMode}
              xs={4}
              md={3}
              lg={2}
              name="sale.general.purchaseMix"
              options={dictionaries.salePurchaseMix.map(mix => ({
                label: `dictionaries.prices.sale_purchase_mix.${mix}`,
                value: mix,
                icon: <SquareIcon />,
              }))}
            />
            <GenericField
              name="sale.general.notes"
              label="common.notes"
              placeholder="pim_details.prices.general_notes_placeholder"
              disabled={!inEditMode}
            />
          </FormSubSection>

          <Box mb={4} />

          <FormSubSection title={formatMessage({ id: 'pim_details.prices.woz' })} onOptionsClick={() => {}}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GenericField
                  name="sale.woz.wozPrice"
                  label="pim_details.prices.woz_price"
                  placeholder="pim_details.prices.price_placeholder"
                  size="medium"
                  type="number"
                  InputProps={{
                    endAdornment: <EuroIcon />,
                  }}
                  disabled={!inEditMode}
                />
              </Grid>
              <Grid item xs={4}>
                <DatePickerField
                  name="sale.woz.referenceDateWoz"
                  label="pim_details.prices.reference_date_woz"
                  placeholder="common.from_placeholder"
                  size="medium"
                  disabled={!inEditMode}
                />
              </Grid>
            </Grid>
            <GenericField
              name="sale.woz.notes"
              label="common.notes"
              placeholder="pim_details.prices.woz_notes_placeholder"
              disabled={!inEditMode}
            />
          </FormSubSection>
        </>
      )}
    </FormSection>
  );
};
