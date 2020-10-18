import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { Grid, IconButton, Typography, Card, CardHeader, CardContent, Box } from 'ui/atoms';
import { HelpIcon, MenuIcon, CardsIcon, ListIcon, LocationIcon, SearchIcon, ManageIcon } from 'ui/atoms/icons';
import { ListActionTabs } from '../listActionTabs/ListActionTabs';
import { MatchProfile } from '../MatchProfile.types';

import { useStyles } from './List.styles';

export const MatchProfileList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [selectedProfile, setSelectedProfile] = useState<string>();

  const profiles: MatchProfile[] = [
    {
      id: '0001',
      amount: 112,
      dateCreated: DateTime.local(),
    },
    {
      id: '0002',
      amount: 4,
      dateCreated: DateTime.local(),
    },
  ];

  useEffect(() => {
    if (profiles.length > 0) {
      setSelectedProfile(profiles[0].id);
    }
  }, [profiles, setSelectedProfile]);

  return (
    <>
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_match_profile.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.detalis.personal_information_match_profile.matches' })}
            action={
              <>
                <IconButton variant="rounded" size="small" classes={{ root: classes.sortIcon }} onClick={() => {}}>
                  <CardsIcon color="primary" />
                </IconButton>
                <IconButton variant="rounded" size="small" classes={{ root: classes.sortIcon }}>
                  <ListIcon color="inherit" />
                </IconButton>
                <IconButton variant="rounded" size="small" classes={{ root: classes.sortIcon }}>
                  <LocationIcon color="inherit" />
                </IconButton>
                <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
                  <ManageIcon color="inherit" />
                </IconButton>
                <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
                  <SearchIcon color="inherit" />
                </IconButton>
              </>
            }
          />
          <CardContent>
            <Box mx={-2}>
              <ListActionTabs
                profileIndex={selectedProfile}
                onProfileIndexChange={profile => setSelectedProfile(profile)}
                profiles={profiles}
              />
            </Box>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
