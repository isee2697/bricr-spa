import React, { useState } from 'react';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { EmptyFloor } from 'app/pimDetails/sections/emptyFloor/EmptyFloor';
import { AddNewFloorModalContainer } from '../addNewFloorModal/AddNewFloorModalContainer';
import { AddNewSpaceModalContainer } from '../addNewSpace/AddNewSpaceModalContainer';

import { FloorProps } from './Floor.types';

export const Floor = ({ title, description, isSidebarVisible, onOpenSidebar }: FloorProps) => {
  const { formatMessage } = useLocale();
  const [isAddFloorModalOpen, setAddFloorModalOpened] = useState(false);
  const [isAddNewSpaceModalOpen, setAddNewSpaceModalOpened] = useState(false);

  return (
    <>
      <PimDetailsHeader
        title={'Attic'}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => setAddNewSpaceModalOpened(true)}
            size="small"
          >
            {formatMessage({ id: AppMessages['pim_details.add_new_floor'] })}
          </Button>
        }
      />
      <EmptyFloor onClick={() => setAddNewSpaceModalOpened(true)} title={'Attic'} description={description} />
      <AddNewFloorModalContainer isOpened={isAddFloorModalOpen} onClose={() => setAddFloorModalOpened(false)} />
      <AddNewSpaceModalContainer isOpened={isAddNewSpaceModalOpen} onClose={() => setAddNewSpaceModalOpened(false)} />
    </>
  );
};
