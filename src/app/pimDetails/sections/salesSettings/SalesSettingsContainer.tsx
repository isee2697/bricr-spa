import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';

import { SalesSettings } from './SalesSettings';
import { AllocationMain } from './allocationMain/AllocationMain';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { baseUrl } = useEntityType();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => push('salesSettings/1')}
            size="small"
          >
            {formatMessage({ id: `pim_details.sales_settings.add_new_allocation` })}
          </Button>
        }
      />

      <Switch>
        <Route default path={`${baseUrl}/salesSettings`} exact render={() => <SalesSettings />} />
        <Route
          path={`${baseUrl}/salesSettings/:allocId`}
          render={() => (
            <AllocationMain
              title="Alocation and Match Criteria"
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
            />
          )}
        />
        <Redirect to={`${baseUrl}/salesSettings`} />
      </Switch>
    </>
  );
};
