import React from 'react';
import { useParams, Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { NavBreadcrumb, Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { MatchProfileProps } from './MatchProfile.types';
import { MatchProfileListContainer } from './list/ListContainer';
import { CreateNewMatchProfileContainer } from './createNewMatchProfile/CreateNewMatchProfileContainer';

export const MatchProfile = ({ path, onSidebarOpen, isSidebarVisible }: MatchProfileProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();

  const handleAddNew = () => {
    push(`${joinUrlParams(baseUrl, urlParams)}/personal_information_match_profile/new`);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })}
        to="/personal_information_match_profile"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
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
            {formatMessage({ id: 'crm.details.new_profile' })}
          </Button>
        }
      />
      <Switch>
        <Route exact path={path} component={() => <MatchProfileListContainer />} />
        <Route exact path={`${path}/new`} component={() => <CreateNewMatchProfileContainer />} />
        <Route path={`${path}/:profileId`} component={() => <></>} />
        <Redirect to={{ pathname: `${path}` }} />
      </Switch>
    </>
  );
};
