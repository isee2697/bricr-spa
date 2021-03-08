import React from 'react';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { FormSection, FormSubSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { BusinessContactsProps } from './BusinessContacts.types';

export const BusinessContacts = ({ crm }: BusinessContactsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const contacts = [
    {
      title: 'Ikea',
      contacts: [
        {
          title: 'Financial Director',
        },
        {
          title: 'DGA',
        },
      ],
    },
  ];

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.business_contacts' })}
      isEditable={false}
      isExpandable={false}
      titleBadge={contacts.length}
    >
      {contacts.map((contact, contactIndex) => (
        <React.Fragment key={contactIndex}>
          <Typography variant="h4" color="textSecondary" className={classes.fontWeightMedium}>
            {contact.title}
          </Typography>
          {contact.contacts.map((item, itemIndex) => (
            <FormSubSection
              title={item.title}
              counter={itemIndex + 1}
              onOptionsClick={() => {}}
              initiallyOpened={false}
            >
              <></>
            </FormSubSection>
          ))}
        </React.Fragment>
      ))}
    </FormSection>
  );
};
