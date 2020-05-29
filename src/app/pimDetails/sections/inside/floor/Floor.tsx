import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';

import { EmptyFloor } from './emptyFloor/EmptyFloor';
import { FloorDescriptionContainer } from './floorDescription/FloorDescriptionContainer';
import { AddNewSpaceModalContainer } from './addNewSpace/AddNewSpaceModalContainer';
import { SpaceContainer } from './space/SpaceContainer';
import { FloorProps } from './Floor.types';

export const Floor = ({ floor }: FloorProps) => {
  const { formatMessage } = useLocale();

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Grid container xs={12} item justify="space-between">
        <Typography variant="h1">
          {formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })} {floor.level}
        </Typography>
        <FloorDescriptionContainer
          floorDescription={floor.floorDescription || ''}
          floorId={floor.id}
          floorType={floor.floorType}
        />
      </Grid>

      {(floor.spaces === null || floor.spaces?.length === 0) && (
        <EmptyFloor
          onClick={() => setModalOpen(true)}
          title={formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })}
        />
      )}

      {floor.spaces && floor.spaces.length > 0 && (
        <Grid item xs={12}>
          <FormSection
            title={formatMessage({ id: 'pim_details.inside.space_title' }, { space: floor.floorType })}
            onAdd={() => setModalOpen(true)}
          >
            {editing =>
              floor.spaces?.map((space, index) => (
                <SpaceContainer key={space.id} isEditMode={editing} index={index} space={space} />
              ))
            }
          </FormSection>
        </Grid>
      )}

      <AddNewSpaceModalContainer floorId={floor.id} isOpened={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
