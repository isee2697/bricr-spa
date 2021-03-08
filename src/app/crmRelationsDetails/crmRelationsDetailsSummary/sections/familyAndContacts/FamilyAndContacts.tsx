import React from 'react';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { FormSection, FormSubSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { FamilyAndContactsProps } from './FamilyAndContacts.types';

export const FamilyAndContacts = ({
  crm: { martialStatus, familyCompositionAdults = 0, familyCompositionChildren = 0 },
}: FamilyAndContactsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const contacts = [
    {
      title: 'Sylvia Pit, waarnemer',
    },
  ];

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.family_and_contacts' })}
      isEditable={false}
      isExpandable={false}
    >
      {!!martialStatus && (
        <Box mb={2}>
          <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.martial_status' })}
          </Typography>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {martialStatus}
          </Typography>
        </Box>
      )}
      {!!familyCompositionAdults && (
        <Box mb={2}>
          <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.adults' })}
          </Typography>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {familyCompositionAdults}
          </Typography>
        </Box>
      )}
      {!!familyCompositionChildren && (
        <Box mb={2}>
          <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'common.children' })}
          </Typography>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {familyCompositionChildren}
          </Typography>
        </Box>
      )}
      <Typography variant="h4" className={classes.fontWeightMedium}>
        {formatMessage({ id: 'common.contacts' })}
      </Typography>
      {contacts.map((contact, index) => (
        <FormSubSection title={contact.title} counter={index + 1} onOptionsClick={() => {}} initiallyOpened={false}>
          <></>
        </FormSubSection>
      ))}
    </FormSection>
  );
};
