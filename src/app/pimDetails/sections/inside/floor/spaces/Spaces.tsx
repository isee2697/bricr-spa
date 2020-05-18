import React from 'react';

import { FormSection } from 'ui/organisms';
import { Grid } from 'ui/atoms';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useLocale } from 'hooks';
import { KitchenSpace } from 'api/types';

import { useStyles } from './Spaces.styles';
import { SpaceProps } from './Spaces.types';
import { KitchenContainer } from './kitchen/KitchenContainer';

export const Spaces = ({ floorType, spaces }: SpaceProps) => {
  const { open } = useModalDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <FormSection
        title={formatMessage({ id: 'pim_details.inside.space_title' }, { space: floorType })}
        onAdd={() => open('add-new-space')}
      >
        {editing =>
          spaces.map((space, index) => (
            <KitchenContainer
              key={space.id}
              spaceId={space.id}
              spaceName={space.spaceName}
              className={classes.item}
              isEditMode={editing}
              index={index}
              initialValues={space as KitchenSpace}
            />
          ))
        }
      </FormSection>
    </Grid>
  );
};
