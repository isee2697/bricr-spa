import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Box, IconButton } from 'ui/atoms';
import { ExitIcon, MenuIcon } from 'ui/atoms/icons';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { Profile } from './profile/Profile';
import { Location } from './location/Location';
import { Extras } from './extras/Extras';
import { CreateNewMatchProfileProps } from './CreateNewMatchProfile.types';

export const CreateNewMatchProfile = ({ path, onSidebarOpen, isSidebarVisible }: CreateNewMatchProfileProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex">
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
            <Box ml={3} />
            <IconButton size="small" variant="rounded" onClick={() => push(joinUrlParams(path, { id }))}>
              <ExitIcon />
            </IconButton>
          </Box>
        }
      />
      <Page title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })} titleActions={<></>}>
        <Profile />
        <Location />
        <Extras />
      </Page>
    </>
  );
};
