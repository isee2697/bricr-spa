import React from 'react';

import { Box, Tabs, Tab, Badge } from 'ui/atoms';
import { PublicationDetailsTab } from '../PublicationDetails.types';
import { useLocale } from 'hooks';
import { CheckIcon } from 'ui/atoms/icons';

import { PublicationDetailsTabsProps } from './PublicationDetailsTabs.types';
import { useStyles } from './PublicationDetailsTabs.styles';

export const PublicationDetailsTabs = ({
  checklistCount,
  statusCount,
  status,
  onStatusChange,
}: PublicationDetailsTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Tabs
      value={status}
      onChange={(event, value) => onStatusChange(value)}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab
        value={PublicationDetailsTab.Checklist}
        label={
          <Badge
            badgeContent={
              checklistCount > 0 ? (
                checklistCount
              ) : (
                <Box className={classes.checkIcon}>
                  <CheckIcon color="inherit" />
                </Box>
              )
            }
            color={checklistCount > 0 ? 'error' : 'default'}
          >
            {formatMessage({ id: `pim_details.publication.${PublicationDetailsTab.Checklist}` })}
          </Badge>
        }
      />
      <Tab
        value={PublicationDetailsTab.Settings}
        label={<Badge>{formatMessage({ id: `pim_details.publication.${PublicationDetailsTab.Settings}` })}</Badge>}
      />
      <Tab
        value={PublicationDetailsTab.Status}
        label={
          <Badge badgeContent={statusCount} color={'error'}>
            {formatMessage({ id: `pim_details.publication.${PublicationDetailsTab.Status}` })}
          </Badge>
        }
      />
    </Tabs>
  );
};
