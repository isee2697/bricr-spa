import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { usePim } from 'app/pimDetails/usePim/usePim';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddOutsideFeatureModalContainer } from './addOutsideFeatureModal/AddOutsideFeatureModalContainer';
import { MainContainer } from './main/MainContainer';
import { FeatureContainer } from './feature/FeatureContainer';

export const Outside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  const isAddFloorModalOpen = useModalState('add-new-outside-feature');
  const { close, open } = useModalDispatch();

  const pim = usePim();

  return (
    <>
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
        <Route default path={`${AppRoute.pimDetails}/outside`} exact render={() => <MainContainer />} />
        {!!pim.outsideFeatures?.length &&
          pim.outsideFeatures.map(feature => (
            <Route
              key={feature.id}
              path={`${AppRoute.pimDetails}/outside/${feature.id}`}
              render={() => <FeatureContainer feature={feature} />}
            />
          ))}
        <Redirect to={`${AppRoute.pimDetails}/outside`} />
      </Switch>

      <AddOutsideFeatureModalContainer
        isOpened={isAddFloorModalOpen}
        onClose={() => close('add-new-outside-feature')}
      />
    </>
  );
};
