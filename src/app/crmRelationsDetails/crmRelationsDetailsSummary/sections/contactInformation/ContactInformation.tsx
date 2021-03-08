import React from 'react';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { FormSection, FormSubSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { ContactInformationProps } from './ContactInformation.types';

export const ContactInformation = ({ crm: { phoneNumber, email, addresses = [] } }: ContactInformationProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const totalCount =
    (!!phoneNumber ? 1 : 0) + (!!email ? 1 : 0) + (addresses && addresses.length > 0 ? addresses.length : 0);

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.contact_information' })}
      isEditable={false}
      isExpandable={false}
      titleBadge={totalCount}
    >
      {phoneNumber && (
        <>
          <Typography variant="h4" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.phone_numbers' })}
          </Typography>
          <FormSubSection title={phoneNumber} counter={1} onOptionsClick={() => {}} initiallyOpened={false}>
            <></>
          </FormSubSection>
        </>
      )}
      {email && (
        <>
          <Typography variant="h4" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.email_addresses' })}
          </Typography>
          <FormSubSection title={email} counter={1} onOptionsClick={() => {}} initiallyOpened={false}>
            <></>
          </FormSubSection>
        </>
      )}
      {addresses && addresses.length > 0 && (
        <>
          <Typography variant="h4" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.addresses' })}
          </Typography>
          {addresses.map((address, index) => (
            <FormSubSection title={address.note} counter={index + 1} onOptionsClick={() => {}} initiallyOpened={false}>
              <></>
            </FormSubSection>
          ))}
        </>
      )}
    </FormSection>
  );
};
