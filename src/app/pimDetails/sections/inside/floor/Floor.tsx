import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Form } from 'react-final-form';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EmptyFloor } from 'app/pimDetails/sections/inside/floor/emptyFloor/EmptyFloor';
import { AddNewSpaceModalContainer } from '../addNewSpace/AddNewSpaceModalContainer';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { GenericField } from 'form/fields';
import { useModalState } from 'hooks/useModalState/useModalState';

import { FloorProps } from './Floor.types';
import { Spaces } from './spaces/Spaces';

export const Floor = ({ type, spaces }: FloorProps) => {
  const { formatMessage } = useLocale();
  const isAddNewSpaceModalOpen = useModalState('add-new-space');
  const { close, open } = useModalDispatch();

  return (
    <>
      <Form onSubmit={() => {}} mutators={{ ...arrayMutators }} subscription={{}}>
        {() => (
          <>
            <Grid container xs={12} item justify="space-between">
              <Typography variant="h1">{formatMessage({ id: `dictionaries.floor_type.${type}` })}</Typography>
              <GenericField placeholder="pim_details.inside.floor.description_placeholder" name="description" />
            </Grid>

            {spaces.length === 0 && (
              <EmptyFloor
                onClick={() => open('add-new-space')}
                title={formatMessage({ id: `dictionaries.floor_type.${type}` })}
              />
            )}

            {spaces.length > 0 && <Spaces floorType={type} spaces={spaces} />}
          </>
        )}
      </Form>
      <AddNewSpaceModalContainer isOpened={isAddNewSpaceModalOpen} onClose={() => close('add-new-space')} />
    </>
  );
};
