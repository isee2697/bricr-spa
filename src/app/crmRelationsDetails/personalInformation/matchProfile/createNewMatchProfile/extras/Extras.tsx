import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useParams } from 'react-router-dom';
import { useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { MatchRequirement, MatchRequirementStatus, MatchRequirementType } from 'api/types';
import { FormSection } from 'ui/organisms';

import { ExtrasColumn } from './ExtrasColumn';
import { ExtrasColumnItems } from './Extras.types';

export const Extras = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  const formState = useFormState();

  const [columnItems, setColumnItems] = useState<ExtrasColumnItems>({
    [MatchRequirementStatus.Required]: Object.values(MatchRequirementType).filter(
      value =>
        !formState.values?.requirements ||
        formState.values.requirements.findIndex(
          (r: MatchRequirement) => r.status === MatchRequirementStatus.Required && r.key === value,
        ) >= 0,
    ),
    [MatchRequirementStatus.Desirable]: Object.values(MatchRequirementType).filter(
      value =>
        !!formState.values?.requirements &&
        formState.values.requirements.findIndex(
          (r: MatchRequirement) => r.status === MatchRequirementStatus.Desirable && r.key === value,
        ) >= 0,
    ),
    [MatchRequirementStatus.NotSignificant]: Object.values(MatchRequirementType).filter(
      value =>
        !!formState.values?.requirements &&
        formState.values.requirements.findIndex(
          (r: MatchRequirement) => r.status === MatchRequirementStatus.NotSignificant && r.key === value,
        ) >= 0,
    ),
  });

  const handleUpdateExtraStatus = (item: MatchRequirementType, status: MatchRequirementStatus) => {
    const updatedColumnItems = {
      [MatchRequirementStatus.Required]: [
        ...columnItems[MatchRequirementStatus.Required].filter(columnItem => columnItem !== item),
        ...(status === MatchRequirementStatus.Required ? [item] : []),
      ],
      [MatchRequirementStatus.Desirable]: [
        ...columnItems[MatchRequirementStatus.Desirable].filter(columnItem => columnItem !== item),
        ...(status === MatchRequirementStatus.Desirable ? [item] : []),
      ],
      [MatchRequirementStatus.NotSignificant]: [
        ...columnItems[MatchRequirementStatus.NotSignificant].filter(columnItem => columnItem !== item),
        ...(status === MatchRequirementStatus.NotSignificant ? [item] : []),
      ],
    };

    setColumnItems(updatedColumnItems);

    onSave({
      requirements: [
        ...updatedColumnItems.Required.map(item => ({
          key: item,
          status: MatchRequirementStatus.Required,
        })),
        ...updatedColumnItems.Desirable.map(item => ({
          key: item,
          status: MatchRequirementStatus.Desirable,
        })),
        ...updatedColumnItems.NotSignificant.map(item => ({
          key: item,
          status: MatchRequirementStatus.NotSignificant,
        })),
      ],
    });
  };

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.extras.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <DndProvider backend={HTML5Backend}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={MatchRequirementStatus.Required}
                items={columnItems[MatchRequirementStatus.Required]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={MatchRequirementStatus.Desirable}
                items={columnItems[MatchRequirementStatus.Desirable]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
            <Grid item xs={4}>
              <ExtrasColumn
                isEditable={isEditing}
                columnType={MatchRequirementStatus.NotSignificant}
                items={columnItems[MatchRequirementStatus.NotSignificant]}
                onUpdateExtraItemStatus={handleUpdateExtraStatus}
              />
            </Grid>
          </Grid>
        </DndProvider>
      )}
    </FormSection>
  );
};
