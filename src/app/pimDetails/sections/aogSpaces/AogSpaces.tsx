import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useEntityType } from 'app/shared/entityType';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { useLocale } from 'hooks';
import { AogSpace } from '../../../../api/types';

import { AogSpaceInformationContainer } from './aogSpaceInformation/AogSpaceInformationContainer';
import { AogSpacesProps } from './AogSpaces.types';
import { AddAogSpaceModalContainer } from './aogSpaceModal/AogSpaceModalContainer';
import { AogSpaceFormContainer } from './aogSpaceForm/AogSpaceFormContainer';

export const AogSpaces = ({ data, type, isSidebarVisible, onSidebarOpen }: AogSpacesProps) => {
  const { baseUrl } = useEntityType();
  const [isModalOpen, setModalOpen] = useState(false);
  const { formatMessage } = useLocale();

  const aogSpaces = (data?.aogSpaces?.filter(space => space.type === type) || []) as AogSpace[];

  return (
    <>
      <PimDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => setModalOpen(true)}
            size="small"
          >
            {formatMessage({ id: `pim_details.${type.toLowerCase()}.add_new` })}
          </Button>
        }
      />

      <Switch>
        <Route
          path={`${baseUrl}/${type.toLowerCase()}/:aogSpaceId`}
          exact
          render={() => <AogSpaceFormContainer data={aogSpaces} />}
        />
        <Route
          path={`${baseUrl}/${type.toLowerCase()}`}
          exact
          render={() => <AogSpaceInformationContainer isEmpty={aogSpaces.length < 1} type={type} />}
        />
        <Redirect to={`${baseUrl}`} />
      </Switch>
      <AddAogSpaceModalContainer type={type} onClose={() => setModalOpen(false)} isOpened={isModalOpen} />
    </>
  );
};
