import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { IconButton, Typography, Card, CardHeader, CardContent, Box, Button } from 'ui/atoms';
import { ListIcon, LocationIcon, SearchIcon, ManageIcon, SettingsIcon, AddIcon } from 'ui/atoms/icons';
import { ListActionTabs } from '../listActionTabs/ListActionTabs';
import { MatchProfile, MatchProfileMatch } from '../MatchProfile.types';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { CRM_RELATIONS_MATCH_PROFILES, CRM_RELATIONS_MATCH_PROFILES_MATCHES } from 'api/mocks/crm-relation';
import { SortOption } from 'ui/molecules/list/List.types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';

import { useStyles } from './List.styles';
import { ListItem } from './listItem/ListItem';
import { ListProps } from './List.types';

export const MatchProfileList = ({ path, isSidebarVisible, onSidebarOpen }: ListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [selectedProfile, setSelectedProfile] = useState<string>();
  const [profiles, setProfiles] = useState<MatchProfile[]>([]);
  const [matches, setMatches] = useState<MatchProfileMatch[]>([]);
  const { push } = useHistory();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const handleUpdateProfiles = () => {
    if (profiles.length === 0) {
      setProfiles(CRM_RELATIONS_MATCH_PROFILES);
    } else {
      handleUpdateMatches();
    }
  };

  const handleUpdateMatches = () => {
    setMatches(CRM_RELATIONS_MATCH_PROFILES_MATCHES);
  };

  useEffect(() => {
    if (profiles.length > 0) {
      setSelectedProfile(profiles[0].id);
    }
  }, [profiles, setSelectedProfile]);

  const sortOptions: SortOption[] = [
    { key: 'last_edited', name: formatMessage({ id: 'common.sort_option.last_edited' }) },
  ];

  const handleAddNew = () => {
    push(`${joinUrlParams(baseUrl, urlParams)}/personal_information_match_profile/new`);
  };

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={handleAddNew}
          >
            {formatMessage({ id: 'crm.details.new_matchprofile' })}
          </Button>
        }
      />
      <Page title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })} titleActions={<></>}>
        <Card onClick={handleUpdateProfiles}>
          {profiles.length === 0 && (
            <InfoSection emoji="🤔">
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
                  <Box
                    display="flex"
                    alignItems="center"
                    ml={4}
                    mt={1.5}
                    mb={1.5}
                    onClick={() =>
                      push(
                        joinUrlParams(`${path}/:profileId/edit`, {
                          ...urlParams,
                          profileId: selectedProfile as string,
                        }),
                      )
                    }
                    className={classes.settingRow}
                  >
                    <SettingsIcon className={classes.settingIcon} />
                    <Box ml={1.5} />
                    <Typography variant="h5" color="textSecondary">
                      {formatMessage({ id: 'crm.details.personal_information_match_profile.matches.matchprofile' })}
                    </Typography>
                  </Box>
                  <List
                    loadingItem={<PropertyItemPlaceholder />}
                    isShowHeader
                    items={matches}
                    itemIndex={'id'}
                    renderItem={(match, checked, checkbox) => (
                      <ListItem key={match.id} checked={checked} checkbox={checkbox} item={match} />
                    )}
                    sortOptions={sortOptions}
                    emptyTitle={formatMessage({
                      id: 'crm.details.personal_information_match_profile.matches.empty_title',
                    })}
                    emptyDescription={formatMessage({
                      id: 'crm.details.personal_information_match_profile.matches.empty_description',
                    })}
                  />
                </Box>
              </CardContent>
            </>
          )}
        </Card>
      </Page>
    </>
  );
};
