import React from 'react';
import { Route, Switch, useParams, Redirect } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button, Loader, Grid, Card, CardHeader, CardContent, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { usePimDetailsQuery } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { InfoSection } from 'ui/molecules';

import { AddOutsideFeatureModalContainer } from './addOutsideFeatureModal/AddOutsideFeatureModalContainer';
import { Main } from './main/Main';
import { Garden } from './garden/Garden';

export const Outside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const isAddFloorModalOpen = useModalState('add-new-outside-feature');
  const { close, open } = useModalDispatch();

  const { data: pim } = usePimDetailsQuery({ variables: { id } });

  if (!pim) {
    return <Loader />;
  }

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

      {(pim?.getPim?.outsideFeatures?.length === 0 || pim?.getPim?.outsideFeatures === null) && (
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Inside" />
            <CardContent>
              <InfoSection emoji="🤔">
                <Typography variant="h3">{formatMessage({ id: 'pim_details.outside.empty' })}</Typography>
                <Typography variant="h3">{formatMessage({ id: 'pim_details.outside.empty_description' })}</Typography>
              </InfoSection>
            </CardContent>
          </Card>
        </Grid>
      )}

      {pim?.getPim?.outsideFeatures && pim.getPim.outsideFeatures.length > 0 && (
        <Switch>
          {pim.getPim.outsideFeatures.map(outside => (
            <Route key={outside.id} path={`${AppRoute.pimDetails}/outside/${outside.id}`} render={() => <Garden />} />
          ))}
          <Route default path={`${AppRoute.pimDetails}/outside`} exact render={() => <Main />} />
          <Redirect to={`${AppRoute.pimDetails}/outside`} />
        </Switch>
      )}

      <AddOutsideFeatureModalContainer
        isOpened={isAddFloorModalOpen}
        onClose={() => close('add-new-outside-feature')}
      />
    </>
  );
};
