import React, { useState } from 'react';
import classNames from 'classnames';
import { LabelProperty } from 'api/types';
import { useLocale, useToggleOnNewlyCreatedFromArray } from 'hooks';
import { Typography, Box, IconButton } from 'ui/atoms';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { FormSection, AddCustomPropertyModalContainer } from 'ui/organisms';
import { ListIcon, CardsIcon } from 'ui/atoms/icons';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

import { MapsProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';
import { AddMapModalContainer } from './addMapModal/AddMapModalContainer';
import { CadastreMapContainer } from './cadastreMap/CadastreMapContainer';

export const CadastralMaps = ({ cadastreItem }: MapsProps) => {
  const { formatMessage } = useLocale();
  const [isAddModalOpened, setAddModalOpened] = useState(false);
  const [isAddPropertyModalOpened, setAddPropertyModalOpened] = useState(false);

  const classes = useStyles();
  const [toggled, setToggled] = useState<string | undefined>();
  const formRef = React.useRef<FormSectionRef>(null);

  const handleOnUpload = () => {
    setAddModalOpened(false);

    formRef.current?.handleSetEdit(true);
  };

  useToggleOnNewlyCreatedFromArray(cadastreItem.maps, setToggled);

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.cadastre.map.title' })}
        isEditable={!!cadastreItem.maps?.length}
        onAdd={() => setAddModalOpened(true)}
        buttons={
          !!cadastreItem.maps?.length && (
            <>
              <IconButton variant="rounded" size="small">
                <ListIcon />
              </IconButton>
              <IconButton variant="rounded" size="small">
                <CardsIcon />
              </IconButton>
            </>
          )
        }
        ref={formRef}
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
                      <Box display="flex" alignItems="center">
                        <Typography variant="h3">
                          {cadastre.mapName || formatMessage({ id: 'pim_details.cadastre.unnamed' })}
                        </Typography>
                      </Box>
                    </>
                  }
                  cadastreMap={cadastre}
                  toggled={toggled === cadastre.id}
                  onToggleClick={() => setToggled(toggled !== cadastre.id ? cadastre.id : undefined)}
                  onAddCustomType={() => setAddPropertyModalOpened(true)}
                />
              </Box>
            )}
            onSort={() => {}}
            loading={false}
            loadingItem={<PropertyItemPlaceholder />}
            emptyTitle={formatMessage({ id: 'pim_details.cadastre.map.empty_title' })}
            emptyDescription={formatMessage({ id: 'pim_details.cadastre.map.empty_subtitle' })}
            disabled={!isEditMode}
          />
        )}
      </FormSection>
      {isAddModalOpened && (
        <AddMapModalContainer
          isOpened={isAddModalOpened}
          onClose={() => setAddModalOpened(false)}
          onUpload={handleOnUpload}
        />
      )}
      {isAddPropertyModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.CadastreMap}
          isOpened={isAddPropertyModalOpened}
          onClose={() => setAddPropertyModalOpened(false)}
        />
      )}
    </>
  );
};
