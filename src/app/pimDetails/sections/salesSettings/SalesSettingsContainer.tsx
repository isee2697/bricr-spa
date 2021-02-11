import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';

import { SalesSettings } from './SalesSettings';
import { AllocationMain } from './allocationMain/AllocationMain';
import { AddCriteriaModal } from './addCriteriaModal/AddCriteriaModal';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { baseUrl } = useEntityType();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const [showCriteriaModal, setShowCriteriaModal] = useState(false);

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
            onClick={() => setShowCriteriaModal(true)}
            size="small"
          >
            {formatMessage({ id: `pim_details.sales_settings.add_new_allocation` })}
          </Button>
        }
      />

      {showCriteriaModal && (
        <AddCriteriaModal
          isOpened={true}
          onClose={() => setShowCriteriaModal(false)}
          onSubmit={() => {
            setShowCriteriaModal(false);
            push('allocateSettings/1');

            return new Promise(resolve => undefined);
          }}
        />
      )}

      <Switch>
        <Route default path={`${baseUrl}/allocateSettings`} exact render={() => <SalesSettings />} />
        <Route
          path={`${baseUrl}/allocateSettings/:allocId`}
          render={() => (
            <AllocationMain
              title="Alocation and Match Criteria"
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
            />
          )}
        />
        <Redirect to={`${baseUrl}/allocateSettings`} />
      </Switch>
    </>
  );
};

export default SalesSettingsContainer;
