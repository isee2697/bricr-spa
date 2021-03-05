import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { FormSection, FormSubSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { MatchProfileProps } from './MatchProfile.types';

export const MatchProfile = ({ crm }: MatchProfileProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const matchProfiles = [
    {
      date: DateTime.local(),
      matches: 666,
      isActive: true,
    },
    {
      date: DateTime.local(),
      matches: 11,
      isActive: false,
    },
  ];

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.match_profile' })}
      isEditable={false}
      isExpandable={false}
      titleBadge={matchProfiles.length}
    >
      {matchProfiles.map((item, itemIndex) => (
        <FormSubSection
          title={
            <Typography variant="h3" className={clsx(!item.isActive && classes.textDecorated)}>
              {`${item.date.toLocaleString(DateTime.DATE_SHORT)} ${formatMessage(
                { id: 'crm.details.summary.match_profile.matches' },
                { matches: item.matches },
              )}`}
            </Typography>
          }
          counter={itemIndex + 1}
          onOptionsClick={() => {}}
          initiallyOpened={false}
        >
          <></>
        </FormSubSection>
      ))}
    </FormSection>
  );
};
