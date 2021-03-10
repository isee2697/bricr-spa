import React, { useState } from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { SalesLeadInterest } from '../salesLeads/SalesLeads.types';
import { SquareIcon } from 'ui/atoms/icons';

import { AddSalesInvoicesModalProps } from './AddSalesInvoicesModal.types';

export const AddSalesInvoicesModal = ({ isOpened, onClose, onAddNewSalesLead }: AddSalesInvoicesModalProps) => {
  const { formatMessage } = useLocale();
  const [partnerType, setPartnerType] = useState();

  const types: RadioDataType[] = [
    {
      label: 'sales.lead.Partner',
      value: 'Partner',
    },
    {
      label: 'sales.lead.NoPartner',
      value: 'NoPartner',
    },
    {
      label: 'sales.lead.Unknown',
      value: 'Unknown',
    },
  ];

  const typeOfInterests: RadioDataType[] = Object.keys(SalesLeadInterest).map(key => ({
    label: `dictionaries.sales.interests.${key}`,
    icon: <SquareIcon />,
    value: key,
  }));

  const handleChangePartnerType = (e: RadioDataType) => {
    setPartnerType(e.value);
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onAddNewSalesLead}
      title={formatMessage({ id: 'sales.lead.enter_new_lead' })}
      addText={formatMessage({ id: 'sales.lead.add_new_lead' })}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <GenericField name="firstName" label={formatMessage({ id: 'common.first_name' })} />
        </Grid>
        <Grid item xs={3}>
          <GenericField name="initials" label={formatMessage({ id: 'common.initials' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="lastName" label={formatMessage({ id: 'common.last_name' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="email" label={formatMessage({ id: 'common.email_address' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="phone" label={formatMessage({ id: 'common.phone_number' })} />
        </Grid>
      </Grid>
      <RadioGroupField name="type" options={types} optionType="checkbox" onChange={handleChangePartnerType} />
      {partnerType === 'Partner' && (
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <GenericField name="partnerFirstName" label={formatMessage({ id: 'common.first_name' })} />
          </Grid>
          <Grid item xs={3}>
            <GenericField name="partnerInitials" label={formatMessage({ id: 'common.initials' })} />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="partnerLastName" label={formatMessage({ id: 'common.last_name' })} />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="partnerEmail" label={formatMessage({ id: 'common.email_address' })} />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="partnerPhone" label={formatMessage({ id: 'common.phone_number' })} />
          </Grid>
        </Grid>
      )}
      <FormSubSectionHeader title={formatMessage({ id: 'sales.lead.type_of_interst' })} />
      <RadioGroupField name="typeOfInterest" options={typeOfInterests} />
      <GenericField name="extraDescription" label={formatMessage({ id: 'common.extra_description' })} />
    </FormModal>
  );
};
