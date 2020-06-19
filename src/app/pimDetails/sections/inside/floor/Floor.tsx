import React, { useRef, useState } from 'react';
import groupBy from 'lodash/groupBy';

import { useLocale } from 'hooks';
import { Grid, Typography, Box } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSection } from 'ui/organisms';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';
import { Space } from 'api/types';

import { EmptyFloor } from './emptyFloor/EmptyFloor';
import { FloorDescriptionContainer } from './floorDescription/FloorDescriptionContainer';
import { AddNewSpaceModalContainer } from './addNewSpace/AddNewSpaceModalContainer';
import { SpaceContainer } from './space/SpaceContainer';
import { FloorProps } from './Floor.types';

export const Floor = ({ floor, count }: FloorProps) => {
  const { formatMessage } = useLocale();
  const formRef = useRef<FormSectionRef>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [expandedSpace, setExpandedSpace] = useState<string | undefined>(floor?.spaces?.[0]?.id);

  const handleModalClose = (id?: string) => {
    setModalOpen(false);

    if (id) {
      setExpandedSpace(id);
      formRef?.current?.handleSetEdit(true);
    }
  };

  const handleSpaceExpand = (id: string) => {
    setExpandedSpace(spaceId => {
      if (spaceId === id) {
        return undefined;
      }

      return id;
    });
  };

  const groupedSpaces = groupBy((floor && floor?.spaces) || [], space => space.spaceType);

  const getGroupedSpaceCount = (space: Space) => {
    let count: number | undefined;

    Object.values(groupedSpaces).flatMap(spaces =>
      spaces.forEach((floorSpace, i) => {
        if (floorSpace.id === space.id) {
          const numberOfSpaceTypeOccurence = groupedSpaces[floorSpace.spaceType].length;
          count = numberOfSpaceTypeOccurence > 1 ? i + 1 : undefined;
        }
      }),
    );

    return count;
  };

  return (
    <>
      <Grid container xs={12} item justify="space-between">
        <Typography variant="h1">
          {formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })} {count}
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
            title={
              <>
                {formatMessage(
                  { id: 'pim_details.inside.space_title' },
                  {
                    space: formatMessage({
                      id: `dictionaries.floor_type.${floor.floorType}`,
                    }),
                  },
                )}{' '}
                <Counter count={floor.spaces.length} hasMarginLeft />
              </>
            }
            onAdd={() => setModalOpen(true)}
            isInitEdititng={true}
            ref={formRef}
          >
            {editing =>
              Object.values(groupedSpaces)
                .flat()
                .map((space, index) => (
                  <Box mb={3} key={space.id}>
                    <SpaceContainer
                      isEditMode={editing}
                      isExpanded={expandedSpace === space.id}
                      onExpand={handleSpaceExpand}
                      space={space}
                      index={index}
                      groupedSpaceCount={getGroupedSpaceCount(space)}
                    />
                  </Box>
                ))
            }
          </FormSection>
        </Grid>
      )}

      <AddNewSpaceModalContainer floorId={floor.id} isOpened={isModalOpen} onClose={handleModalClose} />
    </>
  );
};
