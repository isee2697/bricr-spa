import React, { useEffect, useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { IconButton, Typography, Card, CardHeader, CardContent, Box } from 'ui/atoms';
import { CardsIcon, ListIcon, LocationIcon, SearchIcon, ManageIcon } from 'ui/atoms/icons';
import { ListActionTabs } from '../listActionTabs/ListActionTabs';
import { MatchProfile, MatchProfileMatch } from '../MatchProfile.types';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { CRM_RELATIONS_MATCH_PROFILES, CRM_RELATIONS_MATCH_PROFILES_MATCHES } from 'api/mocks/crm-relation';
import { SortOption } from 'ui/molecules/list/List.types';

import { useStyles } from './List.styles';
import { ListItem } from './listItem/ListItem';

export const MatchProfileList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [selectedProfile, setSelectedProfile] = useState<string>();

  const profiles: MatchProfile[] = CRM_RELATIONS_MATCH_PROFILES;
  const matches: MatchProfileMatch[] = CRM_RELATIONS_MATCH_PROFILES_MATCHES;

  useEffect(() => {
    if (profiles.length > 0) {
      setSelectedProfile(profiles[0].id);
    }
  }, [profiles, setSelectedProfile]);

  const sortOptions: SortOption[] = [
    { key: 'last_edited', name: formatMessage({ id: 'common.sort_option.last_edited' }) },
  ];

  return (
    <Page title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })} titleActions={<></>}>
      <Card>
        {profiles.length === 0 && (
          <InfoSection emoji="️🙌">
            <Typography variant="h3">
              {formatMessage({
                id: 'crm.details.personal_information_match_profile.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'crm.details.personal_information_match_profile.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
        {profiles.length > 0 && (
          <>
            <CardHeader
              title={formatMessage({ id: 'crm.details.personal_information_match_profile.matches' })}
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
                <List
                  loadingItem={<PropertyItemPlaceholder />}
                  isShowHeader
                  items={matches}
                  itemIndex={'id'}
                  renderItem={(match, checked, checkbox) => (
                    <ListItem key={match.id} checked={checked} checkbox={checkbox} item={match} />
                  )}
                  sortOptions={sortOptions}
                />
              </Box>
            </CardContent>
          </>
        )}
      </Card>
    </Page>
  );
};
