import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppRoute } from 'routing/AppRoute.enum';
import { usePimOutsideQuery } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';

import { AddOutsideFeatureModalContainer } from './addOutsideFeatureModal/AddOutsideFeatureModalContainer';
import { MainContainer } from './main/MainContainer';
import { FeatureContainer } from './feature/FeatureContainer';

export const Outside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  const { id } = useParams<{ id: string }>();

  const { data } = usePimOutsideQuery({
    variables: {
      id,
    },
  });

  const isAddFloorModalOpen = useModalState('add-new-outside-feature');
  const { close, open } = useModalDispatch();

  if (!data?.getPimOutside) {
    return null;
  }

  return (
    <>
      <NavBreadcrumb to="/outside" title={formatMessage({ id: 'pim_details.outside.title' })} isPimDetailsPage />
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
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
          path={`${AppRoute.pimDetails}/outside`}
          exact
          render={() => <MainContainer pimOutside={data?.getPimOutside} />}
        />
        <Route
          path={`${AppRoute.pimDetails}/outside/:featureId`}
          render={() => <FeatureContainer features={data.getPimOutside.outsideFeatures ?? []} />}
        />
        <Redirect to={`${AppRoute.pimDetails}/outside`} />
      </Switch>

      <AddOutsideFeatureModalContainer
        isOpened={isAddFloorModalOpen}
        onClose={() => close('add-new-outside-feature')}
      />
    </>
  );
};
