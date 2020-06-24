import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Button, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EditIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { SpecificationGeneralContainer } from './specificationGeneral/SpecificationGeneralContainer';
import { AddLinkedPropertyModalContainer } from './addLinkedPropertyModal/AddLinkedPropertyModalContainer';
import { AdvancedContainer } from './advanced/AdvancedContainer';
import { LinkedPropertyContainer } from './linkedProperty/LinkedPropertyContainer';
import { InspectionContainer } from './inspection/InspectionContainer';

export const Specification = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const [isLinkedPropertyModalOpen, setLinkedPropertyModalOpen] = useState(false);

  return (
    <>
      <Grid xs={12} item>
        <PimDetailsHeader
          title={title}
          isSidebarVisible={isSidebarVisible}
          onOpenSidebar={onOpenSidebar}
          action={
            <Button
              color="primary"
              startIcon={<EditIcon color="inherit" />}
              variant="contained"
              onClick={() => setLinkedPropertyModalOpen(v => !v)}
              size="small"
            >
              {formatMessage({ id: 'pim_details.specification.add_property_button' })}
            </Button>
          }
        />
      </Grid>
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/specification`}
          exact
          render={() => <SpecificationGeneralContainer />}
        />
        <Route path={`${AppRoute.pimDetails}/specification/advanced`} exact render={() => <AdvancedContainer />} />
        <Route
          path={`${AppRoute.pimDetails}/specification/linked-property`}
          exact
          render={() => <LinkedPropertyContainer />}
        />
        <Route path={`${AppRoute.pimDetails}/specification/inspection`} exact render={() => <InspectionContainer />} />
        <Redirect to={`${AppRoute.pimDetails}/specification`} />
      </Switch>
      <AddLinkedPropertyModalContainer
        isOpened={isLinkedPropertyModalOpen}
        onClose={() => setLinkedPropertyModalOpen(false)}
      />
    </>
  );
};
