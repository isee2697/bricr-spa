import React, { useRef, useState } from 'react';
import groupBy from 'lodash/groupBy';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSection } from 'ui/organisms';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';
import { Space } from 'api/types';
import { Page } from 'ui/templates';

import { EmptyFloor } from './emptyFloor/EmptyFloor';
import { AddNewSpaceModalContainer } from './addNewSpace/AddNewSpaceModalContainer';
import { SpaceContainer } from './space/SpaceContainer';
import { FloorProps } from './Floor.types';

export const Floor = ({ floor, count, onSave }: FloorProps) => {
  const { formatMessage } = useLocale();
  const formRef = useRef<FormSectionRef>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [expandedSpace, setExpandedSpace] = useState<string | undefined>();
  const [newlyCreatedSpace, setNewlyCreatedSpace] = useState<string | undefined>();

  const handleModalClose = (id?: string) => {
    setModalOpen(false);

    if (id) {
      setExpandedSpace(id);
      setNewlyCreatedSpace(id);
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
      <Page
        title={`${formatMessage({ id: `dictionaries.floor_type.${floor.floorType}` })} ${count ?? ''}`}
        onSave={onSave}
        placeholder="pim_details.inside.floor.description_placeholder"
        name="description"
        initialValues={{ description: floor.floorDescription || '' }}
        updatedBy={floor.lastEditedBy}
        dateUpdated={floor.dateUpdated}
      >
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
              ref={formRef}
              isInitEditing={!!newlyCreatedSpace}
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
      </Page>

      <AddNewSpaceModalContainer floorId={floor.id} isOpened={isModalOpen} onClose={handleModalClose} />
    </>
  );
};
