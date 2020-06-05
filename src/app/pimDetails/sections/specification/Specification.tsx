import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Button, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { EditIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { SpecificationGeneral } from './specificationGeneral/SpecificationGeneral';
import { Advanced } from './advanced/Advanced';
import { LinkedProperty } from './linkedProperty/LinkedProperty';

export const Specification = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

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
              onClick={() => {}}
              size="small"
            >
              {formatMessage({ id: 'pim_details.specification.add_property_button' })}
            </Button>
          }
        />
      </Grid>
      <Switch>
        <Route default path={`${AppRoute.pimDetails}/specification`} exact render={() => <SpecificationGeneral />} />
        <Route path={`${AppRoute.pimDetails}/specification/advanced`} exact render={() => <Advanced />} />
        <Route path={`${AppRoute.pimDetails}/specification/linked-property`} exact render={() => <LinkedProperty />} />
        <Redirect to={`${AppRoute.pimDetails}/specification`} />
      </Switch>
    </>
  );
};
