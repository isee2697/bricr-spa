import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EmptyFloor } from 'app/pimDetails/sections/inside/floor/emptyFloor/EmptyFloor';
import { AddNewSpaceModalContainer } from '../addNewSpace/AddNewSpaceModalContainer';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useModalState } from 'hooks/useModalState/useModalState';

import { FloorProps } from './Floor.types';
import { Spaces } from './spaces/Spaces';
import { FloorDescriptionContainer } from './floorDescription/FloorDescriptionContainer';

export const Floor = ({ floor }: FloorProps) => {
  const { formatMessage } = useLocale();
  const isAddNewSpaceModalOpen = useModalState('add-new-space');
  const { close, open } = useModalDispatch();

  return (
    <>
      <Grid container xs={12} item justify="space-between">
        <Typography variant="h1">{formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })}</Typography>
        <FloorDescriptionContainer
          floorDescription={floor.floorDescription || ''}
          floorId={floor.id}
          floorType={floor.floorType}
        />
      </Grid>

      {(floor.spaces === null || floor.spaces?.length === 0) && (
        <EmptyFloor
          onClick={() => open('add-new-space')}
          title={formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })}
        />
      )}

      {floor.spaces && floor.spaces.length > 0 && <Spaces floorType={floor.floorType} spaces={floor.spaces} />}
      <AddNewSpaceModalContainer
        floorId={floor.id}
        isOpened={isAddNewSpaceModalOpen}
        onClose={() => close('add-new-space')}
      />
    </>
  );
};
