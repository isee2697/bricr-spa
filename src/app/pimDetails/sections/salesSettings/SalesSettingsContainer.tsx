import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';

import { SalesSettings } from './SalesSettings';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { baseUrl } = useEntityType();
  const { formatMessage } = useLocale();

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
            onClick={() => alert('add')}
            size="small"
          >
            {formatMessage({ id: `pim_details.sales_settings.add_new_allocation` })}
          </Button>
        }
      />

      <Switch>
        <Route default path={`${baseUrl}/salesSettings`} exact render={() => <SalesSettings />} />
        <Route path={`${baseUrl}/salesSettings/:allocId`} render={() => <h1>asd</h1>} />
        <Redirect to={`${baseUrl}/salesSettings`} />
      </Switch>
    </>
  );
};
