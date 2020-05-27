import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { CadastreMap as CadastreEntity } from 'api/types';

import { MapsProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';
import { CadastreMap } from './CadastreMap';

export const CadastralMaps = ({ cadstralMaps }: MapsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [toggled, setToggled] = useState<string | undefined>(
    !!cadstralMaps && cadstralMaps.length > 1 ? cadstralMaps[0].id : undefined,
  );

  return (
    <AutosaveForm onSave={() => Promise.resolve({ error: false })} mutators={{ ...arrayMutators }} subscription={{}}>
      <FormSection title={formatMessage({ id: 'pim_details.cadastre.map.title' })} isEditable onAdd={() => {}}>
        {isEditMode => (
          <List
            className={classes.list}
            items={(cadstralMaps ?? []) as CadastreEntity[]}
            itemIndex={'id'}
            renderItem={(cadastre, _checked, checkbox) => (
              <CadastreMap
                key={cadastre.id}
                isEditMode={isEditMode}
                title={
                  <>
                    {checkbox}
                    <Typography variant="h3">{cadastre.title}</Typography>
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
    </AutosaveForm>
  );
};
