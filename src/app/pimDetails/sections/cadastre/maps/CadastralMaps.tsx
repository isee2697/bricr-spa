import React, { useState } from 'react';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { Typography, Box, IconButton } from 'ui/atoms';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { ListIcon, CardsIcon } from 'ui/atoms/icons';

import { MapsProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';
import { AddMapModalContainer } from './addMapModal/AddMapModalContainer';
import { CadastreMapContainer } from './cadastreMap/CadastreMapContainer';

export const CadastralMaps = ({ cadastreItem }: MapsProps) => {
  const { formatMessage } = useLocale();
  const [isAddModalOpened, setAddModalOpened] = useState(false);

  const classes = useStyles();
  const [toggled, setToggled] = useState<string | undefined>();

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.cadastre.map.title' })}
        isEditable={false}
        onAdd={() => setAddModalOpened(true)}
        buttons={
          <>
            <IconButton>
              <ListIcon />
            </IconButton>
            <IconButton>
              <CardsIcon />
            </IconButton>
          </>
        }
      >
        {isEditMode => (
          <List
            className={classes.list}
            items={cadastreItem.maps || []}
            itemIndex={'id'}
            renderItem={(cadastre, checked, checkbox) => (
              <Box className={classNames({ [classes.rowChecked]: checked })} key={cadastre.id}>
                <CadastreMapContainer
                  isEditMode={isEditMode}
                  cadastreId={cadastreItem?.id}
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
              </Box>
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
