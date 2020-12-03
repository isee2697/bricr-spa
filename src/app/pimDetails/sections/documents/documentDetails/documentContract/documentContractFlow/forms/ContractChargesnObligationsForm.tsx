import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { SquareIcon } from 'ui/atoms/icons';
import { BenefitBuyerType } from '../DocumentContractFlow.types';

export function ContractChargesnObligationsForm() {
  const { formatMessage } = useLocale();

  const listBenefitsBuyer = Object.keys(BenefitBuyerType).map(type => ({
    label: `pim_details.benefits_buyer.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  return (
    <FormSection
      title={formatMessage({
        id: 'pim_details.documents.charges_and_obligations',
      })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({
              id: `pim_details.documents.rights_in_case_of_deviation`,
            })}
            noBorder
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({
                  id: 'pim_details.documents.charges_and_obligations.check',
                })}
              </Typography>
            }
          />
          <GenericField
            disabled={!editing}
            name="removal_rights_tenants_note"
            label="pim_details.documents.note"
            placeholder={formatMessage({
              id: 'pim_details.documents.removal_rights_tenants.note_placeholder',
            })}
            size="medium"
          />

          <FormSubSectionHeader
            title={formatMessage({
              id: `pim_details.documents.current_agreements`,
            })}
            noBorder
          />
          <GenericField
            disabled={!editing}
            name="current_agreements_note"
            label="pim_details.documents.note"
            placeholder={formatMessage({
              id: 'pim_details.documents.current_agreements.note_placeholder',
            })}
            size="medium"
          />

          <FormSubSectionHeader
            title={formatMessage({
              id: `pim_details.documents.charges_and_obligations`,
            })}
            noBorder
          />
          <GenericField
            disabled={!editing}
            name="charges_and_obligations_note"
            label="pim_details.documents.note"
            placeholder={formatMessage({
              id: 'pim_details.documents.charges_and_obligations.note_placeholder',
            })}
            size="medium"
          />

          <FormSubSectionHeader
            title={formatMessage({ id: `pim_details.documents.benefits_buyer` })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Box mt={1} />
          <RadioGroupField disabled={!editing} name="benefitsBuyer" options={listBenefitsBuyer} />
          <Box mt={1} />
          <Grid item xs={12} sm={4}>
            <DatePickerField
              label={formatMessage({
                id: 'pim_details.documents.benefits_buyer.specific_date',
              })}
              name="benefitsBuyerDate"
              disabled={!editing}
              placeholder={formatMessage({ id: 'common.date_picker' })}
            />
          </Grid>
          <Box mt={1} />
          <Grid item xs={12} sm={4}>
            <GenericField
              disabled={!editing}
              name="benefitsBuyerCost"
              label="pim_details.documents.benefits_buyer.max_cost"
              size="medium"
              InputProps={{ endAdornment: <Typography>€</Typography> }}
            />
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
