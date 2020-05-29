import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { FormSection } from 'ui/organisms';

import { MapsProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';
import { AddMapModalContainer } from './addMapModal/AddMapModalContainer';
import { CadastreMapContainer } from './cadastreMap/CadastreMapContainer';

export const CadastralMaps = ({ cadstralMaps, cadastreId }: MapsProps) => {
  const { formatMessage } = useLocale();
  const [isAddModalOpened, setAddModalOpened] = useState(false);
  const classes = useStyles();
  const [toggled, setToggled] = useState<string | undefined>(
    !!cadstralMaps.maps && cadstralMaps.maps.length > 1 ? cadstralMaps.maps[0].id : undefined,
  );

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.cadastre.map.title' })}
        isEditable
        onAdd={() => setAddModalOpened(true)}
      >
        {isEditMode => (
          <List
            className={classes.list}
            items={cadstralMaps.maps ?? []}
            itemIndex={'id'}
            renderItem={(cadastre, _checked, checkbox) => (
              <CadastreMapContainer
                key={cadastre.id}
                isEditMode={isEditMode}
                cadastreId={cadastreId}
                title={
                  <>
                    {checkbox}
                    <Typography variant="h3">
                      {cadastre.mapName || formatMessage({ id: 'pim_details.cadastre.unnamed' })}
                    </Typography>
                  </>
                }
                cadastreMap={cadastre}
                toggled={toggled === cadastre.id}
                onToggleClick={() => setToggled(toggled !== cadastre.id ? cadastre.id : undefined)}
              />
            )}
            onBulk={() => alert('Bulk clicked')}
            onSort={() => {}}
            loading={false}
            loadingItem={<PropertyItemPlaceholder />}
            emptyTitle={formatMessage({ id: 'pim_details.cadastre.map.empty_title' })}
            emptyDescription={formatMessage({ id: 'pim_details.cadastre.map.empty_subtitle' })}
          />
        )}
      </FormSection>
      {isAddModalOpened && (
        <AddMapModalContainer isOpened={isAddModalOpened} onClose={() => setAddModalOpened(false)} />
      )}
    </>
  );
};
