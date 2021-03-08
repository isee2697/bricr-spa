import React from 'react';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { FormSection, FormSubSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { FinancialProfileProps } from './FinancialProfile.types';

export const FinancialProfile = ({ crm }: FinancialProfileProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const financialProfiles = [
    {
      title: 'Income information',
      profiles: [
        {
          price: 250000,
          title: 'Ioondienst',
        },
        {
          price: 25000,
          title: 'zzp',
        },
      ],
    },
  ];

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.financial_profile' })}
      isEditable={false}
      isExpandable={false}
      titleBadge={financialProfiles.length}
    >
      {financialProfiles.map((profile, profileIndex) => (
        <React.Fragment key={profileIndex}>
          <Typography variant="h4" color="textSecondary" className={classes.fontWeightMedium}>
            {profile.title}
          </Typography>
          {profile.profiles.map((item, itemIndex) => (
            <FormSubSection
              title={`€ ${item.price} ${item.title}`}
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
