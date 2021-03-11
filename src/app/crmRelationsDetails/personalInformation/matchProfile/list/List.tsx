import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { IconButton, Typography, Card, CardHeader, CardContent, Box, Button } from 'ui/atoms';
import { ListIcon, LocationIcon, SearchIcon, ManageIcon, SettingsIcon, AddIcon, HomeIcon } from 'ui/atoms/icons';
import { ListActionTabs } from '../listActionTabs/ListActionTabs';
import { InfoSection, List, ListOptionsMenu, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { MatchProfileMatch } from '../MatchProfile.types';
import { CRM_RELATIONS_MATCH_PROFILES_MATCHES } from 'api/mocks/crm-relation';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { useStyles } from './List.styles';
import { ListItem } from './listItem/ListItem';
import { ListProps } from './List.types';

export const MatchProfileList = ({
  crm,
  path,
  isSidebarVisible,
  onSidebarOpen,
  matchProfiles,
  onCloneMatchProfile,
  onDeleteMatchProfile,
}: ListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [selectedProfile, setSelectedProfile] = useState<string>();
  const [matches, setMatches] = useState<MatchProfileMatch[]>([]);
  const { push } = useHistory();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  useEffect(() => {
    if (matchProfiles.length > 0) {
      setSelectedProfile(matchProfiles[0].id);
    }
  }, [matchProfiles, setSelectedProfile]);

  const sortOptions: SortOption[] = [
    { key: 'match_strength', name: formatMessage({ id: 'common.sort_option.match_strength' }) },
    { key: 'newest', name: formatMessage({ id: 'common.sort_option.newest' }) },
    { key: 'latest', name: formatMessage({ id: 'common.sort_option.latest' }) },
    { key: 'highest_price_sale', name: formatMessage({ id: 'common.sort_option.highest_price_sale' }) },
    { key: 'highest_price_rent', name: formatMessage({ id: 'common.sort_option.highest_price_rent' }) },
    { key: 'lowest_price_sale', name: formatMessage({ id: 'common.sort_option.newest' }) },
    { key: 'lowest_price_rent', name: formatMessage({ id: 'common.sort_option.lowest_price_rent' }) },
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
        <Card onClick={() => setMatches(CRM_RELATIONS_MATCH_PROFILES_MATCHES)}>
          {matchProfiles.length === 0 && (
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
          {matchProfiles.length > 0 && (
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
                    profiles={matchProfiles}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    ml={4}
                    mr={2}
                    mt={1.5}
                    mb={1.5}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
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
                    <ListOptionsMenu
                      id="crm-match-profile-menu"
                      hideEditButton
                      onDeleteClick={() => onDeleteMatchProfile(selectedProfile!)}
                    >
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'crm.details.personal_information_match_profile.matches.clone',
                        })}
                        icon={<HomeIcon />}
                        onClick={() => onCloneMatchProfile(selectedProfile!)}
                      />
                    </ListOptionsMenu>
                  </Box>
                  <List
                    loadingItem={<PropertyItemPlaceholder />}
                    isShowHeader
                    items={matches}
                    itemIndex={'id'}
                    renderItem={(match, checked, checkbox) => (
                      <ListItem key={match.id} checked={checked} checkbox={checkbox} item={match} crm={crm} />
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
