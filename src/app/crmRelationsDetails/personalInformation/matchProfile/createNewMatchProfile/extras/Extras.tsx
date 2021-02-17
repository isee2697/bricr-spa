import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { MatchRequirementStatus, MatchRequirementType } from 'api/types';
import { FormSection } from 'ui/organisms';

import { ExtrasColumn } from './ExtrasColumn';
import { ExtrasColumnItems } from './Extras.types';

export const Extras = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();
  const [columnItems, setColumnItems] = useState<ExtrasColumnItems>({
    [MatchRequirementStatus.Required]: Object.values(MatchRequirementType),
    [MatchRequirementStatus.Desirable]: [],
    [MatchRequirementStatus.NotSignificant]: [],
  });

  const handleUpdateExtraStatus = (item: MatchRequirementType, status: MatchRequirementStatus) => {
    setColumnItems({
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
    });

    onSave({
      requirements: [
        ...columnItems.Required.map(item => ({
          key: item,
          status: MatchRequirementStatus.Required,
        })),
        ...columnItems.Desirable.map(item => ({
          key: item,
          status: MatchRequirementStatus.Desirable,
        })),
        ...columnItems.NotSignificant.map(item => ({
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
      isInitEditing
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
