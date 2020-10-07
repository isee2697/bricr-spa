import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { CommercialSpacesProps } from './CommercialSpaces.types';
import { CommercialSpacesInformation } from './forms/CommercialSpacesInformation';
import { CommercialSpacesForm } from './forms/CommercialSpacesForm';
import { AddCommercialSpaceModalContainer } from './modal/AddCommercialSpaceModalContainer';

export const CommercialSpaces = ({ title, data, onSidebarOpen, isSidebarVisible, onSave }: CommercialSpacesProps) => {
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalVisible] = useState(false);

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Box display="flex">
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={() => setModalVisible(true)}
              size="small"
            >
              {formatMessage({ id: 'pim_details.commercial_spaces.add_new' })}
            </Button>
          </Box>
        }
      />
      <Switch>
        <Route
          path={`${AppRoute.pimDetails}/commercialspaces`}
          exact
          render={path => <CommercialSpacesInformation onSave={onSave} data={data} />}
        />
        <Route
          path={`${AppRoute.pimDetails}/commercialspaces/:commercialSpaceId`}
          exact
          render={path => <CommercialSpacesForm onSave={onSave} data={data} />}
        />
      </Switch>
      <AddCommercialSpaceModalContainer isModalOpen={isModalOpen} onModalClose={() => setModalVisible(false)} />
    </>
  );
};
