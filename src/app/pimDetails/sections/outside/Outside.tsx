import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { usePimOutsideQuery } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useEntityType } from 'app/shared/entityType';

import { AddOutsideFeatureModalContainer } from './addOutsideFeatureModal/AddOutsideFeatureModalContainer';
import { MainContainer } from './main/MainContainer';
import { FeatureContainer } from './feature/FeatureContainer';

export const Outside = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const { id } = useParams<{ id: string }>();

  const { data } = usePimOutsideQuery({
    variables: {
      id,
    },
  });

  const { isOpen: isAddFloorModalOpen } = useModalState('add-new-outside-feature');
  const { close, open } = useModalDispatch();

  if (!data?.getPimOutside) {
    return null;
  }

  return (
    <>
      <NavBreadcrumb urlBase={baseUrl} to="/outside" title={formatMessage({ id: 'pim_details.outside.title' })} />
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => {
              open('add-new-outside-feature');
            }}
            size="small"
          >
            {formatMessage({ id: 'pim_details.outside.add_new_feature' })}
          </Button>
        }
      />

      <Switch>
        <Route
          default
          path={`${baseUrl}/outside`}
          exact
          render={() => <MainContainer pimOutside={data?.getPimOutside} />}
        />
        <Route
          path={`${baseUrl}/outside/:featureId`}
          render={() => <FeatureContainer features={data.getPimOutside.outsideFeatures ?? []} />}
        />
        <Redirect to={`${baseUrl}/outside`} />
      </Switch>

      <AddOutsideFeatureModalContainer
        isOpened={isAddFloorModalOpen}
        onClose={() => close('add-new-outside-feature')}
      />
    </>
  );
};

export default Outside;
